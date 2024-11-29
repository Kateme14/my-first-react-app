import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'



interface AuthState {
  token: string | null
  loading: boolean
  error: string | null
  username: string | null
  profile: any | null
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
  username: null,
  profile: null
}


export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ email, password, username }: { email: string; password: string; username: string }, { rejectWithValue }) => {
    try {
      const storedUsers = JSON.parse(localStorage.getItem('users') || '{}')

      if (storedUsers[email]) {
        return rejectWithValue('User already exists')
      }

      const newUser = { email, password, username }
      localStorage.setItem('users', JSON.stringify({ ...storedUsers, [email]: newUser }))

      const token = 'fake-token'
      return { token, username }
    } catch (err) {
      return rejectWithValue('Failed to register')
    }
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const storedUsers = JSON.parse(localStorage.getItem('users') || '{}')
      const user = storedUsers[credentials.email]

      if (!user) {
        return rejectWithValue('User not found')
      }

      if (user.password !== credentials.password) {
        return rejectWithValue('Incorrect password')
      }

      const token = 'fake-token';
      return { token, username: user.username }
    } catch (err) {
      return rejectWithValue('Invalid credentials')
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ token: string; username: string }>) => {
      state.token = action.payload.token
      state.username = action.payload.username
      state.error = null
    },
    logout: (state) => {
      state.token = null
      state.username = null
      state.profile = null
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload.token
        state.username = action.payload.username
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload.token
        state.username = action.payload.username
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { loginSuccess, logout } = authSlice.actions
export default authSlice.reducer