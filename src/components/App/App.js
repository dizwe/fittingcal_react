import React from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css' 
import './App.css';
import { Grid} from 'semantic-ui-react'
import AnalResult from '../AnalResult/AnalResult';
import MasterForm from '../UserForm/MasterForm';

function App() {
  return (
    <div className="App">
      <Grid columns={2}>
          <Grid.Column>
            <MasterForm/>
          </Grid.Column>
          <Grid.Column>
            <AnalResult/>
          </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
