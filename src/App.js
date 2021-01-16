
import './App.css';
//imported useState hook

import React,  { useState } from 'react'


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
  


  



  return (
    <div className="container">
      <h1>Form App</h1>
      <h3>Current Team</h3>

    </div>
  );
}

export default App;
