import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async ({ email, password }: { email: string; password: string }) => {
//     const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
//       email,
//       password,
//     })
//     const token = 'fake-token'
//     localStorage.setItem('token', token)
//     return { email, token }
//   }
// )

// export const registerUser = createAsyncThunk(
//   'auth/registerUser',
//   async ({ email, password, username }: { email: string; password: string; username: string }) => {
//     const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
//       email,
//       password,
//       username,
//     })
//     await axios.post('https://jsonplaceholder.typicode.com/confirm', {
//       email,
//     })
//     return response.data
//   }
// )

export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get('https://studapi.teachmeskills.by/auth/users/me/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return response.data
    } catch (err) {
      return rejectWithValue('Failed to fetch user profile')
    }
  }
)

export {}
