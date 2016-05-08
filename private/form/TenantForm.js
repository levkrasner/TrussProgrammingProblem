import React from 'react';
import { Grid, Row, Col, Button, Well, Collapse } from 'react-bootstrap';

import { TenantTextField } from './TenantTextField';
import { MoveInDateField } from './MoveInDateField';

export const TenantForm = React.createClass({
  getInitialState() {
    return { open: false };
  },

  render() {
    const { dateTime, name, address, phoneNumber, } = this.props;
    const { handleDateChange, handleNameChange, handleAddressChange, handlePhoneNumberChange, } = this.props;
    const { open } = this.state;

    return (
      <Well>
        <Grid fluid componentClass='form'>
          <Collapse in={this.state.open}>
            <div>
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
            </div>
          </Collapse>


          <Row className="save_btn">
            <Col xs={12} sm={2}><Button onClick={this.props.handleSave}> Save </Button></Col>
            <Col xs={12} sm={2}><Button onClick={() => this.setState({ open: !open })}> Show </Button></Col>
          </Row>

        </Grid>
      </Well>
    );
  }
});
