import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '@/pages/home'

export default function Router () {
    return (
      <div>
        <BrowserRouter>
            <Route path="/" component={Home}/>
        </BrowserRouter>
      </div>
    )
}
