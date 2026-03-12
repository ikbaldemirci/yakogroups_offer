import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
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
    const isAnyItemSelected =
        (category.items?.some(item => !!selectedItems[item.id])) ||
        (category.subcategories?.some(sub => sub.items.some(item => !!selectedItems[item.id])));

    return (
        <Box sx={{ mt: 3 }}>
            <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
                {category.title}
            </Typography>
            {category.description && (
                <Typography variant="h6" color="text.secondary" paragraph>
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

                    {category.items && category.items.length > 0 && (
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
                                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 4, mt: 3 }}>
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
                                <Typography variant="body2" color="text.disabled" sx={{ mt: 2, fontStyle: 'italic' }}>
                                    Bu kategori için henüz içerik eklenmemiş.
                                </Typography>
                            )}
                        </Box>
                    ))}

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
