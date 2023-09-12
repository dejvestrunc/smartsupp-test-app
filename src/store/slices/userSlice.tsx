import {createSlice, createAsyncThunk, ActionReducerMapBuilder} from '@reduxjs/toolkit'
import {User} from '@/model/user'
import {apiClient} from '@/api/client'

// TODO: delete, instead of this use createApi
interface UsersState {
    users: User[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null,
}

const initialState: UsersState = {
    users: [],
    status: 'idle',
    error: null,
}

const fetchUsers = createAsyncThunk<User[]>(
    'users/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            return await apiClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
        } catch (e) {
            rejectWithValue(e)
        }
    }
)

const handlePending = (state: UsersState): void => {
    state.status = 'loading'
}

const handleFulfilled = (state: UsersState, action): void => {
    state.status = 'succeeded'
    state.users = action.payload
}

const handleRejected = (state: UsersState, action): void => {
    state.status = 'failed'
    state.error = action.error.message
}

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<UsersState>) => {
        builder.addCase(fetchUsers.pending, handlePending);
        builder.addCase(fetchUsers.fulfilled, handleFulfilled);
        builder.addCase(fetchUsers.rejected, handleRejected);
    },
})

export {
    fetchUsers,
}

export default usersSlice