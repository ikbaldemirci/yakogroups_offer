import { categories } from "../types";
import type { SelectedItem } from "../types";
import type { OfferTotals } from "../types";

export const validatePersonCount = (countStr: string, tier: string): boolean => {
    const num = parseInt(countStr, 10);
    if (isNaN(num)) return false;
    if (tier === "0-15") return num > 0 && num <= 15;
    if (tier === "15-30") return num >= 15 && num <= 30;
    if (tier === "30-50") return num >= 30 && num <= 50;
    if (tier === "50-75") return num >= 50 && num <= 75;
    if (tier === "75-100") return num >= 75 && num <= 100;
    if (tier === "100+") return num >= 100;
    return true;
};

export function calculateOfferTotals(
    items: SelectedItem[],
    exactPersonCount?: number
): OfferTotals {
    const isMultipliedItem = (item: SelectedItem) =>
        item.product.id === "t28" ||
        item.product.subcategory === "sanat-ve-deneyim-atolyeleri" ||
        ["pe16", "pe17", "pe18", "pe19", "pe20"].includes(item.product.id);

    const multipliedItemsTotal = items
        .filter(isMultipliedItem)
        .reduce((sum, item) => sum + item.price, 0);

    const otherSubtotal = items
        .filter((item) => item.product.category !== "menus" && !isMultipliedItem(item))
        .reduce((sum, item) => sum + item.price, 0);

    const panayirTotal = items
        .filter((item) => item.product.category === "menus" && (item.product as any).subcategory === "panayir")
        .reduce((sum, item) => sum + item.price, 0);

    const baseMenuTotal = items
        .filter((item) => item.product.category === "menus" && (item.product as any).subcategory !== "panayir")
        .reduce((sum, item) => sum + item.price, 0);

    const menuTotal = baseMenuTotal > 0 && exactPersonCount && exactPersonCount > 0
        ? baseMenuTotal * exactPersonCount + panayirTotal
        : panayirTotal;

    const multipliedItemsTotalWithCount = multipliedItemsTotal > 0 && exactPersonCount && exactPersonCount > 0
        ? multipliedItemsTotal * exactPersonCount
        : 0;

    const subtotal = otherSubtotal + menuTotal + multipliedItemsTotalWithCount;

    const menuServiceFee = menuTotal > 0 ? menuTotal * 0.1 : 0;

    const serviceFeeBase = subtotal + menuServiceFee;
    const serviceFee = serviceFeeBase * 0.07;

    const vatBase = subtotal + menuServiceFee + serviceFee;
    const vatAmount = vatBase * 0.2;

    const grandTotal = subtotal + menuServiceFee + serviceFee + vatAmount;

    return {
        subtotal,
        menuTotal,
        menuServiceFee,
        serviceFee,
        vatAmount,
        grandTotal,
    };
}

export const getOfferBreakdown = (
    itemsList: SelectedItem[], 
    totals: OfferTotals, 
    exactPersonCount?: number
) => {
    return categories.map(category => {
        const categoryItems = itemsList.filter(item => {
            const inItems = category.items?.some(ci => ci.id === item.product.id) || false;
            const inSubcats = category.subcategories?.some(sub => sub.items.some(si => si.id === item.product.id)) || false;
            return inItems || inSubcats;
        });

        if (categoryItems.length === 0) return null;

        const isMenu = category.id === "menus";
        let categoryTotal = 0;
        let menuServiceFeeApplied = 0;
        let personMultiplierApplied: number | null = null;
        
        if (isMenu) {
            const panayirItems = categoryItems.filter(item => (item.product as any).subcategory === "panayir");
            const baseMenuItems = categoryItems.filter(item => (item.product as any).subcategory !== "panayir");
            
            const panayirTotal = panayirItems.reduce((sum, item) => sum + item.price, 0);
            const baseMenuTotal = baseMenuItems.reduce((sum, item) => sum + item.price, 0);
            
            if (baseMenuTotal > 0 && exactPersonCount && exactPersonCount > 0) {
                categoryTotal = (baseMenuTotal * exactPersonCount) + panayirTotal;
                personMultiplierApplied = exactPersonCount;
            } else {
                categoryTotal = baseMenuTotal + panayirTotal;
            }
                
            if (totals.menuServiceFee > 0) {
                categoryTotal += totals.menuServiceFee;
                menuServiceFeeApplied = totals.menuServiceFee;
            }
        } else {
            const multipliedItems = categoryItems.filter(item => 
                item.product.id === "t28" || 
                item.product.subcategory === "sanat-ve-deneyim-atolyeleri" ||
                ["pe16", "pe17", "pe18", "pe19", "pe20"].includes(item.product.id)
            );
            const standardItems = categoryItems.filter(item => 
                item.product.id !== "t28" && 
                item.product.subcategory !== "sanat-ve-deneyim-atolyeleri" &&
                !["pe16", "pe17", "pe18", "pe19", "pe20"].includes(item.product.id)
            );
            
            const multipliedTotal = multipliedItems.reduce((sum, item) => sum + item.price, 0);
            const standardTotal = standardItems.reduce((sum, item) => sum + item.price, 0);
            
            if (multipliedTotal > 0 && exactPersonCount && exactPersonCount > 0) {
                categoryTotal = standardTotal + (multipliedTotal * exactPersonCount);
                personMultiplierApplied = exactPersonCount;
            } else {
                categoryTotal = standardTotal + multipliedTotal;
            }
        }

        return {
            categoryId: category.id,
            categoryName: category.title.toUpperCase(),
            items: categoryItems,
            isMenuContext: isMenu,
            personMultiplierApplied,
            menuServiceFeeApplied,
            categoryTotal
        };
    }).filter(Boolean);
};

