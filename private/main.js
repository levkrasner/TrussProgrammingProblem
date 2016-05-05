import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// import { App } from './App';
// import { counter } from './counter';
import { TenantForm } from './TenantForm';

/*
// Store:
let store = createStore(counter);

    <Provider store={store}>
      <App />
    </Provider>
*/

ReactDOM.render(
  <div>
    <h2>A tenant Form!</h2>
    <TenantForm />
  </div>,
  document.getElementById('react-root')
);
