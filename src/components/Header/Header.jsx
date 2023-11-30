// import React from 'react'
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import '../../style/header.css'

const Header = () => {
  return (
    <header className="flex text">
      <div>
        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="not found" />
      </div>
      <span className='text'>
        Categories
      </span>
      <div className='searchBar'>
        <div className='button largeIcon buttonIcon searchIcon'>
          <Search fontSize='large' />
        </div>
        <input className='text' type="text" placeholder="Search for anything" />
      </div>
      <div>
        Teach on Udemy
      </div>
      <div className='button largeIcon buttonIcon'>
        <ShoppingCartOutlined fontSize='large' />
      </div>
      <div className='button border mediumHeight heading'>
        Log in
      </div>
      <div className='button mediumHeight heading primaryBG primaryColor'>
        Sign up
      </div>
    </header>
  )
}

export default Header


// import React from 'react'

// import { SearchOutlined } from "@mui/icons-material"
// import { AppBar, Box, CssBaseline, IconButton, TextField, Toolbar, Typography } from "@mui/material"


// const Header = () => {
//   return (
//     <AppBar position="static" sx={{ bgcolor: "#fff", color: "#2d2f31" }}>
//       <CssBaseline />
//       <Toolbar >
//         <Box
//           component="img"
//           sx={{ height: 54 }}
//           alt="Logo"
//           src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
//         />
//         <Typography variant="body2" >
//           Categories
//         </Typography>
//         <TextField
//           id="standard-bare"
//           variant="outlined"
//           placeholder="Search for anything"
//           InputProps={{
//             startAdornment: (
//               <IconButton sx={{ marginLeft: '-0.5em', cursor: 'not-allowed' }}>
//                 <SearchOutlined />
//               </IconButton>
//             ),
//             style: {
//               borderRadius: '2em',
//               height: '3em',
//               backgroundColor: '#f7f9fa'
//             }
//           }}
//         />
//         <Typography variant="body2" >
//           Udemy Business
//         </Typography>

//       </Toolbar>
//     </AppBar>
//   )
// }

// export default Header