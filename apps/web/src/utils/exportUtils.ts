import * as XLSX from "xlsx";
import type { UserInfo } from "../components/UserInfoForm";
import type { Product } from "../types";

export interface SelectedItem {
    product: Product;
    price: number;
}

export const exportToExcel = (userInfo: UserInfo, selectedItems: Record<string, SelectedItem>, totalAmount: number) => {

    const customerData = [
        { Alan: "Ad", Deger: userInfo.firstName },
        { Alan: "Soyad", Deger: userInfo.lastName },
        { Alan: "Şirket Adı", Deger: userInfo.companyName },
        { Alan: "E-posta", Deger: userInfo.email },
        { Alan: "Telefon", Deger: userInfo.phone },
        { Alan: "Kişi Sayısı", Deger: userInfo.personCount }
    ];
    const wsCustomer = XLSX.utils.json_to_sheet(customerData);

    const itemsList = Object.values(selectedItems).map((item) => ({
        "Ürün Kodu": item.product.id,
        "Kategori / Ad": item.product.title,
        "Fiyat (TL)": item.price
    }));

    itemsList.push({
        "Ürün Kodu": "",
        "Kategori / Ad": "TOPLAM TUTAR",
        "Fiyat (TL)": totalAmount
    });

    const wsItems = XLSX.utils.json_to_sheet(itemsList);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, wsCustomer, "Müşteri Bilgileri");
    XLSX.utils.book_append_sheet(wb, wsItems, "Seçilen Ürünler");

    XLSX.writeFile(wb, `YakoGroups_Teklif_${userInfo.firstName}_${userInfo.lastName}.xlsx`);
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
