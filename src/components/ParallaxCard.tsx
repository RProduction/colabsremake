import React, {useRef, useState, useLayoutEffect} from 'react';
import CurvedContainer from './CurvedContainer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useSpring, animated} from '@react-spring/web';

interface Props {
  title?: string;
  img: string;
  cardHeight: number;
  button? : boolean;
}

interface Anim {
  offset: number;
}

function clamp(min: number, max: number, input: number) {
  return Math.min(Math.max(input, min), max);
};

function ParallaxCard(props: Props) {
  const parent = useRef<any>(null);
  const [y, setY] = useState<number>(0);
  const [anim, api] = useSpring<Anim>(() => ({
    to: {offset: y}
  }), [y]);

  useLayoutEffect(() => {
    const scrollCallback = () => {
      const bound = parent.current?.getBoundingClientRect();
      const y = bound?.y || 0;
      const height = bound?.height || 0;
      const clampY = clamp(-height, height, y);
      setY(clampY / height);
      console.log({y, height, clampY});
    }

    window.addEventListener("scroll", scrollCallback);

    return () => {
      window.removeEventListener("scroll", scrollCallback);
    }
  }, []);

  return(
    <CurvedContainer button={props.button} padding={2} height={props.cardHeight}>
      <Box  
        component={animated.div}
        ref={(value) => parent.current = value}
        position="absolute"
        top={0}
        bottom={0}
        right={0}
        left={0}
        borderRadius={3}
        zIndex={0}
        sx={{
          backgroundImage: `url('${props.img}')`,
          backgroundSize: "cover"
        }}
        style={{
          transform: anim.offset.to((value) => {
            return `scale(1.35) translateY(${value * 20}px)`;
          }),
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