import React from 'react';
import ReactDOM from 'react-dom';

import { Well, } from 'react-bootstrap';

import { TenantForm } from './TenantForm';

import { Table, Tr } from 'Reactable';

ReactDOM.render(
  <div style={{ padding: '10px' }}>
    <h2>A Tenant Form!</h2>
    <TenantForm />
    <Well>
      <Table
        className="table"
        data={[
          { Name: 'Griffin Smith', Address: 'Somewhere', 'Phone Number': '555-463-3511', 'Move In Date': '2016-06-06', },
          { Name: 'Joe Smith', Address: 'Somewhere else', 'Phone Number': '555-468-1111', 'Move In Date': '2016-07-01', },
          { Name: 'Amy Smith', Address: 'No where', 'Phone Number': '555-418-3213', 'Move In Date': '2016-07-18', },
        ]}
        sortable={[ 'Name', 'Address', 'Phone Number', 'Move In Date', ]}
      />
    </Well>
  </div>,
  document.getElementById('react-root')
);
