import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';
import Logo from '../images/logo.png';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar({ selItem, setSelItem }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goHome = () => {
    setSelItem(false);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            {/*<img src={Logo} width="100px" />*/}Aqui vai seu logo
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {!selItem && selItem !== 0 ? (
                <>
                  <Button variant="text" color="info" size="small" onClick={() => scrollToSection('logoCollection')}>
                    Prêmios
                  </Button>
                  <Button variant="text" color="info" size="small" onClick={() => scrollToSection('testimonials')}>
                    Depoimentos
                  </Button>
                  <Button variant="text" color="info" size="small" onClick={() => scrollToSection('faq')}>
                    Dúvidas frequentes
                  </Button>
                  <Button variant="text" color="info" size="small" onClick={() => scrollToSection('hero')}>
                    Consultar meus números
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="text" color="info" size="small" onClick={() => goHome()}>
                    Voltar ao início
                  </Button>
                </>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                {!selItem && selItem !== 0 ? (
                  <>
                    <MenuItem onClick={() => scrollToSection('logoCollection')}>Prêmios</MenuItem>
                    <MenuItem onClick={() => scrollToSection('testimonials')}>Depoimentos</MenuItem>
                    <MenuItem onClick={() => scrollToSection('faq')}>Dúvidas frequentes</MenuItem>
                    <MenuItem onClick={() => scrollToSection('hero')}>Consultar meus números</MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem onClick={() => goHome()}>
                      <Button color="primary" variant="contained" fullWidth>
                        Voltar ao início
                      </Button>
                    </MenuItem>
                  </>
                )}

              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}