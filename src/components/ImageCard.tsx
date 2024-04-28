import React from 'react';
import CurvedContainer from './CurvedContainer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Variant} from '@mui/material/styles/createTypography';

interface Props {
  title: string;
  bg: string;
  img: string;
  learn?: boolean;
  imgSize: number;
  cardHeight: number | string;
  minCardHeight?: number | string;
  variant?: Variant;
}

function ImageCard(props: Props) {
  const variant = props.variant || "h5";

  return(
    <CurvedContainer bg={props.bg} button height={props.cardHeight} minHeight={props.minCardHeight}>
      <Typography variant={variant} color="white" zIndex={2} position="relative" padding={2}>
        {props.title}
      </Typography>
      <Box
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          borderRadius={50}
          width={props.imgSize} 
          height={props.imgSize}       
          zIndex={1}
          sx={{
            backgroundImage: `url('${props.img}')`
          }}
        >

        </Box>
      </Box>
      {props.learn ?
        <Typography variant="body2" color="white" position="absolute" bottom={5} right={60} zIndex={2}>
          Learn More
        </Typography>
      : null}
    </CurvedContainer>
  )
}

export default ImageCard;