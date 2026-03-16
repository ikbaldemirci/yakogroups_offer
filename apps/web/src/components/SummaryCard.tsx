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
    AccordionDetails
} from "@mui/material";
import { exportToExcel, sendToCRM } from "../utils/exportUtils";
import DownloadIcon from "@mui/icons-material/Download";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { categories } from "../types";
import { useOffer } from "../context/OfferContext";
import { calculateOfferTotals } from "../utils/calculateOfferTotals";

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
    const items = Object.values(selectedItems);

    const { menuTotal, menuServiceFee, serviceFee, vatAmount: vat, grandTotal } = calculateOfferTotals(items);
    const hasMenu = menuTotal > 0;

    const handleExportExcel = () => {
        if (!userInfo) return;
        exportToExcel(userInfo, selectedItems, grandTotal);
    };

    const handleConfirm = async () => {
        if (!userInfo) return;
        setIsSubmitting(true);
        await sendToCRM(userInfo, selectedItems, grandTotal);
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
                    <Button variant="outlined" onClick={handleExportExcel} startIcon={<DownloadIcon />}>
                        Kopyasını İndir (Excel)
                    </Button>
                    <Button variant="contained" onClick={handleCartReset}>
                        Yeni Teklif Oluştur
                    </Button>
                </Box>
            </Box>
        );
    }

    return (
        <Box sx={{ mt: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography variant="h5" fontWeight="bold" color="primary">
                    Teklif Özeti
                </Typography>
                <IconButton onClick={() => setCartOpen(false)} size="small">
                    <CloseIcon />
                </IconButton>
            </Box>
            
            <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>Müşteri Bilgileri</Typography>
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 2fr" }, gap: 2 }}>
                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">Ad Soyad</Typography>
                        <Typography variant="body1" fontWeight="medium">{userInfo.firstName} {userInfo.lastName}</Typography>
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

                            const categoryTotal = categoryItems.reduce((sum, item) => sum + item.price, 0);

                            return (
                                <Accordion key={category.id} defaultExpanded>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", pr: 2, alignItems: "center" }}>
                                            <Typography fontWeight="bold">{category.title}</Typography>
                                            <Typography variant="body2" color="primary" fontWeight="bold">
                                                {categoryTotal.toLocaleString("tr-TR")} ₺
                                            </Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ p: 0 }}>
                                        <List disablePadding>
                                            {categoryItems.map((item, index) => (
                                                <React.Fragment key={item.product.id}>
                                                    <ListItem sx={{ py: 1.5, px: 3 }}>
                                                        <ListItemText
                                                            primary={<Typography>{item.product.title}</Typography>}
                                                            secondary={item.product.description}
                                                        />
                                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                                            <Typography variant="body1" fontWeight="bold" color="text.secondary">
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
                                                    </ListItem>
                                                    {index < categoryItems.length - 1 && <Divider />}
                                                </React.Fragment>
                                            ))}
                                        </List>
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })}
                        <Box sx={{ bgcolor: "grey.50", p: 3 }}>
                            {hasMenu && (
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 1 }}>
                                    <Typography variant="body1" color="text.secondary">Menü Servis Personel Bedeli</Typography>
                                    <Typography variant="body1" fontWeight="medium" color="text.secondary">
                                        {menuServiceFee.toLocaleString("tr-TR", { minimumFractionDigits: 0, maximumFractionDigits: 2 })} ₺
                                    </Typography>
                                </Box>
                            )}
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
                ) : (
                    <>
                        <Button
                            variant="outlined"
                            startIcon={<DownloadIcon />}
                            onClick={handleExportExcel}
                            size="large"
                            sx={{ borderRadius: 2 }}
                        >
                            Excel Olarak İndir
                        </Button>

                        <Button
                            variant="contained"
                            color="success"
                            size="large"
                            onClick={handleConfirm}
                            disabled={isSubmitting}
                            sx={{ px: 4, py: 1.5, borderRadius: 2, fontWeight: "bold" }}
                        >
                            {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Teklifi CRM\'e Gönder"}
                        </Button>
                    </>
                )}
            </Box>
        </Box>
    );
};


