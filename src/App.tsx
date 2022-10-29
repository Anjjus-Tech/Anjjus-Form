import React from 'react';
import { Provider } from 'react-redux';
import { Form } from './Pages/Form';
import {store} from './store/store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Form />
      </Provider>
    </div>
  );
}

export default App;
