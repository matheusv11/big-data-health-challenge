'use client';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Divider, IconButton, Popover, Typography } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function Cart() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <IconButton
        color="inherit"
        aria-describedby={id}
        // variant="contained"
        onClick={handleClick}
      >
        <ShoppingCartIcon />
      </IconButton>

      <Popover
        disableScrollLock
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>
          {[1, 2, 3].map(e => (
            <Box sx={{ display: 'flex', gap: 2 }} key={e}>
              <h2>OI</h2>
              <IconButton color="error">
                <CloseIcon />
              </IconButton>
            </Box>
          ))}

          <Divider />
          <Typography mt={1}>Total: 55</Typography>
        </Typography>
      </Popover>
    </>
  );
}
