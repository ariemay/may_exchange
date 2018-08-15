import React, { Component } from 'react';
// import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/Input';
// import Button from './components/Button.js';
// import logo from './logo.svg';
import Header from './components/Header.js';
import Main from './components/Main.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{ flex: 1 }}>
        <Header judul={'May Exchange'}/>
        <div style={styles.viewMainItems}>
          <Main />
        </div>
      </div>
    );
  };
}

const styles = {
  viewMainItems: {
    margin: 20
  }
}

export default App;
