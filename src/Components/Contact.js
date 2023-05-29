import React from "react";
import {useState} from 'react';
import axios from 'axios'

    const Form=()=>{
    const [responseBody, setResponseBody] = useState({});
    const [show, setShow] = useState(false);

    const hide=()=>{
        setShow(false);
    }
    const showModal=()=>{
        setShow(true);
    }
    const MyModal=(props)=>{
        return (
        <div>
            <div className='wrap'></div>
            <div className='model-cont'>
                {`Name: `}{props.name}<br />
                {`Email: `}{props.email}<br /> 
                <h1>Successfully Registerd</h1>
                 
                <button onClick={hide} id='btn'>close</button>
                
            </div>
        </div>
        )
    }
    
    const inputHandle = (event)=>{
        const {name, value} = event.target
        setResponseBody({...responseBody, [name]: value})
    }
    const submitHandle = (event) => {
        event.preventDefault()
        console.log(responseBody)
        // setResponseBody(responseBody)
    }

    const post=()=>{
        // let data={fname,age,email}
        return axios.post('https://jsonplaceholder.typicode.com/users/',(response))
            .then(res=>setData(res.data))            
            .catch(err=>console.log(err))
    };
    useEffect(()=>{
        post();
    },[])

    return (
        
            <form onSubmit={submitHandle}>
                <div className='form'>
                    <div className='modal'>

                        <input type='text' name='Fname' placeholder='Name' onChange={inputHandle} />

                        <input type='text' name='email' placeholder='Email' onChange={inputHandle} />

                        <input type='text' name='address' placeholder='Address' onChange={inputHandle} /><br />

                        <button onClick={showModal } id='button'>Submit</button>
                        {show && <MyModal name={responseBody.Fname} email={responseBody.email} />}

                    </div>
                </div>
            </form>
       
    )
    
}

export default Form;
