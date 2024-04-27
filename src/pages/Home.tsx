import React from 'react';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2';
import ImageCard from '../components/ImageCard';
import ParallaxCard from '../components/ParallaxCard';
import VideoCard from '../components/VideoCard';

function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid
            xs={12} 
            sm={9} 
          >
            <VideoCard
              title="Making space for transformative innovation" 
              video="/placeholder.mp4" 
              cardHeight="100%"
            />
          </Grid>
          <Grid container xs={12} sm={3} gap={1} direction="column">
            <Grid 
              component={ImageCard} 
              cardHeight={150} 
              learn 
              xs={12} 
              title='Card Title' 
              bg='orange' 
              imgSize={100} 
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
            >
            </Grid>
            <Grid 
              component={ImageCard} 
              cardHeight={150} 
              learn 
              xs={12} 
              title='Card Title' 
              bg='orange' 
              imgSize={100} 
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
            >
            </Grid>
            <Grid 
              xs={12}
              component={ParallaxCard}
              title='Card Title'
              cardHeight={150}
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
            >
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home;