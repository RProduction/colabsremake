import React from 'react';
import CurvedContainer from './CurvedContainer';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';

import Arrow from '@mui/icons-material/ArrowRight';


interface Props {
  title: string;
  inputText: string;
  caption: string;
  description: string;
  bg: string;
  cardHeight: number;
}

function FormCard(props: Props) {
  return(
    <CurvedContainer bg={props.bg} padding={2} height={props.cardHeight}>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        height="100%"
        gap={1}
      >
        <Typography color="white" variant="h4">
          {
            props.title.split("<br/>").map((value, i, arr) => (
              <span key={`${value}${i}`}>{value}{i < arr.length ? <br/> : null}</span>
            ))
          }
        </Typography>
        <Box
          bgcolor="white"
          borderRadius={10}
          padding={2}
        >
          <InputBase
            placeholder={props.inputText}
            
          />
        </Box>
        
        <Box display="flex" justifyContent="right" alignItems="center" gap={1}>
          <Typography color="white">
            {props.caption}
          </Typography>
          <Fab
            color='black'
            sx={{
              color: "white",
              boxShadow: "none"
            }}
          >
            <Arrow/>
          </Fab>
        </Box>
        <Typography color="white">
          {props.description}
        </Typography>
      </Box>
    </CurvedContainer>
  )
}

export default FormCard;