import React from 'react';
import { connect, } from 'react-redux';
import { Grid, Row, Col, Button, Well, Collapse, } from 'react-bootstrap';

import { setName, setAddress, setPhoneNumber, setDateTime, blankTenant, } from '../models/Tenant';
import { addTenant, } from '../models/TenantList';

import { TenantTextField, } from './TenantTextField';
import { MoveInDateField, } from './MoveInDateField';


class unconnectedTenantForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.newTenant = this.newTenant.bind(this);
    this.saveTenant = this.saveTenant.bind(this);

    this.state = { open: false, };
  }

  newTenant() {
    this.setState({ open: true, });
    this.props.blankTenant();
  }

  saveTenant() {
    this.setState({ open: false, });
    this.props.saveTenantToTable(this.props.tenant);
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.open) {
      this.saveTenant();
    } else {
      this.newTenant();
    }
  }

  render() {
    const { name, address, phoneNumber, dateTime, } = this.props.tenant;
    const { handleNameChange, handleAddressChange, handlePhoneNumberChange, handleDateChange, } = this.props;
    const { open, } = this.state;

    return (
      <Well>
        <Grid fluid componentClass="form">
          <Collapse in={open}>
            <div>
              <TenantTextField
                onChange={handleNameChange}
                labelText={"Tenant Name"}
                value={name}
                controlId={"name"}
              />

              <TenantTextField
                onChange={handleAddressChange}
                labelText={'Tenant Address'}
                value={address}
                controlId={'address'}
              />

              <TenantTextField
                onChange={handlePhoneNumberChange}
                labelText={'Tenant Phone Number'}
                value={phoneNumber}
                controlId={'phoneNumber'}
              />

              <MoveInDateField dateTime={dateTime} onChange={handleDateChange} />
            </div>
          </Collapse>

          <Row className="save_btn">
            <Col xs={12}><Button onClick={this.handleClick}>{open ? 'Save' : 'New'}</Button></Col>
          </Row>

        </Grid>
      </Well>
    );
  }
}


function mapStateToProps(state) {
  return { tenant: state.tenant, };
}
function mapDispatchToProps(dispatch) {
  // the dispatcher of a single tenant store
  return {
    handleDateChange: (dateTime) => dispatch(setDateTime(dateTime)),
    handleNameChange: (event) => dispatch(setName(event.target.value)),
    handleAddressChange: (event) => dispatch(setAddress(event.target.value)),
    handlePhoneNumberChange: (event) => dispatch(setPhoneNumber(event.target.value)),
    saveTenantToTable: (tenant) => dispatch(addTenant(tenant)),
    blankTenant: () => dispatch(blankTenant()),
  };
}

export const TenantForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(unconnectedTenantForm);

