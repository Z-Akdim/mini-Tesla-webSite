import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './index.css'
import { Provider } from 'react-redux';
import { store } from './featuers/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </Provider>
  );
  }

export default App;
