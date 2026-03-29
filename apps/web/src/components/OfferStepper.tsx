import React, { useEffect } from "react";
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Paper,
    Button,
    Typography
} from "@mui/material";
import { categories } from "../types";
import type { Product } from "../types";
import { CategoryStep } from "./CategoryStep";
import { SummaryCard } from "./SummaryCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useOffer } from "../context/OfferContext";

export const OfferStepper: React.FC = () => {
    const {
        userInfo,
        handleGoHome,
        initialCategoryIndex,
        selectedItems,
        setSelectedItems,
        handleNavigateToStep
    } = useOffer();

    if (!userInfo) return null;

    const activeStep = initialCategoryIndex;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [activeStep]);

    const isLastStep = activeStep === categories.length - 1;
    const isCompleted = activeStep === categories.length;

    const handleNext = () => {
        handleNavigateToStep(activeStep + 1);
    };

    const handleBack = () => {
        if (activeStep === 0) {
            handleGoHome();
        } else {
            handleNavigateToStep(activeStep - 1);
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
                    <Typography variant="h6" component="div" sx={{ ml: "auto", fontWeight: "bold", color: "primary.main" }}>
                        {userInfo.companyName} Teklif Dosyası
                    </Typography>
                </Box>

                <Box sx={{ 
                    mb: { xs: 4, md: 6 }, 
                    width: "100%", 
                    overflowX: "auto",
                    pb: 1,
                    "&::-webkit-scrollbar": { height: 6 },
                    "&::-webkit-scrollbar-track": { backgroundColor: "transparent" },
                    "&::-webkit-scrollbar-thumb": { backgroundColor: "rgba(0,0,0,0.1)", borderRadius: 4 }
                }}>
                    <Stepper activeStep={activeStep} alternativeLabel sx={{ minWidth: { xs: 800, md: "auto" } }}>
                        {categories.map((category) => (
                            <Step key={category.id}>
                                <StepLabel>{category.title}</StepLabel>
                            </Step>
                        ))}
                        <Step>
                            <StepLabel>Özet ve Onay</StepLabel>
                        </Step>
                    </Stepper>
                </Box>

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
