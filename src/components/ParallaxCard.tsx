import React from 'react';
import CurvedContainer from './CurvedContainer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Props {
  title?: string;
  img: string;
  cardHeight: number;
  button? : boolean;
}

function ParallaxCard(props: Props) {
  return(
    <CurvedContainer button={props.button} padding={2} height={props.cardHeight}>
      <Box
        position="absolute"
        top={0}
        bottom={0}
        right={0}
        left={0}
        borderRadius={3}
        zIndex={0}
        sx={{
          backgroundImage: `url('${props.img}')`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      >

      </Box>
      {props.title ? 
        <Typography variant="h5" color="white" zIndex={2} position="relative">
          {props.title}
        </Typography>
      : null}
    </CurvedContainer>
  )
}

export default ParallaxCard;