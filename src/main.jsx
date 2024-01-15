import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux'
import store from './store/store.js'

//Routes
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Details, Explore, Home, PageNotFound, SearchResult } from './pages/index.js'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
    </Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)
