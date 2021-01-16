
import './App.css';

//imported useState hook
import React,  { useState } from 'react'

//imported form.js
import Form from './Form'


const initialFormValues = {
  ///Text Inputs///
  username: '',
  email: '',
  ///Dropdown Menu///
  role: ''
}



function App() {
//State for team members to be stored
  const [members, setMembers] = useState([]);

  // console.log(members)

//State for Form values

  const [formValues, setFormMembers] = useState(initialFormValues)


  



  return (
    <div className="container">
      <h1>Form App</h1>
      <h3>Current Team</h3>
      <Form
        values={formValues}
        update
        submit

      />
    </div>
  );
}

export default App;
