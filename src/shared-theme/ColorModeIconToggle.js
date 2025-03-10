import * as React from 'react';
import { useColorScheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Ícone de lua (modo escuro)
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Ícone de sol (modo claro)

export default function ColorModeToggle(props) {
  const { mode, setMode } = useColorScheme();

  // Função para alternar entre os modos claro e escuro
  const toggleColorMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton
      onClick={toggleColorMode}
      color="inherit"
      aria-label="toggle color mode"
      {...props}
    >
      {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
}