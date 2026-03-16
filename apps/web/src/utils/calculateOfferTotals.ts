import type { Category } from "../types";

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

export function calculateOfferTotals(
    items: SelectedItem[],
    _categories?: Category[]
): OfferTotals {
    const subtotal = items.reduce((sum, item) => sum + item.price, 0);

    const menuTotal = items
        .filter((item) => item.product.category === "menus")
        .reduce((sum, item) => sum + item.price, 0);

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
