import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(
      isExpanded ? [...expanded, panel] : expanded.filter((item) => item !== panel),
    );
  };

  // Array com as perguntas e respostas
  const faqData = [
    {
      id: 'panel1',
      question: 'Como posso participar das rifas?',
      answer: (
        <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
          Para participar, basta acessar a página da rifa desejada, escolher seus números e realizar o pagamento. Após a confirmação do pagamento, você estará concorrendo ao prêmio!
        </Typography>
      ),
    },
    {
      id: 'panel2',
      question: 'Como é feito o sorteio?',
      answer: (
        <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
          O sorteio é realizado de forma transparente, utilizando números da Loteria Federal ou do Jogo do Bicho. O resultado é divulgado em nosso site e nas redes sociais.
        </Typography>
      ),
    },
    {
      id: 'panel3',
      question: 'Quanto tempo leva para receber o prêmio?',
      answer: (
        <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
          O pagamento do prêmio é realizado em até 5 dias úteis após a confirmação do resultado. O valor é depositado diretamente na conta bancária do ganhador.
        </Typography>
      ),
    },
    {
      id: 'panel4',
      question: 'Posso comprar mais de um número para a mesma rifa?',
      answer: (
        <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
          Sim, você pode comprar quantos números quiser para aumentar suas chances de ganhar. Cada número é uma participação independente.
        </Typography>
      ),
    },
    {
      id: 'panel5',
      question: 'O site é seguro para compras?',
      answer: (
        <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
          Sim, nosso site utiliza tecnologia de criptografia para garantir a segurança de seus dados e transações. Sua privacidade e segurança são nossas prioridades.
        </Typography>
      ),
    },
  ];

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Dúvidas frequentes
      </Typography>
      <Box sx={{ width: '100%' }}>
        {faqData.map((faq) => (
          <Accordion
            key={faq.id}
            expanded={expanded.includes(faq.id)}
            onChange={handleChange(faq.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${faq.id}-content`}
              id={`${faq.id}-header`}
            >
              <Typography component="span" variant="subtitle2">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {faq.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}