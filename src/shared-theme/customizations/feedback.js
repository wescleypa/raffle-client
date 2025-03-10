import { alpha } from '@mui/material/styles';
import { gray, orange } from '../themePrimitives.js';

/* eslint-disable import/prefer-default-export */
export const feedbackCustomizations = {
  MuiAlert: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        borderRadius: 10,
        backgroundColor: orange[100],
        color: (theme.vars || theme).palette.text.primary,
        border: `1px solid ${
          ownerState.severity === 'error'
            ? alpha('hsl(0, 70%, 50%)', 0.5) // Vermelho para erro
            : ownerState.severity === 'success'
            ? alpha('hsl(120, 70%, 50%)', 0.5) // Verde para sucesso
            : ownerState.severity === 'warning'
            ? alpha('hsl(45, 70%, 50%)', 0.5) // Laranja para alerta
            : ownerState.severity === 'info'
            ? alpha('hsl(210, 70%, 50%)', 0.5) // Azul para informação
            : alpha('hsl(30, 70%, 50%)', 0.5) // Laranja padrão
        }`,
        '& .MuiAlert-icon': {
          color: orange[500], // Cor do ícone
        },
        ...theme.applyStyles('dark', {
          backgroundColor:
            ownerState.severity === 'error'
              ? 'hsl(0, 70%, 20%)' // Vermelho escuro
              : ownerState.severity === 'success'
              ? 'hsl(120, 30%, 20%)' // Verde escuro
              : ownerState.severity === 'warning'
              ? 'hsl(45, 70%, 20%)' // Laranja escuro
              : ownerState.severity === 'info'
              ? 'hsl(210, 70%, 20%)' // Azul escuro
              : 'hsl(0, 0%, 20%)', // Cinza escuro padrão
        }),
        ...theme.applyStyles('light', {
          backgroundColor:
            ownerState.severity === 'error'
              ? 'hsl(0, 70%, 95%)' // Vermelho claro
              : ownerState.severity === 'success'
              ? 'hsl(120, 70%, 95%)' // Verde claro
              : ownerState.severity === 'warning'
              ? 'hsl(45, 70%, 95%)' // Laranja claro
              : ownerState.severity === 'info'
              ? 'hsl(210, 70%, 95%)' // Azul claro
              : 'hsl(0, 0%, 95%)', // Cinza claro padrão
        }),
      }),
    },
  },
  MuiDialog: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiDialog-paper': {
          borderRadius: '10px',
          border: '1px solid',
          borderColor: (theme.vars || theme).palette.divider,
        },
      }),
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: ({ theme }) => ({
        height: 8,
        borderRadius: 8,
        backgroundColor: gray[200],
        ...theme.applyStyles('dark', {
          backgroundColor: gray[800],
        }),
      }),
    },
  },
};