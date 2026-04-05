import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import type { UserInfo } from "../components/UserInfoForm";
import type { SelectedItem } from "../types";
import type { OfferTotals } from "../types";
import { getOfferBreakdown } from "./calculateOfferTotals";
import { theme } from "../theme";

const getArgb = (colorString: string) => "FF" + colorString.replace("#", "").toUpperCase();

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

    wsItems.addRow(["Ad Soyad:", userInfo.fullName]);
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

    const borderColor = getArgb(theme.palette.excel.border);
    const textColor = getArgb(theme.palette.excel.text);
    const primaryColor = getArgb(theme.palette.primary.main);

    const breakdown = getOfferBreakdown(Object.values(selectedItems), totals, exactPersonCount);

    breakdown.forEach((catGroup: any) => {
        const catRow = wsItems.addRow([catGroup.categoryName, ""]);
        catRow.font = { bold: true, size: 11, color: { argb: textColor } };
        catRow.eachCell(c => {
            c.border = { top: { style: "thick", color: { argb: borderColor } } };
        });

        catGroup.items.forEach((item: SelectedItem) => {
            const row = wsItems.addRow([
                item.product.title, 
                `${item.price.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`
            ]);
            row.getCell(2).alignment = { horizontal: "right" };
        });

        if (catGroup.personMultiplierApplied) {
            const row = wsItems.addRow([`Kişi Sayısı Çarpanı:`, `${catGroup.personMultiplierApplied} kişi`]);
            row.getCell(2).alignment = { horizontal: "right" };
        }

        if (catGroup.menuServiceFeeApplied > 0) {
            const row = wsItems.addRow([
                `Menü Servis Personel Bedeli:`, 
                `${catGroup.menuServiceFeeApplied.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`
            ]);
            row.getCell(2).alignment = { horizontal: "right" };
        }

        const araTopRow = wsItems.addRow([
            "ARA TOPLAM:", 
            `${catGroup.categoryTotal.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`
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
        const response = await fetch("/images/kase.png");
        if (response.ok) {
            const imageBuffer = await response.arrayBuffer();
            const imageId = workbook.addImage({
                buffer: imageBuffer,
                extension: "png",
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
    saveAs(blob, `YakoGroups_Teklif_${userInfo.fullName.replace(/\s+/g, "_")}.xlsx`);
};

// export const sendToCRM = async (
//     userInfo: UserInfo, 
//     selectedItems: Record<string, SelectedItem>, 
//     totals: OfferTotals,
//     exactPersonCount?: number
// ) => {
//     const itemsList = Object.values(selectedItems);
//     const breakdown = getOfferBreakdown(itemsList, totals, exactPersonCount);

//     const categorizedItems = breakdown.map((catGroup: any) => ({
//         ...catGroup,
//         items: catGroup.items.map((item: SelectedItem) => ({
//             productId: item.product.id,
//             productName: item.product.title,
//             price: item.price
//         }))
//     }));

//     const payload = {
//         customer: {
//             ...userInfo,
//             exactPersonCount: exactPersonCount || userInfo.personCount
//         },
//         offerDetails: {
//             categorizedItems,
//             summary: {
//                 totalServicesPrice: totals.subtotal,
//                 menuServicePersonnelFee: totals.menuServiceFee,
//                 totalBeforeVatWithServiceFee: totals.subtotal + totals.menuServiceFee,
//                 agencyServiceFee: totals.serviceFee,
//                 vatAmount: totals.vatAmount,
//                 grandTotal: totals.grandTotal
//             }
//         }
//     };

//     // CRM sitemine gönderme işlemi burada yapılacak. Şu an için sadece konsola yazdırıyoruz.
//     console.log(JSON.stringify(payload, null, 2));

//     return new Promise(resolve => setTimeout(resolve, 1500));
// };

export const sendOfferToWebhook = async (
    userInfo: UserInfo, 
    selectedItems: Record<string, SelectedItem>, 
    totals: OfferTotals,
    exactPersonCount?: number
) => {
    const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL;
    if (!webhookUrl) {
        console.warn("Webhook URL tanımlı değil (VITE_MAKE_WEBHOOK_URL). Sadece konsola yazdırılıyor.");
        return;
    }

    const itemsList = Object.values(selectedItems);
    const breakdown = getOfferBreakdown(itemsList, totals, exactPersonCount);

    const categorizedItems = breakdown.map((catGroup: any) => ({
        ...catGroup,
        items: catGroup.items.map((item: SelectedItem) => ({
            productId: item.product.id,
            productName: item.product.title,
            price: item.price
        }))
    }));

    let formattedMessage = "🚨 *YENİ BİR TEKLİF OLUŞTURULDU* 🚨\n\n";
    formattedMessage += "👤 *Müşteri Bilgileri:*\n";
    formattedMessage += "*Ad Soyad:* " + userInfo.fullName + "\n";
    formattedMessage += "*Şirket:* " + userInfo.companyName + "\n";
    formattedMessage += "*E-Posta:* " + userInfo.email + "\n";
    formattedMessage += "*Telefon:* " + userInfo.phone + "\n";
    formattedMessage += "*Kişi Sayısı:* " + (exactPersonCount || userInfo.personCount) + "\n\n";

    formattedMessage += "🛒 *Seçilen Hizmetler:*\n";
    
    categorizedItems.forEach((cat: any) => {
        formattedMessage += "\n🔹 _" + cat.categoryName + "_:\n";
        cat.items.forEach((item: any) => {
            formattedMessage += "  - " + item.productName + " (" + item.price.toLocaleString("tr-TR") + " ₺)\n";
        });
        if (cat.menuServiceFeeApplied > 0) {
            formattedMessage += "  - Menü Servis Bedeli: " + cat.menuServiceFeeApplied.toLocaleString("tr-TR") + " ₺\n";
        }
        formattedMessage += "  *Ara Toplam: " + cat.categoryTotal.toLocaleString("tr-TR") + " ₺*\n";
    });

    formattedMessage += "\n💰 *Fiyat Özeti:*\n";
    formattedMessage += "Hizmetler Toplamı: " + totals.subtotal.toLocaleString("tr-TR") + " ₺\n";
    formattedMessage += "Personel/Servis: " + totals.menuServiceFee.toLocaleString("tr-TR") + " ₺\n";
    formattedMessage += "Hizmet Bedeli: " + totals.serviceFee.toLocaleString("tr-TR") + " ₺\n";
    formattedMessage += "KDV: " + totals.vatAmount.toLocaleString("tr-TR") + " ₺\n";
    formattedMessage += "*GENEL TOPLAM: " + totals.grandTotal.toLocaleString("tr-TR") + " ₺*";

    const payload = {
        source: "yakogroups_offer_web",
        formattedMessage: formattedMessage,
        customer: {
            ...userInfo,
            exactPersonCount: exactPersonCount || userInfo.personCount
        },
        offerDetails: {
            categorizedItems,
            summary: {
                totalServicesPrice: totals.subtotal,
                menuServicePersonnelFee: totals.menuServiceFee,
                totalBeforeVatWithServiceFee: totals.subtotal + totals.menuServiceFee,
                agencyServiceFee: totals.serviceFee,
                vatAmount: totals.vatAmount,
                grandTotal: totals.grandTotal
            }
        },
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            console.error("Webhook gönderim hatası:", response.statusText);
        } else {
            console.log("Teklif webhook'a başarıyla gönderildi!");
        }
    } catch (error) {
        console.error("Webhook isteği sırasında hata oluştu:", error);
    }
};
