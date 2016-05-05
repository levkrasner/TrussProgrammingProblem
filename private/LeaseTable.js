import React from 'react';
import { connect } from 'react-redux';

import { Well, } from 'react-bootstrap';
import { Table, Tr } from 'Reactable';

class LeaseTableUnconnected extends React.Component {
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
    data: state.map(function(leaseObj) {
      return {
        'Name': leaseObj.name,
        Address: leaseObj.address,
        'Phone Number': leaseObj.phoneNumber,
        'Move In Date': leaseObj.dateTime
      };
    }),
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

// Connected Component:
export const LeaseTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaseTableUnconnected);
