
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Toolbar from '@mui/material/Toolbar';
import React from 'react'
import Search from './Search';
import CustomButton from './CustomButton';

const Harish = styled(AppBar)`
   background:#2874f0;
   height:55px
`
const Component = styled(Box)`
 margin-left:12%;
 line-height:0;
`
const Subheading = styled(Typography)`
font-size:10px;
font-style:italic;
`
const Customlogin = styled(Box)`
margin:0 1% 0 auto;
`
const PlusImage = styled('img')({
  width:10,
  height:10,
  marginLeft:4

})

const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    
        <Harish>
            <Toolbar style={{minHeight:55}}>
              <Component>
                 <img src={logoURL} alt="logo" style={{width:75}} />
                 <Box style={{display:'flex'}}>
                  <Subheading>Explore&nbsp; 
                    <Box component="span" style={{color: "#fff500"}}>Plus</Box>
                    </Subheading>
                    <PlusImage src={subURL} alt="sub-logo"/>
                 </Box>
              </Component>
                <Search/>
               <Customlogin>
               <CustomButton/>
               </Customlogin>
            </Toolbar>

        </Harish>
    
  )
}

export default Header