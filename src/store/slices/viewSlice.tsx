import {createSlice} from '@reduxjs/toolkit'

interface ViewState {
    value: 'table' | 'grid'
}

const initialState: ViewState = {
    value: 'table',
}

const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
        switchToTable: (state: ViewState) => {
            state.value = 'table'
        },
        switchToGrid: (state: ViewState) => {
            state.value = 'grid'
        },
    }
})

export const { switchToTable, switchToGrid } = viewSlice.actions

export default viewSlice.reducer