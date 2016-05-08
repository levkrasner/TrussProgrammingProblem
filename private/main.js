import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import { Provider } from 'react-redux';

import { TenantForm } from './form/TenantForm';
import { TenantTable } from './table/TenantTable';
import { tenants, addTenant } from './models/Tenants';
import { tenant } from './models/Tenant';

import { prePopulate } from './sampleData';

const tenantsStore = createStore(tenants);
const tenantStore = createStore(tenant);

const saveTenantToTable = bindActionCreators(addTenant, tenantsStore.dispatch);

prePopulate(tenantsStore.dispatch);


ReactDOM.render(
  <div style={{ padding: '10px' }}>

    <h2>A Tenant Tracking Form!</h2>
    <Provider store={tenantStore}>
      <TenantForm saveTenantToTable={saveTenantToTable} />
    </Provider>

    <h2>A Table of Tenants!</h2>
    <Provider store={tenantsStore}>
      <TenantTable />
    </Provider>

  </div>,
  document.getElementById('react-root')
);
