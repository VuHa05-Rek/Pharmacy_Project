'use client';

import React from 'react';
import { Box, Container } from '@mui/material';
import { PharmacyHeader } from './common/header';
import { PharmacyFooter } from './common/footer';
import { ProductShowcase } from './home/product-content';
import { BestSeller } from './home/best-seller';
import { ProductNew } from './home/new-product';

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
        <Container maxWidth={false} disableGutters sx={{ px: 0 }}> 
          {/* nội dung tràn lề; các phần tự quản lý phần đệm của chúng */}
          <ProductShowcase />
          <BestSeller />
          <ProductNew />
        </Container>
      </Box>
      
      <PharmacyFooter />
    </Box>
  );
}
