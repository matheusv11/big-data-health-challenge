'use server';

import { ProductI } from '@/types/product';
import { UserI } from '@/types/user';

export async function getUsers() {
  try {
    const users: UserI[] = await fetch('https://fakestoreapi.com/users').then(
      res => res.json()
    );

    return users;
  } catch (error) {
    console.error(error);
    // return { error }
  }
}

export async function showUser(userId: number) {
  try {
    const user: UserI = await fetch(
      `https://fakestoreapi.com/users/${userId}`
    ).then(res => res.json());

    return user;
  } catch (error) {
    console.error(error);
    // return { error };
  }
}

export async function loginUser({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    const token = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => res.token);

    return { username, token };
  } catch (error) {
    console.error(error);
    // return { error }
  }
}

export async function getProducts() {
  try {
    const products: ProductI[] = await fetch(
      'https://fakestoreapi.com/products'
    ).then(res => res.json());

    return products;
  } catch (error) {
    console.error(error);
    // return { error }
  }
}

export async function showProduct(productId: number) {
  try {
    const product: ProductI = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    ).then(res => res.json());

    return product;
  } catch (error) {
    console.error(error);
    // return { error };
  }
}
export async function addToCart() {
  try {
    const token = await fetch('https://fakestoreapi.com/auth/login', {
      // Get the productData
      // Change to cart request
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'username',
        password: 'password',
      }),
    })
      .then(res => res.json())
      .then(res => res.token);
    // productId
    return token;
    // return { username, token };
  } catch (error) {
    console.error(error);
    // return { error }
  }
}

export async function showCart() {
  try {
    const user: UserI = await fetch(`https://fakestoreapi.com/carts/5}`).then(
      res => res.json()
    );

    console.log('CART', user);

    return user;
  } catch (error) {
    console.error(error);
    // return { error };
  }
}
