import {Box,Button,Typography,styled} from '@mui/material/';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import React from 'react'

const Wrapper = styled(Box)`
display:flex;
// margin:0 5% 0 auto;
&> button, &>p,&> div{
  margin-right: 40px;
  font-size:14px;
  align-item:centre;
}
`
const Sellingcart = styled(Box)`
display:flex
`
const Loginbutton = styled(Button)`
color:#2874f0;
background:#FFFFFF;
text-transform:none;
padding:5px 40px;
border-radius:2px;
box-shadow: none;
font-weight: 600;
height: 32px;
`

const CustomButton = () => {
  return (
    <Wrapper>
      <Loginbutton variant="contained">Login</Loginbutton>
       <Typography style={{marginTop:3,width: 135}}>Become a Seller</Typography>
       <Typography style={{marginTop:3}}>More</Typography>
       <Sellingcart>
        <ShoppingCartIcon/>
        <Typography>Cart</Typography>
       </Sellingcart>
    </Wrapper>
  )
}

export default CustomButton