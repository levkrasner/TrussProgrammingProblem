import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { TenantForm } from './form/TenantForm';
import { TenantTable } from './TenantTable';
import { tenantList } from './models/TenantList';
import { tenant } from './models/Tenant';

import { prePopulate } from './sampleData';

const appReducer = combineReducers({
  tenant,
  tenantList
});

const appStore = createStore(appReducer);

prePopulate(appStore.dispatch);


ReactDOM.render(
  <div style={{ padding: '10px' }}>

    <h2>A Tenant Tracking Form!</h2>
    <Provider store={appStore}>
      <TenantForm />
    </Provider>

    <h2>A Table of Tenants!</h2>
    <Provider store={appStore}>
      <TenantTable />
    </Provider>

  </div>,
  document.getElementById('react-root')
);
