import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import type { Category, Product, PersonCountTier } from "../types";
import { ProductCard } from "./ProductCard";

interface CategoryStepProps {
    category: Category;
    personCountTier: PersonCountTier;
    selectedItems: Record<string, { product: Product, price: number }>;
    onItemSelect: (product: Product, price: number) => void;
    onItemDeselect: (productId: string) => void;
    onSkip: () => void;
    onNext: () => void;
    isLastStep: boolean;
}

export const CategoryStep: React.FC<CategoryStepProps> = ({
    category,
    personCountTier,
    selectedItems,
    onItemSelect,
    onItemDeselect,
    onSkip,
    onNext,
    isLastStep
}) => {
    const isAnyItemSelected =
        (category.items?.some(item => !!selectedItems[item.id])) ||
        (category.subcategories?.some(sub => sub.items.some(item => !!selectedItems[item.id])));

    return (
        <Box sx={{ mt: 3 }}>
            <Box sx={{ 
                display: "flex", 
                flexDirection: { xs: "column", md: "row" }, 
                justifyContent: "space-between", 
                alignItems: { xs: "flex-start", md: "center" },
                gap: 3,
                mb: 2
            }}>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
                        {category.title}
                    </Typography>
                    {category.description && (
                        <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 0 }}>
                            {category.description}
                        </Typography>
                    )}
                </Box>
                <Button
                    variant={!isAnyItemSelected ? "contained" : "outlined"}
                    color="secondary"
                    size="large"
                    onClick={onSkip}
                    sx={{ 
                        borderRadius: 2, 
                        minWidth: { xs: "100%", md: "280px" },
                        py: 1.5,
                        px: 3,
                        fontWeight: "bold",
                        fontSize: "1.05rem",
                        boxShadow: !isAnyItemSelected ? 4 : 0,
                        borderWidth: 2,
                        "&:hover": {
                            borderWidth: 2,
                            transform: "translateY(-2px)",
                            boxShadow: !isAnyItemSelected ? 6 : 2
                        },
                        transition: "all 0.2s ease",
                        alignSelf: { xs: "stretch", md: "center" }
                    }}
                >
                    İstemiyorum (Bu Kategoriyi Atla)
                </Button>
            </Box>

            <Box sx={{ my: 4 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>

                    {category.items && category.items.length > 0 && (
                        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 4 }}>
                            {category.items.map((item) => (
                                <Box key={item.id}>
                                    <ProductCard
                                        product={item}
                                        personCountTier={personCountTier}
                                        isSelected={!!selectedItems[item.id]}
                                        onAdd={onItemSelect}
                                        onRemove={onItemDeselect}
                                    />
                                </Box>
                            ))}
                        </Box>
                    )}

                    {category.subcategories && category.subcategories.map((sub, idx) => (
                        <Box key={idx} sx={{ mt: idx > 0 || (category.items && category.items.length > 0) ? 6 : 0 }}>
                            <Divider sx={{ mb: 4 }} />
                            <Typography variant="h5" gutterBottom fontWeight="bold" color="secondary">
                                {sub.title}
                            </Typography>
                            {sub.description && (
                                <Typography variant="body1" color="text.secondary" paragraph>
                                    {sub.description}
                                </Typography>
                            )}

                            {sub.items.length > 0 ? (
                                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 4, mt: 3 }}>
                                    {sub.items.map((item) => (
                                        <Box key={item.id}>
                                            <ProductCard
                                                product={item}
                                                personCountTier={personCountTier}
                                                isSelected={!!selectedItems[item.id]}
                                                onAdd={onItemSelect}
                                                onRemove={onItemDeselect}
                                            />
                                        </Box>
                                    ))}
                                </Box>
                            ) : (
                                <Typography variant="body2" color="text.disabled" sx={{ mt: 2, fontStyle: "italic" }}>
                                    Bu kategori için henüz içerik eklenmemiş.
                                </Typography>
                            )}
                        </Box>
                    ))}

                </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={onNext}
                    sx={{ px: 6, py: 1.5, borderRadius: 2, fontWeight: "bold" }}
                >
                    {isLastStep ? "Sepeti Onayla Gör" : "Sonraki Aşama İlerle"}
                </Button>
            </Box>
        </Box>
    );
};
