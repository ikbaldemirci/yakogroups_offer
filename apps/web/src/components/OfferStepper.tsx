import React, { useState, useEffect } from "react";
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Paper,
    Button
} from "@mui/material";
import { categories } from "../types";
import type { Product } from "../types";
import type { UserInfo } from "./UserInfoForm";
import { CategoryStep } from "./CategoryStep";
import { SummaryCard } from "./SummaryCard";
import type { SelectedItem } from "../utils/exportUtils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";

interface OfferStepperProps {
    userInfo: UserInfo;
    onHome: () => void;
    initialStep?: number;
    selectedItems: Record<string, SelectedItem>;
    onSelectedItemsChange: (items: Record<string, SelectedItem>) => void;
}

export const OfferStepper: React.FC<OfferStepperProps> = ({
    userInfo,
    onHome,
    initialStep = 0,
    selectedItems,
    onSelectedItemsChange,
}) => {
    const [activeStep, setActiveStep] = useState(initialStep);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [activeStep]);

    const isLastStep = activeStep === categories.length - 1;
    const isCompleted = activeStep === categories.length;

    const handleNext = () => {
        const nextStep = activeStep + 1;
        setActiveStep(nextStep);
        window.history.pushState({ view: "stepper", stepIndex: nextStep }, "", `#stepper-step-${nextStep}`);
    };

    const handleBack = () => {
        if (activeStep === 0) {
            onHome();
        } else {
            const prevStep = activeStep - 1;
            setActiveStep(prevStep);
            window.history.pushState({ view: "stepper", stepIndex: prevStep }, "", `#stepper-step-${prevStep}`);
        }
    };

    const handleSkip = () => {
        handleNext();
    };

    const handleItemSelect = (product: Product, price: number) => {
        onSelectedItemsChange({
            ...selectedItems,
            [product.id]: { product, price }
        });
    };

    const handleItemDeselect = (productId: string) => {
        const newItems = { ...selectedItems };
        delete newItems[productId];
        onSelectedItemsChange(newItems);
    };

    return (
        <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", p: { xs: 2, md: 4 } }}>
            <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 3 }}>

                <Box sx={{ display: "flex", alignItems: "center", mb: 4, gap: 1 }}>
                    <Button startIcon={<ArrowBackIcon />} onClick={handleBack} color="inherit">
                        {activeStep === 0 ? "Ana Sayfa" : "Geri"}
                    </Button>
                    <Button startIcon={<HomeIcon />} onClick={onHome} color="inherit" sx={{ ml: "auto" }}>
                        Ana Sayfa
                    </Button>
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
                            onReset={onHome}
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
