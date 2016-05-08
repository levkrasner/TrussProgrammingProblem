import React from 'react';
import { Grid, Row, Col, Button, Well, } from 'react-bootstrap';

import { TenantTextField } from './TenantTextField';
import { MoveInDateField } from './MoveInDateField';

export const TenantForm = React.createClass({
  render() {
    const { dateTime, name, address, phoneNumber, } = this.props;
    const { handleDateChange, handleNameChange, handleAddressChange, handlePhoneNumberChange, } = this.props;

    return (
      <Well>
        <Grid fluid componentClass='form'>
          <TenantTextField 
            onChange={handleNameChange}
            labelText={'Tenant Name'}
            value={name}
            controlId={'name'}
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
          <Row className="save_btn"><Col xs={12}><Button onClick={this.props.handleSave}> Save </Button></Col></Row>

        </Grid>
      </Well>
    );
  }
});
