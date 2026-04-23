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
    IconButton
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import type { PersonCountTier } from "../types";
import { useOffer } from "../context/OfferContext";

export interface UserInfo {
    fullName: string;
    companyName: string;
    email: string;
    phone: string;
    personCount: PersonCountTier | "";
}

export const UserInfoForm: React.FC = () => {
    const { userInfo: globalUserInfo, handleUserInfoSubmit, setUserInfo, setSelectedItems } = useOffer();
    
    const [formData, setFormData] = useState<UserInfo>(
        globalUserInfo || {
            fullName: "",
            companyName: "",
            email: "",
            phone: "",
            personCount: ""
        });

    const [errors, setErrors] = useState<Partial<Record<keyof UserInfo, string>>>({});
    const [editingFields, setEditingFields] = useState<Record<string, boolean>>({});

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePhone = (phone: string) => {
        const re = /^(?:\+?90\s?)?(?:0)?5\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;
        return re.test(phone.replace(/[\s-]/g, ""));
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

    const handleEditField = (fieldName: string) => {
        setEditingFields(prev => ({ ...prev, [fieldName]: true }));
    };

    const handleCancelField = (fieldName: string) => {
        if (globalUserInfo) {
            setFormData(prev => ({
                ...prev,
                [fieldName]: globalUserInfo[fieldName as keyof UserInfo]
            }));
        }
        setEditingFields(prev => ({ ...prev, [fieldName]: false }));
        setErrors(prev => ({ ...prev, [fieldName]: undefined }));
    };

    const handleSaveField = (fieldName: string) => {
        if (fieldName === "email" && !validateEmail(formData.email)) {
            setErrors(prev => ({ ...prev, email: "Geçerli bir e-posta adresi giriniz." }));
            return;
        }
        if (fieldName === "phone" && !validatePhone(formData.phone)) {
            setErrors(prev => ({ ...prev, phone: "Geçerli bir telefon numarası giriniz." }));
            return;
        }

        setEditingFields(prev => ({ ...prev, [fieldName]: false }));
        
        setSelectedItems({});
        
        if (globalUserInfo) {
            setUserInfo({
                fullName: formData.fullName,
                companyName: formData.companyName,
                email: formData.email,
                phone: formData.phone,
                personCount: formData.personCount
            });
        }
    };

    const renderFieldWithAction = (fieldName: string, children: React.ReactNode) => {
        const isEditing = !globalUserInfo || editingFields[fieldName];
        return (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{ flexGrow: 1 }}>
                    {children}
                </Box>
                {globalUserInfo && (
                    <Box sx={{ display: "flex", gap: 0.5 }}>
                        <IconButton 
                            color={isEditing ? "success" : "primary"}
                            onClick={() => isEditing ? handleSaveField(fieldName) : handleEditField(fieldName)}
                            sx={{ 
                                border: "1px solid",
                                borderColor: isEditing ? "success.main" : "divider",
                                bgcolor: "background.paper"
                            }}
                        >
                            {isEditing ? <CheckIcon /> : <EditIcon />}
                        </IconButton>
                        {isEditing && (
                            <IconButton 
                                color="error"
                                onClick={() => handleCancelField(fieldName)}
                                sx={{ 
                                    border: "1px solid",
                                    borderColor: "error.main",
                                    bgcolor: "background.paper"
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                        )}
                    </Box>
                )}
            </Box>
        );
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
            formData.fullName &&
            formData.companyName &&
            formData.email &&
            formData.phone &&
            formData.personCount
        ) {
            handleUserInfoSubmit(formData);
        }
    };

    const handleClearData = () => {
        setFormData({
            fullName: "",
            companyName: "",
            email: "",
            phone: "",
            personCount: ""
        });
        setErrors({});
        setEditingFields({});
        setUserInfo(null); 
        setSelectedItems({});
        localStorage.removeItem("yako_groups_userInfo");
        localStorage.removeItem("yako_groups_selectedItems");
    };

    return (
        <Box sx={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            p: 4,
            flexGrow: 1
        }}>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 540, width: "100%", borderRadius: 3 }}>
                <Typography variant="h5" component="h1" gutterBottom align="center" fontWeight="bold" color="primary">
                    YakoGroups Teklif Al
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 4 }}>
                    Lütfen teklif oluşturmak için bilgilerinizi giriniz.
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                    {renderFieldWithAction("fullName", (
                        <TextField
                            label="Ad Soyad"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            fullWidth
                            variant="outlined"
                            disabled={globalUserInfo ? !editingFields["fullName"] : false}
                        />
                    ))}

                    {renderFieldWithAction("companyName", (
                        <TextField
                            label="Şirket Adı"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                            fullWidth
                            variant="outlined"
                            disabled={globalUserInfo ? !editingFields["companyName"] : false}
                        />
                    ))}

                    {renderFieldWithAction("email", (
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
                            disabled={globalUserInfo ? !editingFields["email"] : false}
                        />
                    ))}

                    {renderFieldWithAction("phone", (
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
                            disabled={globalUserInfo ? !editingFields["phone"] : false}
                        />
                    ))}

                    {renderFieldWithAction("personCount", (
                        <FormControl fullWidth required disabled={globalUserInfo ? !editingFields["personCount"] : false}>
                            <InputLabel id="person-count-label">Kişi Sayısı</InputLabel>
                            <Select
                                labelId="person-count-label"
                                id="person-count"
                                name="personCount"
                                value={formData.personCount}
                                label="Kişi Sayısı"
                                onChange={handleSelectChange}
                            >
                                <MenuItem value="0-15">0 - 15 Kişi</MenuItem>
                                <MenuItem value="15-30">15 - 30 Kişi</MenuItem>
                                <MenuItem value="30-50">30 - 50 Kişi</MenuItem>
                                <MenuItem value="50-75">50 - 75 Kişi</MenuItem>
                                <MenuItem value="75-100">75 - 100 Kişi</MenuItem>
                                <MenuItem value="100+">100+ Kişi</MenuItem>
                            </Select>
                        </FormControl>
                    ))}

                    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                        {formData.fullName && (
                            <Button
                                variant="outlined"
                                color="error"
                                size="large"
                                onClick={handleClearData}
                                sx={{ py: 1.5, borderRadius: 2, fontWeight: "bold", flex: 1 }}
                            >
                                Temizle
                            </Button>
                        )}
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ py: 1.5, borderRadius: 2, fontWeight: "bold", flex: 2 }}
                        >
                            {formData.fullName ? "Devam Et" : "Teklif Adımlarına Başla"}
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};
