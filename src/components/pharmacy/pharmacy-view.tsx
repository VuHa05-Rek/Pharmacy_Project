'use client';

import React from 'react';
import { Box, Container } from '@mui/material';
import { PharmacyHeader } from './common/header';
import { PharmacyFooter } from './common/footer';
import { ProductContent } from './home/product-content';
import { BestSeller } from './home/best-seller';

// ----------------------------------------------------------------------

export function PharmacyView() {
  console.log({
    PharmacyHeader,
    PharmacyFooter,
    ProductContent,
    BestSeller
  });
  
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <PharmacyHeader />
      
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth="lg">
          <ProductContent />
          <BestSeller />
        </Container>
      </Box>
      
      <PharmacyFooter />
    </Box>
  );
}
