import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import CurvedContainer from './CurvedContainer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/ButtonBase';

import {useInView, useSpring, animated} from '@react-spring/web';

import Arrow from '@mui/icons-material/ArrowRight';

interface Anim {
  progress: number;
}

interface Props {
  items: Item[];
}

interface Item {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  bg: string;
}

function ServicesContent(props: Props) {
  const [ref, inView] = useInView({rootMargin: ""});
  const [anim, api] = useSpring<Anim>(() => ({
    from: {progress: 0},
    to: {}
  }));
  
  return (
    <Box
      component={animated.div}
      ref={ref}
      style={{
        position: inView ? "fixed" : "relative",
        top: 100,
        width: "95%"
      }}
    >
      <Grid container spacing={1}>
        {
          props.items.map((value, i) => (
            <Grid xs={3} key={`${value.id}${i}`}>
              <Button
                disableRipple
                sx={{
                  color: "#000000",
                  border: `solid 1px ${value.bg}`,
                  borderRadius: 25,
                  padding: 2,
                  width: "100%"
                }}
              >
                {value.id}
              </Button>
            </Grid>
          ))
        }
      </Grid>      
      {
        props.items.map((value, i) => (
          <Box
            key={`${value.id}${i}`}
            padding={1}
          >
            <Box
              flexGrow={1}
              borderRadius={10}
              bgcolor={value.bg}
              position="relative"
              padding={4}
              height={400}
              overflow="hidden"
              display="flex"
              gap={2}
              flexDirection="column"
            >
              <Box
                sx={{
                  backgroundImage: `url('${value.img}')`,
                  width: "100%",
                  height: 100,
                  borderRadius: 5
                }}
              >

              </Box>
              <Typography variant="h4" fontWeight={700}>
                {value.title}
              </Typography>
              <Typography variant="h5">
                {value.subtitle}
              </Typography>

              <Fab
                size="large"
                color="cardFab"
                sx={(theme) => ({
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  color: "white",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: theme.palette.black.main
                  }
                })}
              >
                <Arrow/>
              </Fab>
            </Box>
          </Box>
        ))
      }
    </Box>
  )
}

export default ServicesContent;