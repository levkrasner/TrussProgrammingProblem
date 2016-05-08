import React from 'react'
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import { createTenant, tenant, setDateTime, setName, setAddress, setPhoneNumber } from '../Tenant';
import { TenantForm } from './TenantForm';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  // the dispatcher of a single tenant store
  return {
    handleDateChange: (dateTime) => dispatch(setDateTime(dateTime)),
    handleNameChange: (event) => dispatch(setName(event.target.value)),
    handleAddressChange: (event) => dispatch(setAddress(event.target.value)),
    handlePhoneNumberChange: (event) => dispatch(setPhoneNumber(event.target.value)),
  };
}

export const ConnectedTenantForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(TenantForm);

export class TenantFormConnector extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    // create initial tenantStore
    this.state = { tenantStore: createStore(tenant) };
  }
  
  handleSave(event) {
    event.preventDefault();
    // dispatch this tenant in to the tenantsStore (the list of tenants)
    this.props.dispatch(createTenant(this.state.tenantStore.getState()));
    // save a new store
    this.setState({ tenantStore: createStore(tenant) });
  }
  
  render() {
    return (
      <Provider store={this.state.tenantStore}>
        <ConnectedTenantForm handleSave={this.handleSave} />
      </Provider>
    )
  }
}
