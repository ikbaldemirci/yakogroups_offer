import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import type { Category, Product, PersonCountTier } from '../data';
import { ProductCard } from './ProductCard';

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
    const isAnyItemSelected = category.items.some(item => !!selectedItems[item.id]);

    return (
        <Box sx={{ mt: 3 }}>
            <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
                {category.title}
            </Typography>
            {category.description && (
                <Typography variant="body1" color="text.secondary" paragraph>
                    {category.description}
                </Typography>
            )}

            <Box sx={{ my: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <Box>
                        <Button
                            variant={!isAnyItemSelected ? "contained" : "outlined"}
                            color="secondary"
                            size="large"
                            onClick={onSkip}
                            sx={{ mb: 2, borderRadius: 2 }}
                        >
                            İstemiyorum (Bu Kategoriyi Atla)
                        </Button>
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
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
                </Box>
            </Box>

            <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
                {category.title2}
            </Typography>
            {category.description && (
                <Typography variant="body1" color="text.secondary" paragraph>
                    {category.description2}
                </Typography>
            )}

            <Box sx={{ my: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
                        {/* // how to implement items 2 */}
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
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={onNext}
                    sx={{ px: 6, py: 1.5, borderRadius: 2, fontWeight: 'bold' }}
                >
                    {isLastStep ? 'Sepeti Onayla Gör' : 'Sonraki Aşama İlerle'}
                </Button>
            </Box>
        </Box>
    );
};
