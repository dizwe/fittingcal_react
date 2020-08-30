import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';
import { Checkbox, Form, Button } from 'semantic-ui-react'

class ClothesForm extends React.Component {
    render() {
      return (
        <div>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        </div>
      );
    }
  }

export default ClothesForm;