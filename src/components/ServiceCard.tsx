import React from 'react';
import CurvedContainer from './CurvedContainer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Props {
  title: string;
  content: string;
  img: string;
  imgSize: number;
  bg: string;
  borderColor: string;
  borderWidth: number;
  cardHeight: number;
}

function ServiceCard(props: Props) {
  return(
    <CurvedContainer 
      bg='white' 
      borderColor={props.borderColor} 
      borderWidth={props.borderWidth} 
      minHeight={props.cardHeight} 
      padding={2}
    >
      <Typography variant="h5" fontWeight={700}>
        {props.title}
      </Typography>
      <Typography paddingY={1}>
        {props.content}
      </Typography>
      <Box 
        marginTop={4}
        width={props.imgSize}
        height={props.imgSize}
        component="img"
        src={props.img}
      />
    </CurvedContainer>
  )
}

export default ServiceCard;