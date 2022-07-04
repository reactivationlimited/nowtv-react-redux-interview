import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const messaegs = useSelector(state => state.messages);
  return (<main>
    <h1>Welcome to the NOW TV test!</h1>
  </main>)
};

export default App;
