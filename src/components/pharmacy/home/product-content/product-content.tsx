'use client';

import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Rating,
} from '@mui/material';

// ----------------------------------------------------------------------

const mockProducts = [
  {
    id: 1,
    name: 'Vitamin D3 1000IU',
    price: '$19.99',
    image: '/assets/images/mock/product-1.webp',
    rating: 4.5,
    reviews: 128,
    category: 'Supplements',
  },
  {
    id: 2,
    name: 'Omega-3 Fish Oil',
    price: '$24.99',
    image: '/assets/images/mock/product-2.webp',
    rating: 4.8,
    reviews: 89,
    category: 'Supplements',
  },
  {
    id: 3,
    name: 'Multivitamin Complex',
    price: '$29.99',
    image: '/assets/images/mock/product-3.webp',
    rating: 4.3,
    reviews: 156,
    category: 'Supplements',
  },
  {
    id: 4,
    name: 'Blood Pressure Monitor',
    price: '$49.99',
    image: '/assets/images/mock/product-4.webp',
    rating: 4.7,
    reviews: 67,
    category: 'Medical Devices',
  },
];

export function ProductContent() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Our Products
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Discover our wide range of pharmaceutical products and health supplements
      </Typography>

      <Grid container spacing={3}>
        {mockProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Chip
                  label={product.category}
                  size="small"
                  color="primary"
                  sx={{ mb: 1 }}
                />
                <Typography variant="h6" gutterBottom>
                  {product.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating value={product.rating} readOnly precision={0.1} size="small" />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({product.reviews})
                  </Typography>
                </Box>
                <Typography variant="h6" color="primary" fontWeight="bold">
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined" fullWidth>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
