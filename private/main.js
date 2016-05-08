import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { TenantFormConnector } from './form/TenantFormConnector';
import { TenantTable } from './table/TenantTable';
import { tenants } from './models/Tenant';

import { prePopulate } from './sampleData';

const tenantStore = createStore(tenants);

prePopulate(tenantStore.dispatch);

ReactDOM.render(
  <div style={{ padding: '10px' }}>

    <h2>A Tenant Tracking Form!</h2>
    <TenantFormConnector dispatch={tenantStore.dispatch} />

    <h2>A Table of Tenants!</h2>

    <Provider store={tenantStore}>
      <TenantTable />
    </Provider>

  </div>,
  document.getElementById('react-root')
);
