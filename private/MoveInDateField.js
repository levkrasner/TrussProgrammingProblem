import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';
import { FormGroup, ControlLabel, Row, Col, } from 'react-bootstrap';


export function MoveInDateField(props) {

  const { dateTime, onChange, } = props;

  const format = "YYYY-MM-DD";
  const inputFormat = "DD/MM/YYYY";
  const viewMode = "date";
  
  return (
    <Row>
      <FormGroup controlId="moveInDate">
        <Col xs={12} sm={2} componentClass='ControlLabel'>Move in Date</Col>
        <Col xs={12} sm={10}>
          <DateTimeField
            dateTime={dateTime}
            onChange={onChange}
            format={format}
            inputFormat={inputFormat}
            viewMode={viewMode}
          />
        </Col>
      </FormGroup>
    </Row>
  );
}
