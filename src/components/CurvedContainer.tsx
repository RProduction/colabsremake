import React, {PropsWithChildren, useEffect, useState} from 'react';
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
  onHover?: (state: boolean) => void;
  translateUpHover?: boolean;
}

function CurvedContainer(props: Props) {
  const [hover, setHover] = useState<boolean>(false);

  useEffect(() => {
    if(props.onHover != undefined) {
      props?.onHover(hover);
    }
  }, [hover]);

  return(
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      border={props.borderWidth ? `solid ${props.borderWidth}px ${props.borderColor}` : ""}
      flexGrow={1}
      borderRadius={3}
      bgcolor={props.bg}
      position="relative"
      padding={props.padding}
      height={props.height}
      minHeight={props.minHeight}
      overflow="hidden"
      sx={{
        transition: "transform 0.5s ease",
        transform: hover && props.translateUpHover ? "translateY(-10px)" : "translateY(0px)"
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
            sx={(theme) => ({
              color: "white",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: theme.palette.black.main
              }
            })}
          >
            <Arrow 
              sx={{
                transition: "transform 0.5s ease",
                transform: hover ? "rotate(-30deg)" : "rotate(0deg)"
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