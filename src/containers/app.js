import React from 'react';
import { useSelector } from 'react-redux';

import { Messages } from '../components/messages'
import { getMessages } from '../selectors'

const App = () => {
  const messages = useSelector(getMessages);

  return (
    <main>
      <h1>Welcome to the NOW TV test!</h1>
      <Messages {...messages} />
    </main>
  )
};

export default App;
