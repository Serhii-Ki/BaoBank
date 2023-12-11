import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const CustomAppBar = ({onClick,text ,sx}) => {
    return (
        <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#272643",
          marginBottom: "10px",
          marginTop: "10px",
          ...sx
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={onClick}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            {text}
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default CustomAppBar;
