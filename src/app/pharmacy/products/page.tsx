import { PharmacyHeader } from '@/app/pharmacy/common/header';
import PharmacyFooter_home from '@/app/pharmacy/home/home-footer/home-footer';
import Product_1 from '@/app/pharmacy/home/product-types/product_1/product_1';
import Product_2 from '@/app/pharmacy/home/product-types/product_2/product_2';
import Product_3 from '@/app/pharmacy/home/product-types/product_3/product_3';
import { Box, Container } from '@mui/material';

export default function AllProductsPage() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <PharmacyHeader />
      
      <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Container maxWidth="xl">
          <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>
            See all
          </h1>
          
          <Product_1 prefix="all-p1" />
          <Product_2 prefix="all-p2" />
          <Product_3 prefix="all-p3" />
        </Container>
      </Box>
      
      <PharmacyFooter_home />
    </Box>
  );
}

