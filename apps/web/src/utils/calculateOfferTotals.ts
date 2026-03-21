
export interface SelectedItem {
    product: {
        id: string;
        category?: string;
    };
    price: number;
}

export interface OfferTotals {
    subtotal: number;
    menuTotal: number;
    menuServiceFee: number;
    serviceFee: number;
    vatAmount: number;
    grandTotal: number;
}

export const validatePersonCount = (countStr: string, tier: string): boolean => {
    const num = parseInt(countStr, 10);
    if (isNaN(num)) return false;
    if (tier === '0-25') return num > 0 && num <= 25;
    if (tier === '25-50') return num >= 25 && num <= 50;
    if (tier === '50-75') return num >= 50 && num <= 75;
    if (tier === '75-100') return num >= 75 && num <= 100;
    if (tier === '100+') return num >= 100;
    return true;
};

export function calculateOfferTotals(
    items: SelectedItem[],
    exactPersonCount?: number
): OfferTotals {
    const otherSubtotal = items
        .filter((item) => item.product.category !== "menus")
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

    const subtotal = otherSubtotal + menuTotal;

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
