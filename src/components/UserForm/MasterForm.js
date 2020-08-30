import BodyForm from './BodyForm';
import ClothesForm from '../UserForm/ClothesForm';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';
import { Checkbox, Form, Button } from 'semantic-ui-react'

class MasterForm extends React.Component {
    render() {
      return (
        // state로 받아야 함
        <Form>
            <BodyForm/>
            <ClothesForm/>
            <Button type='submit'>Submit</Button>
        </Form>
      );
    }
  }

export default MasterForm;
