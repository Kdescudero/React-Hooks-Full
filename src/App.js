import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import { AppProvider  } from './components/context'

class App extends React.Component {

  render() {
    return (
      <AppProvider>
        <Header />
        <Home />
      </AppProvider>
    )
  }
}

export default App;
