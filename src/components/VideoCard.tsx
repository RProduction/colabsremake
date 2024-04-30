import React from 'react';
import CurvedContainer from './CurvedContainer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Fab from '@mui/material/ButtonBase';
import Arrow from '@mui/icons-material/ArrowDownward';

import {useInView, animated} from '@react-spring/web';

interface Props {
  title: string;
  video: string;
  cardHeight: number | string;
  cardMinHeight?: number | string;
}

function VideoCard(props: Props) {
  const [refText, animText] = useInView(() => ({
    from: {opacity: 0, transform: "translateY(-10px)"},
    to: {opacity: 1, transform: "translateY(0px)"}
  }), {once: true});

  const [refBtn, animBtn] = useInView(() => ({
    from: {opacity: 0, transform: "translateY(-10px)"},
    to: {opacity: 1, transform: "translateY(0px)"}
  }), {once: true});

  return(
    <CurvedContainer height={props.cardHeight} minHeight={props.cardMinHeight}>
      <Box
        component="video"
        borderRadius={3}
        zIndex={0}
        autoPlay
        muted
        loop
        height="inherit"
        width="100%"
        sx={{
          objectFit: 'fill'
        }}
      >
        <Box component="source" src={props.video} type="video/mp4">

        </Box>
      </Box>

      <Box
        position="absolute"
        bottom={0}
        width="100%"
      >
        <Grid container>
          <Grid xs={12} sm={6} bgcolor="white" sx={{
            borderTopRightRadius: 20,
            paddingTop: 2,
            paddingRight: 2
          }}>
            <Typography
              ref={refText}
              component={animated.p} 
              variant="h4" 
              color="black"
              style={{
                opacity: animText.opacity as unknown as number,
                transform: animText.transform as unknown as string
              }}
            >
              {props.title}
            </Typography>
            <Fab
              ref={refBtn}
              component={animated.button}
              style={{
                opacity: animBtn.opacity as unknown as number,
                transform: animBtn.transform as unknown as string
              }}
              sx={{
                width: 25,
                height: 25,
                padding: 2,
                border: "solid",
                borderWidth: 1,
                borderColor: "black",
                backgroundColor: 'transparent',
                color: "black",
                boxShadow: 'none',
                borderRadius: 50
              }}
            >
              <Arrow/>
            </Fab>
          </Grid>
        </Grid>
      </Box>
    </CurvedContainer>
  )
}

export default VideoCard;