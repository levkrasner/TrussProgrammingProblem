import React from 'react'
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import { createLease, lease, setDateTime, setName, setAddress, setPhoneNumber } from '../Lease';
import { TenantForm } from './TenantForm';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  // the dispatcher of a single lease store
  return {
    handleDateChange: (dateTime) =>dispatch(setDateTime(dateTime)),
    handleNameChange: (event) => dispatch(setName(event.target.value)),
    handleAddressChange: (event) => dispatch(setAddress(event.target.value)),
    handlePhoneNumberChange: (event) => dispatch(setPhoneNumber(event.target.value)),
  };
}

export const LeaseForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(TenantForm);

export class LeaseFormConnector extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    // create initial leaseStore
    this.state = { leaseStore: createStore(lease) };
  }
  
  handleSave(event) {
    event.preventDefault();
    // dispatch this lease in to the leasesStore (the list of leases)
    this.props.dispatch(createLease(this.state.leaseStore.getState()));
    // save a new store
    this.setState({ leaseStore: createStore(lease) });
  }
  
  render() {
    return (
      <Provider store={this.state.leaseStore}>
        <LeaseForm handleSave={this.handleSave} />
      </Provider>
    )
  }
}
