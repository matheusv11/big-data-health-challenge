"use server"

import { UserI } from "@/types/user";

export async function getUsers() {
  try {

    const users: UserI[] = await fetch('https://fakestoreapi.com/users')
    .then(res=>res.json())

  return users

  }

  catch(error) {
    console.error(error)
    // return { error }
  }
}

export async function loginUser({ username, password }: { username: string, password: string }) {
  try {

    const token = await fetch('https://fakestoreapi.com/auth/login', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username: username,
          password: password
      })
  })
    .then(res=>res.json())
    .then(res => res.token)

  return {username, token}

  }

  catch(error) {
    console.error(error)
    // return { error }
  }
}