//imported useState hook
import React,  { useState } from 'react'

//imported form.js
import Form from './Form'

//imported members.js
import Members from './Members'


//inital form
const initialFormValues = {
  ///Text Inputs///
  username: '',
  email: '',
  ///Dropdown Menu///
  role: ''
}

//team members before entries
const initialMembers = [
  {
    id: 1,
    username: 'Durrell',
    email: 'asldkfjdsl@fmail.com',
    role: 'Junior Developer',
  },
  {
    id: 2,
    username: 'John',
    email: 'shenlapeksm@fmail.com',
    role: 'Junior Developer',
  },
  
]


function App() {
//State for team members to be stored
  const [members, setMembers] = useState(initialMembers);

  
  console.log(members)

//State for Form values

  const [formValues, setFormValues] = useState(initialFormValues)


//Function for updating the form
  const updateForm = (inputName, inputValue) =>{

    //updating the form values
    console.log(inputName, inputValue)
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    //creates new object that will be pushed into the initialForm Values

    const newMember = {

      username:formValues.username.trim(),
      email:formValues.email.trim(),
      role:formValues.role,
    }

    // console.log(newMember)

    if (!newMember.username || !newMember.email || !newMember.role) return;

   
      //Sets the initial members and the new members to the page
      //*Make sure this is the new object */
      setMembers([...members, newMember]);

      //Resets the form values to blank for another entry
      setFormValues(initialFormValues);
      
      console.log(initialMembers)
      
    
     
  }

  

  
  



  return (
    <div className="container">
      <h1>The Dream Team</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}

      />
      <h3>Current Team</h3>
      {
        members.map( member  => 
           
            <Members key={member.id} details={member} />

          
        )
      }
    </div>
  )
}

export default App;
