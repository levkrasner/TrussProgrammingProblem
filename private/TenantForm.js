import React from 'react';
import { Grid, Row, Col, Button, Well, } from 'react-bootstrap';

import { TenantTextField } from './TenantTextField';
import { MoveInDateField } from './MoveInDateField';

export const TenantForm = React.createClass({
  getInitialState() {
    return {
      value: '',
      dateTime: "2016-06-05",
      name: null,
      address: null,
      phoneNumber: null,
    };
  },

  handleDateChange(dateTime) {
    return this.setState({ dateTime });
  },

  render() {
    const { dateTime, format, inputFormat, viewMode } = this.state; 
    const { name, address, phoneNumber, } = this.state;
    return (
      <Well>
      <Grid fluid componentClass='form'>
        <TenantTextField 
          onChange={(e) => this.setState({ name: e.target.value })}
          labelText={'Tenant Name'}
          value={name}
          controlId={'name'}
        />

        <TenantTextField 
          onChange={(e) => this.setState({ address: e.target.value })}
          labelText={'Tenant Address'}
          value={address}
          controlId={'address'}
        />

        <TenantTextField 
          onChange={(e) => this.setState({ phoneNumber: e.target.value })}
          labelText={'Tenant Phone Number'}
          value={phoneNumber}
          controlId={'phoneNumber'}
        />

        <MoveInDateField dateTime={dateTime} onChange={this.handleDateChange} />

        <Row> <Button type="submit"> Save </Button> </Row>

      </Grid>
      </Well>
    );
  }
});
