import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import {useAppear} from '../hooks/useAppear';

interface Props {
  title: string;
  subtitle: string;
}

function SectionTitle(props: Props) {
  const {check, ref} = useAppear();

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

      <div ref={ref}>
        <Collapse
          orientation='vertical'
          in={check}
        >
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
        </Collapse>
      </div>
    </>
  )
}

export default SectionTitle;