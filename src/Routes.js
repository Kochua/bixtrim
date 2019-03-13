import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {
  HomePage,
  News1,
  News2,
  News3,
  News4,
  News5,
  News6,
  News7,
  News8
} from './pages'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:lang" component={HomePage} />
        <Route exact path="/:lang/news/1" component={News1} />
        <Route exact path="/:lang/news/2" component={News2} />
        <Route exact path="/:lang/news/3" component={News3} />
        <Route exact path="/:lang/news/4" component={News4} />
        <Route exact path="/:lang/news/5" component={News5} />
        <Route exact path="/:lang/news/6" component={News6} />
        <Route exact path="/:lang/news/7" component={News7} />
        <Route exact path="/:lang/news/8" component={News8} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
