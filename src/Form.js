//imported react
import React from 'react'

export default function Form (props) {
    //Props
    const { values, update, submit } = props


    //change function
    const onChange = e =>{

        const name = e.target.name;
        const value = e.target.value;

        //update form
        update(name, value)

    }

    const onSubmit = e => {

        console.log('Hello on Submit')
        e.preventDefault();
        
        //submitForm function from App
        submit();
    }



return (
    <form className='form-container' onSubmit={onSubmit}>
        <div>
            
            <label>Username 
                <input
                    name='username'
                    type='text'
                    placeholder='enter username'
                    maxLength='30'
                    value={values.username}
                    onChange={onChange}/>
            </label>
            <br/>
            <label>Email 
                <input
                    name='email'
                    type='text'
                    placeholder='enter email'
                    maxLength='30'
                    value={values.email}
                    onChange={onChange}/>
            </label>
            <br/>
            <label>Role 
                <select value={values.role} name='role' onChange={onChange}>
                    <option value=''>---Select a Role---</option>
                    <option value='Backend Engineer'>Backend Engineer</option>
                    <option value='Frontend Engineer'>Frontend Engineer</option>
                    <option value='Designer'>Designer</option>
                </select>
            </label>


        <div>
            <button disabled={!values.username || !values.email || !values.role}>submit</button>
        </div>
        </div>
    </form>

)

}