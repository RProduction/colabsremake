import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Props {
  title: string;
  subtitle: string;
}

function SectionTitle(props: Props) {
  return (
    <>
      <Typography 
        paddingTop={12} 
        paddingBottom={8}
        sx={{
          typography: {
            xs: "h4",
            sm: "h3"
          }
        }}
      >
        {props.title}
      </Typography>
      <Box
        width="fit-content"
        border="solid 1px"
        borderRadius={5}
        borderColor="black"
        padding={1}
        marginBottom={2}
      >
        <Typography>
          {props.subtitle}
        </Typography>
      </Box>
    </>
  )
}

export default SectionTitle;