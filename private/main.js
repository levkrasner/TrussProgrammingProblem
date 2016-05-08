import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { LeaseFormConnector } from './form/LeaseForm';
import { LeaseTable } from './table/LeaseTable';

import { createLease, leases } from './Lease';

const leaseStore = createStore(leases);

// prepopulate the table
const sampleData = [
  { name: 'Griffin Smith', address: 'Somewhere', phoneNumber: '555-463-3511', dateTime: '2016-06-06', },
  { name: 'Joe Smith', address: 'Somewhere else', phoneNumber: '555-468-1111', dateTime: '2016-07-01', },
  { name: 'Amy Smith', address: 'No where', phoneNumber: '555-418-3213', dateTime: '2016-07-18', },
];
sampleData.forEach(
  (datum) => leaseStore.dispatch(createLease(datum))
);


ReactDOM.render(
  <div style={{ padding: '10px' }}>
    <h2>A Lease Tracking Form!</h2>

    <LeaseFormConnector dispatch={leaseStore.dispatch} />

    <h2>A Table of Leases!</h2>
    <Provider store={leaseStore}>
      <LeaseTable />
    </Provider>
  </div>,
  document.getElementById('react-root')
);
