import React, { useState } from "react";
import {
    Box,
    Typography,
    Button,
    Paper,
    List,
    ListItem,
    ListItemText,
    Divider,
    Alert,
    CircularProgress,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Snackbar,
    TextField,
    Checkbox,
    FormControlLabel
} from "@mui/material";
import { exportToExcel, sendOfferToWebhook } from "../utils/exportUtils"; 
import DownloadIcon from "@mui/icons-material/Download";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { categories } from "../types";
import { useOffer } from "../context/OfferContext";
import { calculateOfferTotals, validatePersonCount } from "../utils/calculateOfferTotals";

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

export const SummaryCard: React.FC<{ isCart?: boolean }> = ({ isCart = false }) => {
    const {
        userInfo,
        selectedItems,
        handleCartReset,
        handleItemDeselect,
        setCartOpen,
        handleNavigateToStep
    } = useOffer();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [exactPersonCount, setExactPersonCount] = useState<string>("");  
    
    const [t23Selection, setT23Selection] = useState<"3 Adet" | "5 Adet" | "10 Adet">("3 Adet");
    const [pe1HasDj, setPe1HasDj] = useState(false);
    const [pe3Selections, setPe3Selections] = useState<string[]>(["Kamera"]);
    const [dc12Package, setDc12Package] = useState<"Basic" | "Medium" | "Premium">("Basic");
    const [dc13Package, setDc13Package] = useState<"Basic" | "Medium" | "Premium">("Basic");
    const [dc14Package, setDc14Package] = useState<"Basic" | "Medium" | "Premium">("Basic");
    const [dc15Package, setDc15Package] = useState<"Basic" | "Medium" | "Premium">("Basic");
    const conceptIds = ["dc12", "dc13", "dc14", "dc15"];
    const [ka10Selection, setKa10Selection] = useState<"Çadırsız" | "Çadırlı">("Çadırsız");
    const [itemQuantities, setItemQuantities] = useState<Record<string, number>>({});

    const pieceBasedIds = ["pe6", "pe7", "pe8", "pe9", "pe12", "pe13", "pe21", "pe22", "pe23", "pe24", "pe25", "pe26"];


    const rawItems = Object.values(selectedItems);
    
    const items = rawItems.map(item => {
        if (pieceBasedIds.includes(item.product.id)) {
            const qty = itemQuantities[item.product.id] === undefined ? 1 : itemQuantities[item.product.id];
            return {
                ...item,
                price: item.price * qty,
                product: {
                    ...item.product,
                    title: `${item.product.title} (${qty} Adet)`
                }
            };
        }
        if (item.product.id === "t23") {
            let newPrice = 45000;
            if (t23Selection === "5 Adet") newPrice = 75000;
            if (t23Selection === "10 Adet") newPrice = 150000;
            return {
                ...item,
                price: newPrice,
                product: {
                    ...item.product,
                    title: `${item.product.title} (${t23Selection})`
                }
            };
        }
        if (item.product.id === "pe1") {
            const isDjSelected = pe1HasDj;
            return {
                ...item,
                price: isDjSelected ? 40000 : 25000,
                product: {
                    ...item.product,
                    title: isDjSelected ? `${item.product.title} (DJ'li Paket)` : `${item.product.title} (DJ'siz Paket)`
                }
            };
        }
        if (item.product.id === "ka10") {
            const isCadirli = ka10Selection === "Çadırlı";
            return {
                ...item,
                price: isCadirli ? 20000 : 15000,
                product: {
                    ...item.product,
                    title: `${item.product.title} (${ka10Selection})`
                }
            };
        }
        if (item.product.id === "pe3") {
            let newPrice = 0;
            if (pe3Selections.includes("Fotoğraf")) newPrice += 14000;
            if (pe3Selections.includes("Kamera")) newPrice += 14000;
            if (pe3Selections.includes("Drone")) newPrice += 10000;
            if (pe3Selections.includes("Montaj")) newPrice += 14000;
            
            const selectionText = pe3Selections.length > 0 ? ` (${pe3Selections.join(', ')})` : "";
            
            return {
                ...item,
                price: newPrice,
                product: {
                    ...item.product,
                    title: `${item.product.title}${selectionText}`
                }
            };
        }
       

            if (conceptIds.includes(item.product.id)) {
                const selectedPackage =
                    item.product.id === "dc12" ? dc12Package :
                    item.product.id === "dc13" ? dc13Package :
                    item.product.id === "dc14" ? dc14Package :
                    dc15Package;

                const pkgs = (item.product as any).packages as { label: string; price: number }[] | undefined;
                const pkg = pkgs?.find(p => p.label === selectedPackage);

                return {
                    ...item,
                    price: pkg?.price ?? item.price,
                    product: {
                        ...item.product,
                        title: `${item.product.title} (${selectedPackage})`
                    }
                };
            }
        return item;
    });

    const modifiedSelectedItemsForExport = items.reduce((acc, item) => {
        acc[item.product.id] = item;
        return acc;
    }, {} as typeof selectedItems);

    const parsedCount = parseInt(exactPersonCount, 10);
    const isNumberValid = !isNaN(parsedCount) && parsedCount > 0;
    const isRangeValid = userInfo ? validatePersonCount(exactPersonCount, userInfo.personCount) : false;
    const isValidCount = isNumberValid && isRangeValid;

    const { subtotal, menuTotal, menuServiceFee, serviceFee, vatAmount: vat, grandTotal } = calculateOfferTotals(items, isValidCount ? parsedCount : undefined);
    const hasMenu = items.some(item => item.product.category === "menus");
    const hasT28 = items.some(item => item.product.id === "t28");
    const hasSanatVeDeneyimAtolyeleri = items.some(item => item.product.subcategory === "sanat-ve-deneyim-atolyeleri");
    const hasMultipliedItems = items.some(item => ["pe16", "pe17", "pe18", "pe19", "pe20"].includes(item.product.id));
    const needsPersonCount = hasMenu || hasT28 || hasSanatVeDeneyimAtolyeleri || hasMultipliedItems;
    
    const zeroPriceItems = items.filter(item => item.price === 0);
        const hasZeroPriceItem = zeroPriceItems.length > 0;
        const zeroPriceItemNames = zeroPriceItems.map(item => item.product.title).join(", ");
        
    const whatsappText = hasZeroPriceItem 
        ? `Merhaba, web sitenizden seçtiğim fiyata tabi hizmetler (${zeroPriceItemNames}) için detaylı fiyat teklifi almak istiyorum.` 
        : "Merhaba, web sitenizden seçtiğim hizmetler için teklif almak istiyorum.";

    const handleExportOffer = async () => {
        if (!userInfo) return;
        if (items.length === 0) {
            setErrorMessage("Lütfen teklif oluşturmak için en az bir hizmet seçiniz.");
            setErrorOpen(true);
            return;
        }
        if (needsPersonCount && !validatePersonCount(exactPersonCount, userInfo.personCount)) {
            setErrorMessage(`${userInfo.personCount} kişilik kategori seçtiniz, onay için kişi sayınızı bu aralığa tam uygun giriniz.`);
            setErrorOpen(true);
            return;
        }

        for (const item of rawItems) {
            if (item.product.id === "pe24") {
                const qty = itemQuantities["pe24"] === undefined ? 1 : itemQuantities["pe24"];
                if (qty < 20) {
                    setErrorMessage("Masa Bayrağı için en az 20 adet seçmelisiniz.");
                    setErrorOpen(true);
                    return;
                }
            }
            if (item.product.id === "pe21") {
                const qty = itemQuantities["pe21"] === undefined ? 1 : itemQuantities["pe21"];
                if (qty < 2) {
                    setErrorMessage(`${item.product.title} için en az 2 adet seçmelisiniz.`);
                    setErrorOpen(true);
                    return;
                }
            }
        }

        const { blob, fileName } = await exportToExcel(
            userInfo, 
            modifiedSelectedItemsForExport, 
            { subtotal, menuTotal, menuServiceFee, serviceFee, vatAmount: vat, grandTotal }, 
            isValidCount ? parsedCount : undefined
        );
        console.log("CRM'e gönderme işlemi tetiklendi (Hazırlık aşamasında)...", { 
            MusteriBilgisi: userInfo,
            SecilenHizmetler: modifiedSelectedItemsForExport,
            GenelToplam: grandTotal
        });
        setIsSubmitting(true);
        await sendOfferToWebhook(
            userInfo,
            modifiedSelectedItemsForExport,
            { subtotal, menuTotal, menuServiceFee, serviceFee, vatAmount: vat, grandTotal },
            isValidCount ? parsedCount : undefined,
            blob,
            fileName
        );
        setIsSubmitting(false);
        setSuccess(true);
    };

    if (!userInfo) return null;

    if (success) {
        return (
            <Box sx={{ mt: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <CheckCircleIcon color="success" sx={{ fontSize: 80, mb: 2 }} />
                <Typography variant="h5" gutterBottom fontWeight="bold">
                    Teklif Başarıyla Oluşturuldu!
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph align="center">
                    Seçimleriniz CRM sistemimize kaydedildi. En kısa sürede sizinle iletişime geçeceğiz.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                    <Button variant="contained" onClick={handleCartReset}>
                        Yeni Teklif Oluştur
                    </Button>
                </Box>
            </Box>
        );
    }

    return (
        <Box sx={{ mt: 3 }}>
            <Snackbar 
                open={errorOpen} 
                autoHideDuration={4000} 
                onClose={() => setErrorOpen(false)} 
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={() => setErrorOpen(false)} severity="error" sx={{ width: "100%", fontWeight: "bold" }}>
                    {errorMessage}
                </Alert>
            </Snackbar>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography variant="h5" fontWeight="bold" color="primary">
                    Teklif Özeti
                </Typography>
                {isCart && (
                    <IconButton onClick={() => setCartOpen(false)} size="small">
                        <CloseIcon />
                    </IconButton>
                )}
            </Box>
            
            <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>Müşteri Bilgileri</Typography>
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 2fr" }, gap: 2 }}>
                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">Ad Soyad</Typography>
                        <Typography variant="body1" fontWeight="medium">{userInfo.fullName}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">Şirket</Typography>
                        <Typography variant="body1" fontWeight="medium">{userInfo.companyName}</Typography>
                    </Box>
                    <Box sx={{ gridColumn: { xs: "1 / -1", sm: "auto" } }}>
                        <Typography variant="subtitle2" color="text.secondary">Kişi Sayısı Grubu</Typography>
                        <Typography variant="body1" fontWeight="medium">{userInfo.personCount}</Typography>
                    </Box>
                </Box>
            </Paper>

            <Paper elevation={2} sx={{ borderRadius: 2, overflow: "hidden" }}>
                <Box sx={{ bgcolor: "primary.main", color: "primary.contrastText", p: 2 }}>
                    <Typography variant="h6">Seçilen Hizmetler</Typography>
                </Box>

                {items.length === 0 ? (
                    <Alert severity="info" sx={{ m: 2 }}>
                        Sadece "İstemiyorum" seçeneklerini tercih ettiniz. Herhangi bir hizmet eklenmedi.
                    </Alert>
                ) : (
                    <Box>
                        {categories.map((category) => {
                            const categoryItems = items.filter(item => {
                                const inItems = category.items?.some(ci => ci.id === item.product.id) || false;
                                const inSubcategories = category.subcategories?.some(sub => sub.items.some(si => si.id === item.product.id)) || false;
                                return inItems || inSubcategories;
                            });

                            if (categoryItems.length === 0) return null;

                            const isMenu = category.id === "menus";
                            const hasT28InCategory = categoryItems.some(item => item.product.id === "t28");
                            const hasSanatVeDeneyimAtolyeleriInCategory = categoryItems.some(item => item.product.subcategory === "sanat-ve-deneyim-atolyeleri");
                            const hasMultipliedItemsInCategory = categoryItems.some(item => ["pe16", "pe17", "pe18", "pe19", "pe20"].includes(item.product.id));
                            const categoryNeedsPersonCount = isMenu || hasT28InCategory || hasSanatVeDeneyimAtolyeleriInCategory || hasMultipliedItemsInCategory;

                            const categoryTotal = categoryItems.reduce((sum, item) => {
                                if (item.product.category === "menus" && (item.product as any).subcategory !== "panayir") {
                                    return sum + (isValidCount ? item.price * parsedCount : 0);
                                }
                                if (item.product.id === "t28" || item.product.subcategory === "sanat-ve-deneyim-atolyeleri" || ["pe16", "pe17", "pe18", "pe19", "pe20"].includes(item.product.id)) {
                                    return sum + (isValidCount ? item.price * parsedCount : 0);
                                }
                                return sum + item.price;
                            }, 0) + (isMenu && isValidCount ? menuServiceFee : 0);

                            return (
                                <Accordion key={category.id} defaultExpanded>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", pr: 2, alignItems: "center" }}>
                                            <Typography fontWeight="bold">{category.title}</Typography>
                                            <Typography variant="body2" color="primary" fontWeight="bold">
                                                {hasZeroPriceItem ? "Teklif İsteyiniz" : categoryNeedsPersonCount && !isValidCount ? "Kişi sayısını giriniz" : `${categoryTotal.toLocaleString("tr-TR")} ₺`}
                                            </Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ p: 0 }}>
                                        <List disablePadding>
                                            {categoryItems.map((item, index) => (
                                                <React.Fragment key={item.product.id}>
                                                    <ListItem sx={{ py: 1.5, px: 3, display: "block" }}>
                                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                                                            <ListItemText
                                                                primary={<Typography>{item.product.title}</Typography>}
                                                                secondary={item.product.description}
                                                            />
                                                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, ml: 2, mt: 1 }}>
                                                                <Typography variant="body1" fontWeight="bold" color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
                                                                    {item.price.toLocaleString("tr-TR")} ₺
                                                                </Typography>
                                                                <IconButton
                                                                    edge="end"
                                                                    aria-label="delete"
                                                                    color="error"
                                                                    size="small"
                                                                    onClick={() => handleItemDeselect(item.product.id)}
                                                                >
                                                                    <DeleteIcon fontSize="small" />
                                                                </IconButton>
                                                            </Box>
                                                        </Box>

                                                        {item.product.id === "t23" && (
                                                            <Box sx={{ mt: 1, display: "flex", gap: 2, flexWrap: "wrap", flexDirection: { xs: "column", sm: "row" } }}>
                                                                <FormControlLabel
                                                                    control={<Checkbox checked={t23Selection === "3 Adet"} onChange={() => setT23Selection("3 Adet")} color="primary" />}
                                                                    label="3 Adet (45.000 ₺)"
                                                                />
                                                                <FormControlLabel
                                                                    control={<Checkbox checked={t23Selection === "5 Adet"} onChange={() => setT23Selection("5 Adet")} color="primary" />}
                                                                    label="5 Adet (75.000 ₺)"
                                                                />
                                                                <FormControlLabel
                                                                    control={<Checkbox checked={t23Selection === "10 Adet"} onChange={() => setT23Selection("10 Adet")} color="primary" />}
                                                                    label="10 Adet (150.000 ₺)"
                                                                />
                                                            </Box>
                                                        )}

                                                        {pieceBasedIds.includes(item.product.id) && (
                                                            <Box sx={{ mt: 1 }}>
                                                                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                                                    <Typography variant="body2" color="text.secondary">
                                                                        Adet (1-100):
                                                                    </Typography>
                                                                    <TextField
                                                                        size="small"
                                                                        type="number"
                                                                        inputProps={{ min: 1, max: 100 }}
                                                                        value={itemQuantities[item.product.id] === undefined ? 1 : itemQuantities[item.product.id]}
                                                                        onChange={(e) => {
                                                                            let val = parseInt(e.target.value, 10);
                                                                            if (isNaN(val)) val = 1;
                                                                            if (val < 1) val = 1;
                                                                            if (val > 100) val = 100;
                                                                            setItemQuantities(prev => ({ ...prev, [item.product.id]: val }));
                                                                        }}
                                                                        sx={{ width: 80, bgcolor: "white" }}
                                                                    />
                                                                </Box>
                                                                {item.product.id === "pe24" && (itemQuantities[item.product.id] === undefined ? 1 : itemQuantities[item.product.id]) < 20 && (
                                                                    <Typography variant="caption" color="error" sx={{ display: "block", mt: 0.5 }}>
                                                                        En az 20 adet yazabilirsiniz.
                                                                    </Typography>
                                                                )}                                                            
                                                                {item.product.id === "pe21" && (itemQuantities[item.product.id] === undefined ? 1 : itemQuantities[item.product.id]) < 2 && (
                                                                    <Typography variant="caption" color="error" sx={{ display: "block", mt: 0.5 }}>
                                                                        En az 2 adet yazabilirsiniz.
                                                                    </Typography>
                                                                )}
                                                            </Box>
                                                        )}

                                                        {item.product.id === "ka10" && (
                                                            <Box sx={{ mt: 1, display: "flex", gap: 2, flexWrap: "wrap", flexDirection: { xs: "column", sm: "row" } }}>
                                                                <FormControlLabel
                                                                    control={
                                                                        <Checkbox 
                                                                            checked={ka10Selection === "Çadırsız"} 
                                                                            onChange={() => setKa10Selection("Çadırsız")} 
                                                                            color="primary" 
                                                                        />
                                                                    }
                                                                    label="Çadırsız (15.000 ₺)"
                                                                />
                                                                <FormControlLabel
                                                                    control={
                                                                        <Checkbox 
                                                                            checked={ka10Selection === "Çadırlı"} 
                                                                            onChange={() => setKa10Selection("Çadırlı")} 
                                                                            color="primary" 
                                                                        />
                                                                    }
                                                                    label="Çadırlı (20.000 ₺)"
                                                                />
                                                            </Box>
                                                        )}
                                                        {item.product.id === "pe1" && (
                                                            <Box sx={{ mt: 1 }}>
                                                                <FormControlLabel
                                                                    control={<Checkbox checked={pe1HasDj} onChange={(e) => setPe1HasDj(e.target.checked)} color="primary" />}
                                                                    label="DJ Hizmeti Ekle (+15.000 ₺)"
                                                                />
                                                            </Box>
                                                        )}

                                                        {conceptIds.includes(item.product.id) && (
                                                            <Box sx={{ mt: 1, display: "flex", gap: 2, flexWrap: "wrap", flexDirection: { xs: "column", sm: "row" } }}>
                                                                {(["Basic", "Medium", "Premium"] as const).map((label) => {
                                                                    const pkgs = (item.product as any).packages as { label: string; price: number }[] | undefined;
                                                                    const pkg = pkgs?.find(p => p.label === label);

                                                                    const checked =
                                                                        item.product.id === "dc12" ? dc12Package === label :
                                                                        item.product.id === "dc13" ? dc13Package === label :
                                                                        item.product.id === "dc14" ? dc14Package === label :
                                                                        dc15Package === label;

                                                                    const handleChange = () => {
                                                                        if (item.product.id === "dc12") setDc12Package(label);
                                                                        else if (item.product.id === "dc13") setDc13Package(label);
                                                                        else if (item.product.id === "dc14") setDc14Package(label);
                                                                        else setDc15Package(label);
                                                                    };

                                                                    return (
                                                                        <FormControlLabel
                                                                            key={label}
                                                                            control={
                                                                                <Checkbox
                                                                                    checked={checked}
                                                                                    onChange={handleChange}
                                                                                    color="primary"
                                                                                />
                                                                            }
                                                                            label={`${label}${pkg ? ` (${pkg.price.toLocaleString("tr-TR")} ₺)` : ""}`}
                                                                        />
                                                                    );
                                                                })}
                                                            </Box>
                                                        )}

                                                        {item.product.id === "pe3" && (
                                                            <Box sx={{ mt: 1, display: "flex", gap: 2, flexWrap: "wrap", flexDirection: { xs: "column", sm: "row" } }}>
                                                                <FormControlLabel
                                                                    control={<Checkbox checked={pe3Selections.includes("Fotoğraf")} onChange={(e) => {
                                                                        if (e.target.checked) setPe3Selections(prev => [...prev, "Fotoğraf"]);
                                                                        else setPe3Selections(prev => prev.length > 1 ? prev.filter(s => s !== "Fotoğraf") : prev);
                                                                    }} />}
                                                                    label="Fotoğraf (14.000 ₺)"
                                                                />
                                                                <FormControlLabel
                                                                    control={<Checkbox checked={pe3Selections.includes("Kamera")} onChange={(e) => {
                                                                        if (e.target.checked) setPe3Selections(prev => [...prev, "Kamera"]);
                                                                        else setPe3Selections(prev => prev.length > 1 ? prev.filter(s => s !== "Kamera") : prev);
                                                                    }} />}
                                                                    label="Kamera (14.000 ₺)"
                                                                />
                                                                <FormControlLabel
                                                                    control={<Checkbox checked={pe3Selections.includes("Drone")} onChange={(e) => {
                                                                        if (e.target.checked) setPe3Selections(prev => [...prev, "Drone"]);
                                                                        else setPe3Selections(prev => prev.length > 1 ? prev.filter(s => s !== "Drone") : prev);
                                                                    }} />}
                                                                    label="Drone (10.000 ₺)"
                                                                />
                                                                <FormControlLabel
                                                                    control={<Checkbox checked={pe3Selections.includes("Montaj")} onChange={(e) => {
                                                                        if (e.target.checked) setPe3Selections(prev => [...prev, "Montaj"]);
                                                                        else setPe3Selections(prev => prev.length > 1 ? prev.filter(s => s !== "Montaj") : prev);
                                                                    }} />}
                                                                    label="Montaj (14.000 ₺)"
                                                                />
                                                            </Box>
                                                        )}
                                                    </ListItem>
                                                    {index < categoryItems.length - 1 && <Divider />}
                                                </React.Fragment>
                                            ))}
                                            {isMenu && isValidCount && menuServiceFee > 0 && (
                                                <>
                                                    <Divider />
                                                    <ListItem sx={{ py: 1.5, px: 3 }}>
                                                        <ListItemText
                                                            primary={<Typography color="text.secondary">Menü Servis Personel Bedeli</Typography>}
                                                        />
                                                        <Typography variant="body1" fontWeight="bold" color="text.secondary">
                                                            {menuServiceFee.toLocaleString("tr-TR")} ₺
                                                        </Typography>
                                                    </ListItem>
                                                </>
                                            )}
                                        </List>
                                        <Box sx={{ 
                                            p: 1.5, 
                                            px: { xs: 2, sm: 3 }, 
                                            bgcolor: "card.summaryBg", 
                                            display: "flex", 
                                            flexDirection: { xs: "column", sm: "row" },
                                            justifyContent: "space-between", 
                                            alignItems: { xs: "flex-start", sm: "center" }, 
                                            gap: { xs: 2, sm: 0 },
                                            borderTop: 1, 
                                            borderColor: "divider" 
                                        }}>
                                            {categoryNeedsPersonCount ? (
                                                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                                    <Typography variant="body2" fontWeight="bold" color="text.secondary">
                                                        Kişi Sayısı:
                                                    </Typography>
                                                    <TextField
                                                        size="small"
                                                        value={exactPersonCount}
                                                        onChange={(e) => setExactPersonCount(e.target.value)}
                                                        type="number"
                                                        error={exactPersonCount !== "" && !isRangeValid}
                                                        sx={{ width: { xs: "100%", sm: 100 }, maxWidth: 120, bgcolor: "white" }}
                                                    />
                                                </Box>
                                            ) : <Box />}
                                            <Typography variant="body2" fontWeight="bold" color="text.secondary" sx={{ textAlign: { xs: "left", sm: "right" } }}>
                                                Ara Toplam: <Box component="span" color="primary.main">
                                                    {hasZeroPriceItem ? "Teklif İsteyiniz" : categoryNeedsPersonCount && !isValidCount ? "Kişi sayısını giriniz" : `${categoryTotal.toLocaleString("tr-TR")} ₺`}
                                                </Box>
                                            </Typography>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })}
                        <Box sx={{ bgcolor: "card.summaryBg", p: 3 }}>
                            {hasZeroPriceItem ? (
                                <Box sx={{ textAlign: "center", py: 2 }}>
                                    <Typography variant="body1" color="warning.main" fontWeight="bold" gutterBottom>
                                        Seçimleriniz arasında fiyata tabi özel hizmetler ({zeroPriceItemNames}) bulunmaktadır. Herhangi bir hesaplama yapılamamaktadır. Lütfen fiyatlandırma ve detaylı teklif için bizimle WhatsApp üzerinden iletişime geçiniz.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        size="large"
                                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`}
                                        target="_blank"
                                        sx={{ mt: 2, borderRadius: 2, fontWeight: "bold", px: 4, py: 1.5 }}
                                    >
                                        Teklif Yönlendirme (WhatsApp)
                                    </Button>
                                </Box>
                            ) : needsPersonCount && !isValidCount ? (
                                <Box sx={{ textAlign: "center", py: 2 }}>
                                    <Typography variant="body1" color="error.main" fontWeight="bold">
                                        {exactPersonCount !== "" && !isRangeValid 
                                            ? `${userInfo?.personCount} kişilik form doldurdunuz. Lütfen bu aralığa uygun bir sayı giriniz.` 
                                            : "Fiyat detaylarını ve genel toplamı görüntülemek için lütfen kişi sayısını giriniz."}
                                    </Typography>
                                </Box>
                            ) : (
                                <>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 1 }}>
                                        <Typography variant="body1" color="text.secondary">Alınan Hizmetler Toplamı (KDV hariç)</Typography>
                                        <Typography variant="body1" fontWeight="medium" color="text.secondary">
                                            {subtotal.toLocaleString("tr-TR", { minimumFractionDigits: 0, maximumFractionDigits: 2 })} ₺
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 1 }}>
                                        <Typography variant="body1" color="text.secondary">Hizmet Bedeli</Typography>
                                        <Typography variant="body1" fontWeight="medium" color="text.secondary">
                                            {serviceFee.toLocaleString("tr-TR", { minimumFractionDigits: 0, maximumFractionDigits: 2 })} ₺
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 1 }}>
                                        <Typography variant="body1" color="text.secondary">KDV</Typography>
                                        <Typography variant="body1" fontWeight="medium" color="text.secondary">
                                            {vat.toLocaleString("tr-TR", { minimumFractionDigits: 0, maximumFractionDigits: 2 })} ₺
                                        </Typography>
                                    </Box>
                                    <Divider sx={{ my: 1.5 }} />
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pt: 1 }}>
                                        <Typography variant="h6" fontWeight="bold">Genel Toplam (KDV Dahil)</Typography>
                                        <Typography variant="h5" fontWeight="bold" color="primary">
                                            {grandTotal.toLocaleString("tr-TR", { minimumFractionDigits: 0, maximumFractionDigits: 2 })} ₺
                                        </Typography>
                                    </Box>
                                </>
                            )}
                        </Box>
                    </Box>
                )}
            </Paper>

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
                {isCart ? (
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        onClick={() => {
                            setCartOpen(false);
                            handleNavigateToStep(categories.length);
                        }}
                        sx={{ borderRadius: 2, fontWeight: "bold" }}
                    >
                        Teklif Özeti'ne Git
                    </Button>
                ) : !hasZeroPriceItem ? (
                    <Button
                        variant="contained"
                        color="success"
                        size="large"
                        startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <DownloadIcon />}
                        onClick={handleExportOffer}
                        disabled={isSubmitting}
                        sx={{ ml: "auto", px: 4, py: 1.5, borderRadius: 2, fontWeight: "bold" }}
                    >
                        {isSubmitting ? "İşleniyor..." : "Excel Olarak İndir"}
                    </Button>
                ) : null}
            </Box>
        </Box>
    );
};


