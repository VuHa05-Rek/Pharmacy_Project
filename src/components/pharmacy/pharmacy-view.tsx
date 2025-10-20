'use client';

import React from 'react';
import { Box, Container } from '@mui/material';
import { PharmacyHeader } from './common/header';
import { PharmacyFooter } from './common/footer';
import { ProductShowcase } from './home/product-content';
import { BestSeller } from './home/best-seller';
import { ProductNew } from './home/new-product';
import  PharmacyFooter_home  from './home/home-footer/home-footer';

import Product_1 from './home/product-types/product_1/product_1';
import Product_2 from "./home/product-types/product_2/product_2";
import Product_3 from "./home/product-types/product_3/product_3";

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
          <Product_2/>
          <Product_3/>
        </Container>
      </Box>
      
      <PharmacyFooter_home />
    </Box>
  );
}
