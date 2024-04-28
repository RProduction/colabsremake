import React from 'react';

import CurvedContainer from './CurvedContainer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  img: string;
  title: string;
  bg: string;
  imgHeight: number;
  caption: string;
  description: string;
}

function ExtendedImageCard(props: Props) {
  return (
    <Box
      sx={{
        transition: "transform .5s ease",
        ":hover": {
          transform: "translateY(-10px)",
          "& .extended-image-card-img": {
            transform: "scale(1.1)"
          }
        }
      }}
    >
      <CurvedContainer bg={props.bg} button height={props.imgHeight}>
        <Typography 
          color="black" 
          zIndex={2} 
          position="relative" 
          padding={1}
          margin={2}
          sx={{
            backgroundColor: props.bg,
            borderRadius: 20,
            width: "fit-content"
          }}
        >
          {props.caption}
        </Typography>
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
            transition: "transform .5s ease"
          }}
          className='extended-image-card-img'
        >

        </Box>
      </CurvedContainer>

      <Typography variant="h5" fontWeight={700}>
        {props.title}
      </Typography>
      <Typography>
        {props.description}
      </Typography>
    </Box>
  )
}

export default ExtendedImageCard;