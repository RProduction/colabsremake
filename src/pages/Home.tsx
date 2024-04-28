import React from 'react';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2';
import ImageCard from '../components/ImageCard';
import ParallaxCard from '../components/ParallaxCard';
import VideoCard from '../components/VideoCard';
import CarouselRounded from '../components/CarouselRounded';
import CarouselCard from '../components/CarouselCard';
import { SwiperSlide } from 'swiper/react';

function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid
            xs={12} 
            sm={8} 
          >
            <VideoCard
              title="Making space for transformative innovation" 
              video="/placeholder.mp4" 
              cardHeight="100%"
            />
          </Grid>
          <Grid container xs={12} sm={4} gap={1} direction="column">
            <Grid 
              component={CarouselRounded} 
              xs={12} 
              bg='brown'
              items={[
                {
                  content: "Ideas Supported",
                  targetNumber: 28,
                  targetPostfix: ""
                },
                {
                  content: "Impact Scholarships Awarded",
                  targetNumber: 14,
                  targetPostfix: ""
                },
                {
                  content: "Of plants here double as lab assistants",
                  targetNumber: 65,
                  targetPostfix: "%"
                },
                {
                  content: "Chance of running into a punny scientist",
                  targetNumber: 95,
                  targetPostfix: "%"
                },
                {
                  content: "Of science equipment diverted from landfill",
                  targetNumber: 2200,
                  targetPostfix: "kg"
                }
              ]} 
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
            <Grid 
              xs={12}
              
            >
              <CarouselCard
                cardHeight={150}
                bg='green'
              >
                <SwiperSlide>
                  test
                </SwiperSlide>
                <SwiperSlide>
                  test
                </SwiperSlide>
                <SwiperSlide>
                  test
                </SwiperSlide>
                <SwiperSlide>
                  test
                </SwiperSlide>
                <SwiperSlide>
                  test
                </SwiperSlide>
              </CarouselCard>
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
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home;