import React, { useState } from 'react';
 
const EmployeeComponent = ()=>
{
    const [firstName, setFirstName] = useState('')
    const [ lastName, setLastName]  = useState('')
    const  [ email,setEmail] = useState('')

    return(
        <div>Employee Component </div>
    );
}
export default EmployeeComponent;