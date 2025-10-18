'use client';

import React from 'react';
import { Box, Container } from '@mui/material';
import { PharmacyHeader } from './common/header';
import { PharmacyFooter } from './common/footer';
import { ProductShowcase } from './home/product-content';
import { BestSeller } from './home/best-seller';
import { ProductNew } from './home/new-product';
import Product_1 from './home/product-types/product_1/product_1';



// ----------------------------------------------------------------------

export function PharmacyView() {
  console.log({
    PharmacyHeader,
    PharmacyFooter,
    ProductShowcase,
    BestSeller,
    ProductNew
  });
  
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <PharmacyHeader />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}> 
          {/* Container có maxWidth và padding responsive */}
          <ProductShowcase />
          <BestSeller />
          <ProductNew />
          <Product_1/>
        </Container>
      </Box>
      
      <PharmacyFooter />
    </Box>
  );
}
