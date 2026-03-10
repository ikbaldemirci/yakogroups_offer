import React, { useState } from 'react';
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
    CircularProgress
} from '@mui/material';
import type { UserInfo } from './UserInfoForm';
import { exportToExcel, sendToCRM } from '../utils/exportUtils';
import type { SelectedItem } from '../utils/exportUtils';
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface SummaryCartProps {
    userInfo: UserInfo;
    selectedItems: Record<string, SelectedItem>;
    onReset: () => void;
}

export const SummaryCart: React.FC<SummaryCartProps> = ({ userInfo, selectedItems, onReset }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const items = Object.values(selectedItems);

    const totalAmount = items.reduce((sum, item) => sum + item.price, 0);

    const handleExportExcel = () => {
        exportToExcel(userInfo, selectedItems, totalAmount);
    };

    const handleConfirm = async () => {
        setIsSubmitting(true);
        await sendToCRM(userInfo, selectedItems, totalAmount);
        setIsSubmitting(false);
        setSuccess(true);
    };

    if (success) {
        return (
            <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CheckCircleIcon color="success" sx={{ fontSize: 80, mb: 2 }} />
                <Typography variant="h5" gutterBottom fontWeight="bold">
                    Teklif Başarıyla Oluşturuldu!
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph align="center">
                    Seçimleriniz CRM sistemimize kaydedildi. En kısa sürede sizinle iletişime geçeceğiz.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                    <Button variant="outlined" onClick={handleExportExcel} startIcon={<DownloadIcon />}>
                        Kopyasını İndir (Excel)
                    </Button>
                    <Button variant="contained" onClick={onReset}>
                        Yeni Teklif Oluştur
                    </Button>
                </Box>
            </Box>
        );
    }

    return (
        <Box sx={{ mt: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
                Teklif Özeti
            </Typography>

            <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>Müşteri Bilgileri</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 2fr' }, gap: 2 }}>
                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">Ad Soyad</Typography>
                        <Typography variant="body1" fontWeight="medium">{userInfo.firstName} {userInfo.lastName}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">Şirket</Typography>
                        <Typography variant="body1" fontWeight="medium">{userInfo.companyName}</Typography>
                    </Box>
                    <Box sx={{ gridColumn: { xs: '1 / -1', sm: 'auto' } }}>
                        <Typography variant="subtitle2" color="text.secondary">Kişi Sayısı Grubu</Typography>
                        <Typography variant="body1" fontWeight="medium">{userInfo.personCount}</Typography>
                    </Box>
                </Box>
            </Paper>

            <Paper elevation={2} sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2 }}>
                    <Typography variant="h6">Seçilen Hizmetler</Typography>
                </Box>

                {items.length === 0 ? (
                    <Alert severity="info" sx={{ m: 2 }}>
                        Sadece "İstemiyorum" seçeneklerini tercih ettiniz. Herhangi bir hizmet eklenmedi.
                    </Alert>
                ) : (
                    <List disablePadding>
                        {items.map((item, index) => (
                            <React.Fragment key={item.product.id}>
                                <ListItem sx={{ py: 2, px: 3 }}>
                                    <ListItemText
                                        primary={<Typography fontWeight="bold">{item.product.title}</Typography>}
                                        secondary={item.product.description}
                                    />
                                    <Typography variant="body1" fontWeight="bold" color="primary">
                                        {item.price.toLocaleString('tr-TR')} ₺
                                    </Typography>
                                </ListItem>
                                {index < items.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                        <Box sx={{ bgcolor: 'grey.50', p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h6" fontWeight="bold">GENEL TOPLAM</Typography>
                            <Typography variant="h5" fontWeight="bold" color="primary">
                                {totalAmount.toLocaleString('tr-TR')} ₺
                            </Typography>
                        </Box>
                    </List>
                )}
            </Paper>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
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
                    sx={{ px: 4, py: 1.5, borderRadius: 2, fontWeight: 'bold' }}
                >
                    {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Teklifi CRM\'e Gönder'}
                </Button>
            </Box>
        </Box>
    );
};


