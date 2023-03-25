import { IconButton } from '@mui/material'
import { Box, createTheme, useTheme } from '@mui/system'
import React from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useColorMode } from '@/context/ColorModeContext';

const ThemeToggleButton = () => {

    const theme = useTheme();
    const {toggleColorMode, mode} = useColorMode();    
    console.log("🚀 ~ file: ThemeToggleButton.tsx:16 ~ ThemeToggleButton ~ mode:", mode)
    

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
            }}
        >
            {theme.palette.mode} mode
            <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    )
}

export default ThemeToggleButton;