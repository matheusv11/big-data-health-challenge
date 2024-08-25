'use client';

import { useGetCart, useAddToCart } from '@/hooks/useCart';
import { Button } from '@mui/material';
import { useCallback, useState } from 'react';

export default function AddToCartBtn({ productId }: { productId: number }) {
  const { data: cartData } = useGetCart();
  const { addToCart, isLoading: loadingCart } = useAddToCart();
  const [productBeingAdded, setProductBeingAdded] = useState<number>();

  const hasAdded = useCallback(
    (id: number) => !!cartData?.find(c => c.id === id),
    [cartData]
  );

  const productIsBeingAdded = useCallback(
    (id: number) => productBeingAdded === id && loadingCart,
    [loadingCart, productBeingAdded]
  );

  const handleCart =
    (id: number) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      setProductBeingAdded(id);
      addToCart(id);
    };

  return (
    <>
      {hasAdded(productId) ? (
        <Button data-testid="added-cart-btn" variant="contained" disabled>
          Adicionado
        </Button>
      ) : (
        <Button
          data-testid="add-cart-btn"
          variant="contained"
          disabled={productIsBeingAdded(productId)}
          onClick={handleCart(productId)}
        >
          Adicionar ao carrinho
        </Button>
      )}
    </>
  );
}
