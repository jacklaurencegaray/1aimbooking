import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { createGlobalStyle } from 'styled-components'

import Rooms from './pages/Rooms'

import RootStore from './stores/RootStore'

import 'antd/dist/antd.css';
import globalStyle from './assets/style/globalStyle'

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`

class App extends Component {
  render() {  
    return (
      <>
        <GlobalStyle />
        <Provider store={RootStore}>
          <Router>
            <Switch>
              <Route exact path='/' render={props => <Redirect to='/rooms'></Redirect>} />
              <Route path='/rooms' component={Rooms} />
            </Switch>
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
