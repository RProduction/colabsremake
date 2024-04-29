import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Search from '@mui/icons-material/Search';
import Collapse from '@mui/material/Collapse';
import InputBase from '@mui/material/InputBase';

interface Props {
  extends?: boolean;
}

function SearchTab(props: Props) {
  const [check, setCheck] = useState(false);

  return (
    <>
      <Box display="flex" flexGrow={1} position='relative'>
        <Collapse
          in={check}
          orientation='vertical'
          mountOnEnter
        >
          <Box
            display="flex"
            alignItems="center"
            flexGrow={1}
            bgcolor="rgba(255,255,255,0.4)"
            borderRadius={15}
            position="absolute"
            top={-10}
            bottom={-10}
            left={0}
            right={-10}
          >
            <InputBase sx={{padding: 2}} placeholder='Search here...'/>
          </Box>
        </Collapse>
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