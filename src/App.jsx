import React from 'react';
import './index.css';
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
