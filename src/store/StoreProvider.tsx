'use client'
import React from 'react'
import {Provider} from 'react-redux'
import {store} from '@/store/store'

export const StoreProvider = ({children}: {children: React.ReactNode}) => (
    <Provider store={store}>{children}</Provider>
)