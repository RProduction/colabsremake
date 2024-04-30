import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Search from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import {useSpring, animated} from '@react-spring/web';

interface Props {
  extends?: boolean;
}

interface Anim {
  opacity: number;
  left: string;
}

function SearchTab(props: Props) {
  const [check, setCheck] = useState(false);
  const [anim, api] = useSpring<Anim>(() => ({
    from: {opacity: 0, left: "100%"},
    to: {opacity: check ? 1 : 0, left: check ? "0%" : "100%"},
    config: {
      duration: 500
    }
  }), [check]);

  return (
    <>
      <Box display="flex" flexGrow={1} position='relative'>
        <Box
          component={animated.div}
          display="flex"
          alignItems="center"
          flexGrow={1}
          bgcolor="rgba(255,255,255,0.4)"
          borderRadius={15}
          position="absolute"
          top={-10}
          bottom={-10}
          right={-10}
          style={{
            opacity: anim.opacity,
            left: anim.left
          }}
        >
          <InputBase sx={{padding: 2}} placeholder='Search here...'/>
        </Box>
        <Box flexGrow={1}>

        </Box>
        <Fab
          onClick={() => setCheck(!check)}
          size='small'
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            justifySelf: "right"
          }}
        >
          <Search />
        </Fab>
      </Box>
    </>
  )
}

export default SearchTab;