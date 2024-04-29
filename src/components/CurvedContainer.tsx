import React, {PropsWithChildren} from 'react';
import Box from '@mui/material/Box';
import Fab, {fabClasses} from '@mui/material/Fab';
import Arrow from '@mui/icons-material/ArrowRight';

interface Props extends PropsWithChildren {
  button?: boolean;
  bg?: string;
  padding?: number;
  height?: number | string;
  minHeight?: number | string;
  borderWidth?: number;
  borderColor?: string;
}

function CurvedContainer(props: Props) {
  return(
    <Box
      border={props.borderWidth ? `solid ${props.borderWidth}px ${props.borderColor}` : ""}
      flexGrow={1}
      borderRadius={3}
      bgcolor={props.bg}
      position="relative"
      padding={props.padding}
      height={props.height}
      minHeight={props.minHeight}
      overflow="hidden"
      className="curved-container"
      sx={{
        "& :hover .curved-container-arrow": {
          transform: "rotate(-30deg)"
        }
      }}
    >
      {props.children}
      {props.button ?
        <Box
          position="absolute"
          bottom={0}
          right={0}
          bgcolor="white"
          paddingLeft={1}
          paddingTop={1}
          sx={{
            borderTopLeftRadius: 20
          }}
        >
          <Fab
            size="small"
            color="cardFab"
            sx={{
              color: "white",
              boxShadow: "none",
            }}
          >
            <Arrow 
              sx={{
                transition: "transform 0.5s ease",
              }} 
              className='curved-container-arrow'
            />
          </Fab>
        </Box>
      : null}
    </Box>
  )
}

export default CurvedContainer;