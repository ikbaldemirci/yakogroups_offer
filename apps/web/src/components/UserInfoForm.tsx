import React, { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    Paper,
    Grid
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import type { PersonCountTier } from "../types";

export interface UserInfo {
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    phone: string;
    personCount: PersonCountTier | "";
}

interface UserInfoFormProps {
    onSubmit: (info: UserInfo) => void;
}

export const UserInfoForm: React.FC<UserInfoFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<UserInfo>({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phone: "",
        personCount: ""
    });

    const [errors, setErrors] = useState<Partial<Record<keyof UserInfo, string>>>({});

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePhone = (phone: string) => {
        const re = /^(?:\+?90\s?)?(?:0)?5\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;
        return re.test(phone.replace(/[\s-]/g, ''));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        
        if (errors[name as keyof UserInfo]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSelectChange = (e: SelectChangeEvent<string>) => {
        setFormData((prev) => ({ ...prev, personCount: e.target.value as PersonCountTier }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const newErrors: Partial<Record<keyof UserInfo, string>> = {};
        
        if (!validateEmail(formData.email)) {
            newErrors.email = "Geçerli bir e-posta adresi giriniz.";
        }
        
        if (!validatePhone(formData.phone)) {
            newErrors.phone = "Geçerli bir telefon numarası giriniz (Örn: 0555 555 55 55).";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        if (
            formData.firstName &&
            formData.lastName &&
            formData.companyName &&
            formData.email &&
            formData.phone &&
            formData.personCount
        ) {
            onSubmit(formData);
        }
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 540, width: "100%", borderRadius: 3 }}>
                <Typography variant="h5" component="h1" gutterBottom align="center" fontWeight="bold" color="primary">
                    YakoGroups Teklif Al
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 4 }}>
                    Lütfen teklif oluşturmak için bilgilerinizi giriniz.
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 6 }}>
                            <TextField
                                label="Ad"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <TextField
                                label="Soyad"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>

                    <TextField
                        label="Şirket Adı"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                    />

                    <TextField
                        label="E-posta"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        placeholder="ornek@sirket.com"
                        error={!!errors.email}
                        helperText={errors.email}
                    />

                    <TextField
                        label="Telefon"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        placeholder="05XX XXX XX XX"
                        error={!!errors.phone}
                        helperText={errors.phone}
                    />

                    <FormControl fullWidth required>
                        <InputLabel id="person-count-label">Kişi Sayısı</InputLabel>
                        <Select
                            labelId="person-count-label"
                            id="person-count"
                            name="personCount"
                            value={formData.personCount}
                            label="Kişi Sayısı"
                            onChange={handleSelectChange}
                        >
                            <MenuItem value="0-25">0 - 25 Kişi</MenuItem>
                            <MenuItem value="25-50">25 - 50 Kişi</MenuItem>
                            <MenuItem value="50-75">50 - 75 Kişi</MenuItem>
                            <MenuItem value="75-100">75 - 100 Kişi</MenuItem>
                            <MenuItem value="100+">100+ Kişi</MenuItem>
                        </Select>
                    </FormControl>

                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{ mt: 2, py: 1.5, borderRadius: 2, fontWeight: "bold" }}
                    >
                        Teklif Adımlarına Başla →
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};
