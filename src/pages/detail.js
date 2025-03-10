import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Snackbar,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Menu, MenuItem
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

// Estilo personalizado para a imagem
const StyleBox = styled(Box)(({ theme }) => ({
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: theme.shadows[5],
  "& img": {
    width: "100%",
    height: "auto",
    display: "block",
  },
}));

// Estilo personalizado para o Chip
const CustomChip = styled(Button, {
  shouldForwardProp: (prop) => prop !== "selected",
})(({ theme, selected }) => ({
  minWidth: "60px",
  height: "48px",
  fontSize: "1rem",
  fontWeight: 600,
  borderRadius: "12px",
  border: `2px solid ${selected ? 'none' : theme.palette.success.main}`,
  backgroundColor: selected ? theme.palette.success.main : "transparent",
  color: selected ? "#fff" : theme.palette.success.main,
  transition: "all 0.2s ease-in-out",
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

// Componente de Pagamento Simulado
const PaymentComponent = ({ onClose }) => {
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        Pagamento
      </Typography>
      <Typography variant="body1" gutterBottom>
        Escolha sua forma de pagamento:
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }}>
        PIX
      </Button>
      <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
        Cartão de Crédito
      </Button>
      <Button variant="outlined" sx={{ mt: 2, ml: 2 }} onClick={onClose}>
        Cancelar
      </Button>
    </Box>
  );
};

const App = () => {
  const numbers = Array.from({ length: 38 }, (_, i) =>
    (i + 1).toString().padStart(3, "0")
  );

  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [reservedNumbers, setReservedNumbers] = useState([]); // Números reservados

  const handleChipClick = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
    } else {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const handleProceed = () => {
    setOpenConfirmationModal(true); // Abre o modal de confirmação
  };

  const handleConfirmationClose = () => {
    setOpenConfirmationModal(false); // Fecha o modal de confirmação
  };

  const handlePaymentClose = () => {
    setOpenPaymentModal(false); // Fecha o modal de pagamento
  };

  const handleConfirmReservation = () => {
    // Validação simples
    if (!whatsapp || !email) {
      alert("Por favor, preencha WhatsApp e e-mail.");
      return;
    }

    // Reserva os números (front-end apenas)
    setReservedNumbers([...reservedNumbers, ...selectedNumbers]);
    setSelectedNumbers([]); // Limpa os números selecionados
    setOpenConfirmationModal(false); // Fecha o modal de confirmação
    setOpenPaymentModal(true); // Abre o modal de pagamento
  };

  const topBuyers = ["Maria Oliveira", "Carlos Souza", "Ana Costa", "Pedro Rocha", "Luiza Mendes"];

  return (
    <Container sx={{ mt: 15 }}>
      {/* Parte superior: Imagem e texto ao lado */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 4, mb: 4 }}>
        <Grid item xs={12} md={6}>
          <StyleBox>
            <img
              src="https://i.imgur.com/OotsG9U.png"
              alt="Imagem"
            />
          </StyleBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Valor da Rifa: R$ 10,00
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Descrição da Rifa: Esta rifa é para ajudar na causa XYZ. O sorteio será realizado no dia 30/11/2023.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Ver Números Comprados
          </Button>
        </Grid>
      </Grid>

      {/* Últimos Vencedores e Melhores Compradores */}
      <Grid container spacing={4} sx={{ mt: 2, mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Últimos Vencedores
          </Typography>
          <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: "8px" }}>
            {topBuyers.map((buyer, index) => (
              <Typography key={index} variant="body1" gutterBottom>
                {`${index + 1}. ${buyer}`}
              </Typography>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Últimos Compradores
          </Typography>
          <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: "8px" }}>
            {topBuyers.map((buyer, index) => (
              <Typography key={index} variant="body1" gutterBottom>
                {`${index + 1}. ${buyer}`}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Parte inferior: Números (Chips) e Botão de Filtrar */}
      <Box sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <div>
            <Typography variant="h4" component="h1" gutterBottom>
              🍀 Cotas
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Escolha sua quantidade de chances de ganhar
            </Typography>
          </div>

          <Button
            id="basic-button"
            aria-controls={anchorEl ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={anchorEl ? 'true' : undefined}
            variant="outlined"
            color="primary"
            onClick={handleFilterClick}
          >
            <FilterAltIcon /> Filtrar
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleFilterClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleFilterClose}>Filtrar por Disponíveis</MenuItem>
            <MenuItem onClick={handleFilterClose}>Filtrar por Comprados</MenuItem>
            <MenuItem onClick={handleFilterClose}>Filtrar por Reservados</MenuItem>
            <MenuItem onClick={handleFilterClose}>Limpar Filtros</MenuItem>
          </Menu>
        </Box>

        <Grid container spacing={1}>
          {numbers.map((number) => (
            <Grid item key={number}>
              <CustomChip
                onClick={() => handleChipClick(number)}
                selected={selectedNumbers.includes(number) || reservedNumbers.includes(number)}
                disabled={reservedNumbers.includes(number)} // Desabilita números reservados
              >
                {number}
              </CustomChip>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Modal flutuante */}
      <Snackbar
        open={selectedNumbers.length > 0}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        message={`${selectedNumbers.length} número(s) selecionado(s)`}
        action={
          <Button color="secondary" size="small" onClick={handleProceed}>
            Prosseguir
          </Button>
        }
      />

      {/* Modal de Confirmação */}
      <Dialog open={openConfirmationModal} onClose={handleConfirmationClose}>
        <DialogTitle>Confirmar Reserva</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Por favor, insira seu WhatsApp e e-mail para prosseguir:
          </Typography>
          <TextField
            fullWidth
            label="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Typography variant="body1" sx={{ mt: 2 }}>
            Números selecionados:
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
            {selectedNumbers.map((number) => (
              <CustomChip key={number} selected>
                {number}
              </CustomChip>
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmationClose}>Cancelar</Button>
          <Button onClick={handleConfirmReservation} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal de Pagamento */}
      <Dialog open={openPaymentModal} onClose={handlePaymentClose}>
        <PaymentComponent onClose={handlePaymentClose} />
      </Dialog>
    </Container>
  );
};

export default App;