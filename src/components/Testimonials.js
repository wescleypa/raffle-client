import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/system';

const userTestimonials = [
  {
    avatar: <Avatar alt="Ana Clara" src="https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-mulher-de-negocios-sorridente-vestido-bege-segurando-o-cartao-de-credito-vazio-no-fundo-cinza_231208-1969.jpg" />,
    name: 'Ana Clara',
    occupation: 'Vencedora de R$ 500,00',
    testimonial:
      "Adorei a experiência de comprar rifas no site! Fácil de usar e seguro. Ganhei R$ 500,00 na última promoção. Super recomendo!",
  },
  {
    avatar: <Avatar alt="Carlos Eduardo" src="https://img.freepik.com/fotos-premium/homem-de-meia-idade-fazendo-gesto-capice-ou-dinheiro-dizendo-para-voce-pagar-conceito-de-notas-de-dolar_1194-350092.jpg" />,
    name: 'Carlos Eduardo',
    occupation: 'Vencedor de R$ 1.000,00',
    testimonial:
      "Site muito organizado e confiável. Participei de várias rifas e já ganhei R$ 1.000,00. O processo de resgate foi rápido e sem complicações. Parabéns à equipe!",
  },
  {
    avatar: <Avatar alt="Juliana Santos" src="https://athensmoda-blog.s3.sa-east-1.amazonaws.com/posts/vestido-envelope-valorizando-as-suas-curvas/Caliope_FlorLilas.jpg" />,
    name: 'Juliana Santos',
    occupation: 'Vencedora de R$ 2.000,00',
    testimonial:
      "Comprei uma rifa para ajudar uma causa social e acabei ganhando R$ 2.000,00! Foi incrível contribuir e ainda ser premiada. Recomendo demais!",
  },
  {
    avatar: <Avatar alt="Roberto Almeida" src="https://thumbs.dreamstime.com/b/homem-feliz-descansando-em-casa-no-sof%C3%A1-cavalheiro-barbudo-sentado-na-sala-sorrindo-para-c%C3%A2mera-189468205.jpg" />,
    name: 'Roberto Almeida',
    occupation: 'Vencedor de R$ 1.500,00',
    testimonial:
      "Site muito transparente e fácil de navegar. Ganhei R$ 1.500,00 na última rifa e fiquei impressionado com a rapidez da entrega. Vale a pena participar!",
  },
  {
    avatar: <Avatar alt="Fernanda Lima" src="https://img.freepik.com/fotos-gratis/mulher-africana-relaxante-no-salao-spa-sorrindo_176420-12888.jpg" />,
    name: 'Fernanda Lima',
    occupation: 'Vencedora de R$ 3.000,00',
    testimonial:
      "Adoro participar das rifas, sempre tem opções legais e preços acessíveis. Dessa vez, ganhei R$ 3.000,00 e foi maravilhoso! Obrigada!",
  },
  {
    avatar: <Avatar alt="Pedro Henrique" src="https://img.freepik.com/fotos-gratis/retrato-do-homem-novo-feliz-que-aponta-na-camera_1262-3266.jpg" />,
    name: 'Pedro Henrique',
    occupation: 'Vencedor de R$ 2.500,00',
    testimonial:
      "Site muito confiável e com ótimos prêmios. Ganhei R$ 2.500,00 e estou super feliz! Já indiquei para todos os meus amigos.",
  },
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();

  return (
    <Container
      id="testimonials"
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
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Depoimentos
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Veja o que nossos clientes têm a dizer sobre suas experiências com nossas rifas!
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 4 }} // Corrigido conforme solicitado
            sx={{ display: 'flex' }}
          >
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: 'text.secondary' }}
                >
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}