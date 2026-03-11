import React, { useState } from 'react';
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Typography,
    Paper,
    Button
} from '@mui/material';
import { categories } from '../data';
import type { Product } from '../data';
import type { UserInfo } from './UserInfoForm';
import { CategoryStep } from './CategoryStep';
import { SummaryCard } from './SummaryCard';
import type { SelectedItem } from '../utils/exportUtils';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface OfferStepperProps {
    userInfo: UserInfo;
    onReset: () => void;
}

export const OfferStepper: React.FC<OfferStepperProps> = ({ userInfo, onReset }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [selectedItems, setSelectedItems] = useState<Record<string, SelectedItem>>({});

    const isLastStep = activeStep === categories.length - 1;
    const isCompleted = activeStep === categories.length;

    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    const handleSkip = () => {

        handleNext();
    };

    const handleItemSelect = (product: Product, price: number) => {
        setSelectedItems(prev => ({
            ...prev,
            [product.id]: { product, price }
        }));
    };

    const handleItemDeselect = (productId: string) => {
        setSelectedItems(prev => {
            const newItems = { ...prev };
            delete newItems[productId];
            return newItems;
        });
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', p: { xs: 2, md: 4 } }}>
            <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 3 }}>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                    {activeStep === 0 ? (
                        <Button startIcon={<ArrowBackIcon />} onClick={onReset} color="inherit">
                            Başa Dön
                        </Button>
                    ) : (
                        <Button startIcon={<ArrowBackIcon />} onClick={handleBack} color="inherit">
                            Geri
                        </Button>
                    )}
                    <Typography variant="h6" sx={{ ml: 'auto', fontWeight: 'bold' }}>
                        {userInfo.companyName} Teklif Dosyası
                    </Typography>
                </Box>

                <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 6 }}>
                    {categories.map((category) => (
                        <Step key={category.id}>
                            <StepLabel>{category.title}</StepLabel>
                        </Step>
                    ))}
                    <Step>
                        <StepLabel>Özet ve Onay</StepLabel>
                    </Step>
                </Stepper>

                <Box>
                    {isCompleted ? (
                        <SummaryCard
                            userInfo={userInfo}
                            selectedItems={selectedItems}
                            onReset={onReset}
                            onItemDeselect={handleItemDeselect}
                        />
                    ) : (
                        <CategoryStep
                            category={categories[activeStep]}
                            personCountTier={userInfo.personCount as any}
                            selectedItems={selectedItems}
                            onItemSelect={handleItemSelect}
                            onItemDeselect={handleItemDeselect}
                            onSkip={handleSkip}
                            onNext={handleNext}
                            isLastStep={isLastStep}
                        />
                    )}
                </Box>
            </Paper>
        </Box>
    );
};
