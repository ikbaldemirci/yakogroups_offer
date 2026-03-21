import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import type { UserInfo } from "../components/UserInfoForm";
import type { Product } from "../types";
import { categories } from "../types";
import type { OfferTotals } from "./calculateOfferTotals";
import { theme } from "../theme";

const getArgb = (colorString: string) => "FF" + colorString.replace("#", "").toUpperCase();

export interface SelectedItem {
    product: Product;
    price: number;
}

export const exportToExcel = async (
    userInfo: UserInfo, 
    selectedItems: Record<string, SelectedItem>, 
    totals: OfferTotals,
    exactPersonCount?: number
) => {
    const workbook = new ExcelJS.Workbook();

    const wsItems = workbook.addWorksheet("Teklif Özeti");
    wsItems.columns = [
        { width: 45 },
        { width: 25 },
    ];

    const customerHeaderRow = wsItems.addRow(["MÜŞTERİ BİLGİLERİ", ""]);
    customerHeaderRow.font = { bold: true, size: 12 };
    customerHeaderRow.alignment = { horizontal: "center" };
    wsItems.mergeCells(`A${customerHeaderRow.number}:B${customerHeaderRow.number}`);
    customerHeaderRow.getCell(1).border = {
        bottom: { style: "thick", color: { argb: getArgb(theme.palette.excel.border) } }
    };

    wsItems.addRow(["Ad Soyad:", `${userInfo.firstName} ${userInfo.lastName}`]);
    wsItems.addRow(["Şirket Adı:", userInfo.companyName]);
    wsItems.addRow(["E-posta:", userInfo.email]);
    wsItems.addRow(["Telefon:", userInfo.phone]);
    let lastCustomerRow = wsItems.addRow(["Kişi Grubu:", userInfo.personCount]);
    if (exactPersonCount) {
        lastCustomerRow = wsItems.addRow(["Tam Kişi Sayısı:", `${exactPersonCount} kişi`]);
    }
    lastCustomerRow.eachCell(c => {
        c.border = { ...c.border as any, bottom: { style: "thick", color: { argb: getArgb(theme.palette.excel.border) } } };
    });

    const headerRow = wsItems.addRow(["Seçilen Hizmet / Ürün Adı", "Fiyat (TL)"]);
    headerRow.font = { bold: true, size: 12 };
    headerRow.getCell(2).alignment = { horizontal: "right" };


    const items = Object.values(selectedItems);
    const borderColor = getArgb(theme.palette.excel.border);
    const textColor = getArgb(theme.palette.excel.text);
    const primaryColor = getArgb(theme.palette.primary.main);

    categories.forEach((category) => {
        const categoryItems = items.filter(item => {
            const inItems = category.items?.some(ci => ci.id === item.product.id) || false;
            const inSubcats = category.subcategories?.some(sub => sub.items.some(si => si.id === item.product.id)) || false;
            return inItems || inSubcats;
        });

        if (categoryItems.length === 0) return;

        const isMenu = category.id === "menus";
        const baseCategoryTotal = categoryItems.reduce((sum, item) => sum + item.price, 0);
        let categoryTotal = isMenu && exactPersonCount && exactPersonCount > 0 
            ? baseCategoryTotal * exactPersonCount 
            : baseCategoryTotal;

        if (isMenu && totals.menuServiceFee > 0) {
            categoryTotal += totals.menuServiceFee;
        }

        const catRow = wsItems.addRow([category.title.toUpperCase(), ""]);
        catRow.font = { bold: true, size: 11, color: { argb: textColor } };
        catRow.eachCell(c => {
            c.border = { top: { style: "thick", color: { argb: borderColor } } };
        });

        categoryItems.forEach(item => {
            const row = wsItems.addRow([
                item.product.title, 
                `${item.price.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`
            ]);
            row.getCell(2).alignment = { horizontal: "right" };
        });

        if (isMenu && exactPersonCount && exactPersonCount > 0) {
            const row = wsItems.addRow([`Kişi Sayısı Çarpanı:`, `${exactPersonCount} kişi`]);
            row.getCell(2).alignment = { horizontal: "right" };
        }

        if (isMenu && totals.menuServiceFee > 0) {
            const row = wsItems.addRow([
                `Menü Servis Personel Bedeli:`, 
                `${totals.menuServiceFee.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`
            ]);
            row.getCell(2).alignment = { horizontal: "right" };
        }

        const araTopRow = wsItems.addRow([
            "ARA TOPLAM:", 
            `${categoryTotal.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`
        ]);
        araTopRow.font = { bold: true, color: { argb: primaryColor } };
        araTopRow.getCell(2).alignment = { horizontal: "right" };
        araTopRow.eachCell(c => {
            c.border = { ...c.border as any, bottom: { style: "thick", color: { argb: borderColor } } };
        });

    });

    if (totals.subtotal > 0) {
        const adjustedSubtotal = totals.subtotal + totals.menuServiceFee;
        
        const r1 = wsItems.addRow(["Alınan Hizmetler Toplamı (KDV hariç):", `${adjustedSubtotal.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`]);
        r1.getCell(2).alignment = { horizontal: "right" };
        
        const r2 = wsItems.addRow(["Hizmet Bedeli:", `${totals.serviceFee.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`]);
        r2.getCell(2).alignment = { horizontal: "right" };

        const r3 = wsItems.addRow(["KDV:", `${totals.vatAmount.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`]);
        r3.getCell(2).alignment = { horizontal: "right" };

        const grandTotalRow = wsItems.addRow([
            "GENEL TOPLAM (KDV Dahil):", 
            `${totals.grandTotal.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`
        ]);
        grandTotalRow.font = { bold: true, size: 14, color: { argb: primaryColor } };
        grandTotalRow.getCell(2).alignment = { horizontal: "right" };
        grandTotalRow.eachCell(c => {
            c.border = { ...c.border as any, top: { style: "thick", color: { argb: borderColor } } };
        });
    }

    const rowCount = wsItems.rowCount;
    if (rowCount > 0) {
        for (let i = 1; i <= rowCount; i++) {
            const row = wsItems.getRow(i);
            const c1 = row.getCell(1);
            const c2 = row.getCell(2);

            c1.border = { ...c1.border as any, left: { style: "thick", color: { argb: borderColor } } };
            c2.border = { ...c2.border as any, right: { style: "thick", color: { argb: borderColor } } };

            if (i === 1) {
                c1.border = { ...c1.border as any, top: { style: "thick", color: { argb: borderColor } } };
                c2.border = { ...c2.border as any, top: { style: "thick", color: { argb: borderColor } } };
            }

            if (i === rowCount) {
                c1.border = { ...c1.border as any, bottom: { style: "thick", color: { argb: borderColor } } };
                c2.border = { ...c2.border as any, bottom: { style: "thick", color: { argb: borderColor } } };
            }
        }
    }

    try {
        const response = await fetch('/images/kase.png');
        if (response.ok) {
            const imageBuffer = await response.arrayBuffer();
            const imageId = workbook.addImage({
                buffer: imageBuffer,
                extension: 'png',
            });
            wsItems.addImage(imageId, {
                tl: { col: 1, row: wsItems.rowCount + 1 },
                ext: { width: 150, height: 100 }
            });
        }
    } catch (err) {
        console.error("Kaşe resmi eklenirken hata oluştu:", err);
    }

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(blob, `YakoGroups_Teklif_${userInfo.firstName}_${userInfo.lastName}.xlsx`);
};

export const sendToCRM = async (userInfo: UserInfo, selectedItems: Record<string, SelectedItem>, totalAmount: number) => {
    const payload = {
        customer: userInfo,
        items: Object.values(selectedItems).map(item => ({
            productId: item.product.id,
            productName: item.product.title,
            price: item.price
        })),
        totalAmount
    };

    // CRM sitemine gönderme işlemi burada yapılacak. Şu an için sadece konsola yazdırıyoruz.
    console.log(JSON.stringify(payload, null, 2));

    return new Promise(resolve => setTimeout(resolve, 1500));
};
