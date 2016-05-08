import React from 'react';
import { connect } from 'react-redux';

import { Well, } from 'react-bootstrap';
import { Table, Tr } from 'Reactable';

class TenantTableUnconnected extends React.Component {
  render() {
    return (
      <Well>
        <Table
          className="table"
          data={this.props.data}
          sortable={[ 'Name', 'Address', 'Phone Number', 'Move In Date', ]}
        />
      </Well>
    );
  }
}

function mapStateToProps(state)  {
  return {
    data: state.map(function(tenantObj) {
      return {
        'Name': tenantObj.name,
        Address: tenantObj.address,
        'Phone Number': tenantObj.phoneNumber,
        'Move In Date': tenantObj.dateTime
      };
    }),
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

// Connected Component:
export const TenantTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(TenantTableUnconnected);
