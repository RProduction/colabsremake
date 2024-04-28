import React from 'react';
import CurvedContainer from './CurvedContainer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Fab from '@mui/material/ButtonBase';
import Arrow from '@mui/icons-material/ArrowRight';

interface Props {
  title: Title[];
  video: string;
  subtitle: string;
  cardHeight: number | string;
}

interface Title {
  title: string;
  roundedTop?: boolean;
  roundedBottom?: boolean;
}

function MegaVideoCard(props: Props) {
  return(
    <CurvedContainer height={props.cardHeight}>
      <Box
        component="video"
        borderRadius={3}
        zIndex={0}
        autoPlay
        muted
        loop
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
        top={0}
        right={0}
        left={0}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {
          props.title.map((value, i, arr) => {
            return (
              <Typography
                key={value.title} 
                variant="h5" 
                color="white" 
                textAlign="center"
                sx={(theme) => ({
                  padding: 1,
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  borderTopLeftRadius: value.roundedTop ? 16 : 0,
                  borderTopRightRadius: value.roundedTop ? 16 : 0,
                  borderBottomLeftRadius: value.roundedBottom ? 16 : 0,
                  borderBottomRightRadius: value.roundedBottom ? 16 : 0,
                })}
              >
                {value.title}
              </Typography>
            )
          })
        }
        <Box
          display="flex"
          gap={2}
          alignItems="center"
          marginTop={2}
        >
          <Typography variant="body1" color="white"
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              padding: 1,
              borderRadius: 25
            }}
          >
            {props.subtitle}
          </Typography>
          <Fab
            sx={{
              width: 50,
              height: 50,
              padding: 2,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              color: "white",
              boxShadow: 'none',
              borderRadius: 50
            }}
          >
            <Arrow/>
          </Fab>
        </Box>
      </Box>
    </CurvedContainer>
  )
}

export default MegaVideoCard;