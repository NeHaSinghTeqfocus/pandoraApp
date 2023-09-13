// pages/index.tsx
import React from "react";
import Cards from '@/components/Carditem/CardsItem'
import Box from "@mui/material/Box";

const Home: React.FC = () => {
  return (
    <>
   <Box ml={5} sx={{direction:'flex', flexDirection:'row-reverse'}}>
   <Cards />
   </Box>
    </>
  )
};

export default Home;
