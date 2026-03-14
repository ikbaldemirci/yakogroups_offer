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
import { CategoryStep } from "./CategoryStep";
import { SummaryCard } from "./SummaryCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";

import { useOffer } from "../context/OfferContext";

export const OfferStepper: React.FC = () => {
    const {
        userInfo,
        handleGoHome,
        initialCategoryIndex,
        selectedItems,
        setSelectedItems
    } = useOffer();

    if (!userInfo) return null;

    const [activeStep, setActiveStep] = useState(initialCategoryIndex);

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
            handleGoHome();
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
        setSelectedItems({
            ...selectedItems,
            [product.id]: { product, price }
        });
    };

    const handleItemDeselectLocal = (productId: string) => {
        const newItems = { ...selectedItems };
        delete newItems[productId];
        setSelectedItems(newItems);
    };

    return (
        <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", p: { xs: 2, md: 4 } }}>
            <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 3 }}>

                <Box sx={{ display: "flex", alignItems: "center", mb: 4, gap: 1 }}>
                    <Button startIcon={<ArrowBackIcon />} onClick={handleBack} color="inherit">
                        {activeStep === 0 ? "Ana Sayfa" : "Geri"}
                    </Button>
                    <Button startIcon={<HomeIcon />} onClick={handleGoHome} color="inherit" sx={{ ml: "auto" }}>
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
                        <SummaryCard />
                    ) : (
                        <CategoryStep
                            category={categories[activeStep]}
                            personCountTier={userInfo.personCount as any}
                            selectedItems={selectedItems}
                            onItemSelect={handleItemSelect}
                            onItemDeselect={handleItemDeselectLocal}
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
