
import { InputBase,Box,styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const SearchContainer = styled(Box)`
     background:#fff;
     width:38%;
     border-radius:2px;
     margin-left:10px;
     display:flex;
`
const InputbaseContainer = styled(InputBase)`
 width:100%;
 paddingright:3;
 
`
const SearchIconWrapper = styled(Box)`
color:blue;
padding:6px;
 `




const Search = () => {
  return (
    <SearchContainer>
       <InputbaseContainer
             placeholder='Search for products,brands and more'
       />
       <SearchIconWrapper>
        <SearchIcon/>
       </SearchIconWrapper>
    </SearchContainer>
  )
}

export default Search