import React from 'react';
import { connect, } from 'react-redux';

// import { Well, Table, } from 'react-bootstrap';
import { Well, } from 'react-bootstrap';
import { Table, } from 'Reactable';

// class TenantTableUnconnected extends React.Component {

function TenantTableUnconnected(props) {
  // TODO:
  // Rewrite with react-bootstrap's table
  // Then handle doubleclick by removing the clicked record and passing the tenant to editTenant

  return (
    <Well>
      <Table className="table" data={props.data} sortable={['Name', 'Address', 'Phone Number', 'Move In Date', ]} >

      </Table>
    </Well>
  );
}

function mapStateToProps(state) {
  return {
    data: state.tenantList.map((tenantObj) => ({
      'Name': tenantObj.name,
      'Address': tenantObj.address,
      'Phone Number': tenantObj.phoneNumber,
      'Move In Date': tenantObj.dateTime,
    })),
  };
}

// function mapDispatchToProps(dispatch) { return {}; }

// Connected Component:
export const TenantTable = connect(
  mapStateToProps,
  null
)(TenantTableUnconnected);
