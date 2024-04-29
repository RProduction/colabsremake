import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ParallaxCard from '../components/ParallaxCard';
import VideoCard from '../components/VideoCard';
import SectionTitle from '../components/SectionTitle';
import Hidden from '@mui/material/Hidden';
import FormCard from '../components/FormCard';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

function Services() {
  return (
    <>
      <Container maxWidth="xl">
        <VideoCard
          title="Co-Labs gives people a place to experiment and create" 
          video="/placeholder.mp4" 
          cardHeight={600}
        />
        <SectionTitle
          title='By facilitating systems innovation we believe we can generate social, economic and environmental outcomes that will benefit the health and well-being of people and the planet.'
          subtitle="Why CoLabs"
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
            <ServiceCard
              bg='white'
              borderColor='rgba(0,0,0,0.3)'
              borderWidth={1}
              imgSize={50}
              cardHeight={200}
              title="What are 3 Horizons of Transformative innovation?"
              content="'Three Horizons thinking' is a useful method for making sense of and facilitating transformative innovation"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
            />
          </Grid>
          <Grid xs={12} sm={4} md={3}>
            <ServiceCard
              bg='white'
              borderColor='rgba(0,0,0,0.3)'
              borderWidth={1}
              imgSize={50}
              cardHeight={200}
              title="What are 3 Horizons of Transformative innovation?"
              content="'Three Horizons thinking' is a useful method for making sense of and facilitating transformative innovation"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
            />
          </Grid>
          <Grid xs={12} sm={4} md={3}>
            <ServiceCard
              bg='white'
              borderColor='rgba(0,0,0,0.3)'
              borderWidth={1}
              imgSize={50}
              cardHeight={200}
              title="What are 3 Horizons of Transformative innovation?"
              content="'Three Horizons thinking' is a useful method for making sense of and facilitating transformative innovation"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
            />
          </Grid>
          <Hidden mdDown>
            <Grid xs={12} md={3}>

            </Grid>
          </Hidden>
          <Grid xs={12} sm={4} md={3}>
            <ServiceCard
              bg='white'
              borderColor='rgba(0,0,0,0.3)'
              borderWidth={1}
              imgSize={50}
              cardHeight={200}
              title="What are 3 Horizons of Transformative innovation?"
              content="'Three Horizons thinking' is a useful method for making sense of and facilitating transformative innovation"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
            />
          </Grid>
          <Grid xs={12} sm={4} md={3}>
            <ServiceCard
              bg='white'
              borderColor='rgba(0,0,0,0.3)'
              borderWidth={1}
              imgSize={50}
              cardHeight={200}
              title="What are 3 Horizons of Transformative innovation?"
              content="'Three Horizons thinking' is a useful method for making sense of and facilitating transformative innovation"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
            />
          </Grid>
          <Grid xs={12} sm={4} md={3}>
            <ServiceCard
              bg='white'
              borderColor='rgba(0,0,0,0.3)'
              borderWidth={1}
              imgSize={50}
              cardHeight={200}
              title="What are 3 Horizons of Transformative innovation?"
              content="'Three Horizons thinking' is a useful method for making sense of and facilitating transformative innovation"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
            />
          </Grid>
          <Hidden mdDown>
            <Grid xs={12} md={3}>

            </Grid>
          </Hidden>
          <Grid xs={12} sm={4} md={3}>
            <ServiceCard
              bg='white'
              borderColor='rgba(0,0,0,0.3)'
              borderWidth={1}
              imgSize={50}
              cardHeight={200}
              title="What are 3 Horizons of Transformative innovation?"
              content="'Three Horizons thinking' is a useful method for making sense of and facilitating transformative innovation"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
            />
          </Grid>
          <Grid xs={12} sm={4} md={3}>
            <ServiceCard
              bg='white'
              borderColor='rgba(0,0,0,0.3)'
              borderWidth={1}
              imgSize={50}
              cardHeight={200}
              title="What are 3 Horizons of Transformative innovation?"
              content="'Three Horizons thinking' is a useful method for making sense of and facilitating transformative innovation"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
            />
          </Grid>
        </Grid>
        
        <Grid container spacing={1} marginTop={4} marginBottom={1}>
          <Grid xs={12} sm={6}>
            <ParallaxCard
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtreGWV4E8pyCco35lisDbjhsOooTFB9Og6KwgnrT6g&s"
              cardHeight={450}
            />
            </Grid>
          <Grid xs={12} sm={6}>
            <FormCard
              title="An ecosystem to be part of.<br/>Stay in the loop."
              caption='Subscribe'
              inputText='Your Email Address'
              bg='blue'
              description='Subscribe for updates, news, events, and community resources.'
              cardHeight={450}
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

export default Services;