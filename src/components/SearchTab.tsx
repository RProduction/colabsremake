import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Search from '@mui/icons-material/Search';

interface Props {
  extends?: boolean;
}

function SearchTab(props: Props) {
  return (
    <>
      <Box display="flex" flexGrow={1}>
        <Box flexGrow={1}>

        </Box>
        <Fab
          size='small'
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)"
          }}
        >
          <Search />
        </Fab>
      </Box>
    </>
  )
}

export default SearchTab;