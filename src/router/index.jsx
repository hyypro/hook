import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '@/pages/home'

export default function Router () {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
}
