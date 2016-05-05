import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Grid, Row, Col } from 'react-bootstrap';


export function TenantTextField(props) {
  // TODO: add validationSate
  // validationState <- prop of FormGroup
  //
  // TODO: add these
  /* <FormControl.Feedback /> */
  /* <HelpBlock>Validation is based on string length.</HelpBlock> */


  const { placeholder, onChange, labelText, value, controlId, } = props;
  
  return (
    <Row>
      <FormGroup controlId={controlId}>
        <Col xs={12} sm={2} componentClass='ControlLabel'>{labelText}</Col>
        <Col xs={12} sm={10}><FormControl type="text" value={value} onChange={onChange} /></Col>
      </FormGroup>
    </Row>
  );
}
