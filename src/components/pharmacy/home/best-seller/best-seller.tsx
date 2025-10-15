'use client';

import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Rating,
  Stack,
} from '@mui/material';

// ----------------------------------------------------------------------

const bestSellerProducts = [
  {
    id: 1,
    name: 'Premium Omega-3',
    price: '$34.99',
    originalPrice: '$44.99',
    image: '/assets/images/mock/product-5.webp',
    rating: 4.9,
    reviews: 245,
    badge: 'Best Seller',
    discount: '22%',
  },
  {
    id: 2,
    name: 'Vitamin C Complex',
    price: '$18.99',
    originalPrice: '$24.99',
    image: '/assets/images/mock/product-6.webp',
    rating: 4.7,
    reviews: 189,
    badge: 'Trending',
    discount: '24%',
  },
  {
    id: 3,
    name: 'Probiotics Plus',
    price: '$28.99',
    originalPrice: '$35.99',
    image: '/assets/images/mock/product-7.webp',
    rating: 4.8,
    reviews: 167,
    badge: 'Popular',
    discount: '19%',
  },
];

export function BestSeller() {
  return (
    <Box sx={{ py: 4, bgcolor: 'grey.50' }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Best Sellers
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Our most popular products trusted by thousands of customers
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {bestSellerProducts.map((product) => (
          <Grid item xs={12} md={4} key={product.id}>
            <Card
              sx={{
                height: '100%',
                position: 'relative',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6,
                },
              }}
            >
              {/* Badge */}
              <Chip
                label={product.badge}
                color="error"
                size="small"
                sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  zIndex: 1,
                  fontWeight: 'bold',
                }}
              />
              
              {/* Discount */}
              <Chip
                label={`-${product.discount}`}
                color="success"
                size="small"
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  zIndex: 1,
                  fontWeight: 'bold',
                }}
              />

              <CardMedia
                component="img"
                height="250"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
              
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.name}
                </Typography>
                
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                  <Rating value={product.rating} readOnly precision={0.1} size="small" />
                  <Typography variant="body2" color="text.secondary">
                    ({product.reviews})
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    {product.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textDecoration: 'line-through' }}
                  >
                    {product.originalPrice}
                  </Typography>
                </Stack>
              </CardContent>

              <Box sx={{ p: 2, pt: 0 }}>
                <Button variant="contained" fullWidth size="large">
                  Add to Cart
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant="outlined" size="large">
          View All Best Sellers
        </Button>
      </Box>
    </Box>
  );
}

