import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://www.superprof.co.in/blog/wp-content/uploads/2023/03/image2-4.png',
    title: 'A.R Rehman',
    width: '40%',
  },
  {
    url: 'https://www.hinglish.news/wp-content/uploads/2020/03/9.-Atif-Aslam-Most-Famous-Top-10-Best-Indian-Singers-2020.jpg',
    title: 'Atif Aslam',
    width: '20%',
  },
  {
    url: 'https://img.mensxp.com/media/content/2020/Apr/Leading-B-Wood-Singers-Who-Lost-On-Reality-Shows1200_5ea7d3e1ba5f2.jpeg',
    title: 'Arman Malik',
    width: '40%',
  },
  {
    url: 'https://freekaamaal.com/blog/wp-content/uploads/2021/06/sh.jpg',
    title: 'Shreya Ghoshal',
    width: '38%',
  },
  {
    url: 'https://navbharattimes.indiatimes.com/thumb/96293972/arijit-singh-hyderabad-concert-96293972.jpg?imgsize=59478&width=1200&height=900&resizemode=75',
    title: 'Arijit Singh',
    width: '38%',
  },
  {
    url: 'https://static.toiimg.com/thumb/msid-52687632,width-1280,resizemode-4/52687632.jpg',
    title: 'Honey Singh',
    width: '24%',
  },
  {
    url: 'https://static.toiimg.com/thumb/msid-91955271,width-1280,resizemode-4/91955271.jpg',
    title: 'Badshah',
    width: '40%',
  },
  {
    url: 'https://img.mensxp.com/media/content/2021/Jun/Header_60bdebbb73dfd.jpeg?w=656&h=432&cc=1',
    title: 'Diljeet Dosanjh',
    width: '20%',
  },
  {
    url: 'https://c.ndtvimg.com/2020-11/k4s1dmrg_vishalshekhar-instagram_625x300_11_November_20.jpg',
    title: 'Combo',
    width: '40%',
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        For all tastes and all desires
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
