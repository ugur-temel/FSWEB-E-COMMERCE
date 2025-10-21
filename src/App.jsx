import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageContent from './layouts/pageContent'
import HomePage from './pages/homePage.jsx'
import ShopPage from './pages/shopPage.jsx'

function App() {
  
  return (
    <Router>
      <PageContent>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
      </Switch>
      </ PageContent>
    </Router>
  )
}

export default App
