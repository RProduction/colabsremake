import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ImageCard from '../components/ImageCard';
import ParallaxCard from '../components/ParallaxCard';
import VideoCard from '../components/VideoCard';
import CarouselRounded from '../components/CarouselRounded';
import CarouselCard from '../components/CarouselCard';
import { SwiperSlide } from 'swiper/react';
import SectionTitle from '../components/SectionTitle';
import MegaVideoCard from '../components/MegaVideoCard';
import FullScreenCarousel from '../components/FullScreenCarousel';
import ExtendedImageCard from '../components/ExtendedImageCard';
import Hidden from '@mui/material/Hidden';
import FormCard from '../components/FormCard';
import Footer from '../components/Footer';

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
              button
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
          </Grid>
        </Grid>

        <SectionTitle
          title='We design, build and run collaborative spaces where bio-led science, technology and people can thrive'
          subtitle='Our Services'
        />
      </Container>
      
      <Box paddingY={2}>
        <FullScreenCarousel
          content={[
            {
              bg: "orange",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s",
              title: "Test Card"
            },
            {
              bg: "red",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s",
              title: "Test Card"
            },
            {
              bg: "yellow",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s",
              title: "Test Card"
            },
            {
              bg: "green",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s",
              title: "Test Card"
            },
            {
              bg: "purple",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s",
              title: "Test Card"
            }
          ]}
        />
      </Box>

      <Container maxWidth="xl">
        <MegaVideoCard
          video="/placeholder.mp4"
          cardHeight={500}
          subtitle='Our Principles'
          title={[
            {
              title: 'Reposition Science',
              roundedTop: true
            },
            {
              title: 'Redefine Our Approach',
              roundedTop: true
            },
            {
              title: 'Rethink Entrepreneurship',
              roundedTop: true,
              roundedBottom: true
            },
            {
              title: 'Regenerate our Planet',
              roundedBottom: true
            }
          ]}
        />

        <Grid container marginTop={8} columnSpacing={{xs: 0, sm: 1}} rowSpacing={{xs: 2, sm: 0}}>
          <Grid xs={12} sm={6}>
            <ImageCard
              cardHeight="100%"
              minCardHeight={200}
              variant='h4'
              title='We believe biology is the future of technology' 
              bg='orange' 
              imgSize={200} 
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
            />
          </Grid>
          <Grid xs={12} sm={6} direction="column" container gap={1}>
            <Grid 
              xs={12}
              component={ParallaxCard}
              title='Card Title'
              cardHeight={150}
              button
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
            >
            </Grid>
            <Grid 
              xs={12}
              component={ParallaxCard}
              title='Card Title'
              cardHeight={150}
              button
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
            >
            </Grid>
          </Grid>
        </Grid>

        <SectionTitle
          title='Space for big thinking, problem-solvers and bio-innovators'
          subtitle="Community"
        />

        <Grid 
          container 
          spacing={1}
          sx={(theme) => ({
            [theme.breakpoints.up("md")]: {
              position: "relative",
              top: -60
            }
          })}
        >
          <Hidden mdDown>
            <Grid xs={12} md={3}>

            </Grid>
          </Hidden>
          <Grid xs={12} sm={4} md={3}>
            <ExtendedImageCard
              bg='green'
              caption='Beyond the bench'
              title="What are 3 Horizons of Transformative innovation?"
              description="'Three Horizons thinking' is a useful method for making sense of and facilitating transformative innovation"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
              imgHeight={250}
            />
          </Grid>
          <Grid xs={12} sm={4} md={3}>
            <ExtendedImageCard
              bg='green'
              caption='Beyond the bench'
              title="What are 3 Horizons of Transformative innovation?"
              description="'Three Horizons thinking' is a useful method for making sense of and facilitating transformative innovation"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
              imgHeight={250}
            />
          </Grid>
          <Grid xs={12} sm={4} md={3}>
            <ExtendedImageCard
              bg='green'
              caption='Beyond the bench'
              title="What are 3 Horizons of Transformative innovation?"
              description="'Three Horizons thinking' is a useful method for making sense of and facilitating transformative innovation"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
              imgHeight={250}
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} marginTop={4} marginBottom={1}>
          <Grid xs={12} sm={6}>
            <ParallaxCard
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
              cardHeight={350}
            />
            </Grid>
          <Grid xs={12} sm={6}>
            <FormCard
              title="An ecosystem to be part of.<br/>Stay in the loop."
              caption='Subscribe'
              inputText='Your Email Address'
              bg='blue'
              description='Subscribe for updates, news, events, and community resources.'
              cardHeight={350}
            />
          </Grid>
        </Grid>
        
        <Footer
          bg='#222222'
          header='Co-Labs Melbourne respectfully acknowledges the Traditional Custodians of the land on which we operate our business – the Boon Wurrung and Wurundjeri peoples of the Kulin Nation.'
          cardHeight={300}
          contacts={[
            {
              address: "CoLabs Coworking 1/306 Albert St, Brunswick",
              telp: "(03) 9111 2399"
            },
            {
              address: "CoLabs Coworking 1/306 Albert St, Brunswick",
              telp: "(03) 9111 2399"
            },
            {
              address: "CoLabs Coworking 1/306 Albert St, Brunswick",
              telp: "(03) 9111 2399"
            },
            {
              address: "CoLabs Coworking 1/306 Albert St, Brunswick",
              telp: "(03) 9111 2399"
            }
          ]}
          links={[
            {
              text: "Services",
              url: "/services"
            },
            {
              text: "Privacy Policy",
              url: "/"
            },
            {
              text: "Our Principles",
              url: "/"
            },
            {
              text: "Terms and Conditions",
              url: "/"
            },
            {
              text: "About",
              url: "/"
            },
            {
              text: ""
            },
            {
              text: "Community",
              url: "/"
            },
            {
              text: ""
            },
            {
              text: "Contact",
              url: "/"
            },
            {
              text: "© 2024 CoLabs"
            }
          ]}
        />
      </Container>
    </>
  )
}

export default Home;