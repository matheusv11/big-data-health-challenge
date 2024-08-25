'use client';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Badge,
  Box,
  Divider,
  IconButton,
  Popover,
  Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useGetCart } from '@/hooks/useCart';
import Image from 'next/image';

export default function Cart() {
  const { data } = useGetCart();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const totalValue = useMemo(
    () => data?.reduce((prev, current) => prev + Number(current.price), 0),
    [data]
  );

  return (
    <>
      <IconButton
        color="inherit"
        aria-describedby={id}
        // variant="contained"
        sx={{ mr: 2 }}
        onClick={handleClick}
      >
        <Badge badgeContent={data?.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
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
          {data?.map(e => (
            <Box sx={{ mb: 2, display: 'flex', gap: 2 }} key={e.id}>
              <Image
                src={e.image}
                alt="product picture"
                width="42"
                height="42"
              />
              <Typography
                variant="subtitle1"
                sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '100px',
                }}
              >
                {e.title}
              </Typography>
              <IconButton color="error">
                <CloseIcon />
              </IconButton>
            </Box>
          ))}

          <Divider />
          <Typography mt={1}>Total: {totalValue}</Typography>
        </Typography>
      </Popover>
    </>
  );
}
