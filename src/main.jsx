import ReactDOM from 'react-dom/client'
import './index.css'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Route'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import AuthContextProvider from './Context/AuthContextProvider'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
            <RouterProvider router={Route} />
        
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
        </AuthContextProvider>
    </QueryClientProvider>

)
