import React from 'react' 
import { useForm } from 'react-hook-form';
import {FcCheckmark} from "react-icons/fc";
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import {Button} from 'react-bootstrap';

function NewAdmin() {
    const {register , handleSubmit , formState:{ error } }=useForm();
    
     const onFormSubmit=(userdata)=>{
       //HTTP POST REQUEST
       axios.post('http://localhost:4000/admin/create-admin',userdata)
       .then(Response=>{
         console.log(Response);
         alert(Response.data.message);
       })
       .catch(error=>{
        console.log(error);
        alert("Something Went wrong")});
     }
     let navigate = useNavigate(); 
       const routeChange = () =>{ 
        let path = '/Adminlogin'; 
       navigate(path);
  }

     return (
        <div className='row mt-3 container'>
          <p className='display-4 text-danger text-center'>ADMIN REGISTER</p>
          <div className='col-9 col-sm-8 col-md-6 mx-auto mt-2'>
          <p >After Registration It would Take 24h Generate your Login Credintials..You will receive Confirmation through given mail and Phone Number</p>
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <div className='mb-3'>
                 <label htmlFor='un'>UsernName</label>
                 <input type='text' id="un" className='form-control' autoComplete='off' {...register("userName")} required/>
              </div>
              <div className='mb-3'>
                <label htmlFor="aa">Password</label>
                <input type="text" id="aa" className="form-control"  minLength='6'  autoComplete='off' required {...register("password")}/>
              </div>
              <div className='mb-3'>
                <label htmlFor="Phno">Phone Number</label>
                <input type="tel" id="phno" maxLength='10' minLength='10' className="form-control" {...register("PhoneNumber")} required/>
              </div>
              <div className="mb-3">
              <label htmlFor='un'>Email</label>
                 <input type='text' id="un" className='form-control' autoComplete='off' {...register("Email")} required/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='add'>Address</label>
                 <input type='text' id="add" className='form-control' autoComplete='off' required {...register("Address")}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='pin'>ID Number</label>
                 <input type='text' id="pin" required className='form-control' minLength={"6"} maxLength={"6"} autoComplete='off' {...register("ID")} />
              </div>
              <button type="submit" className='btn btn-success w-50'>Submit<FcCheckmark/></button>  <Button onClick={routeChange} variant="secondary" size="sm">Admin Login</Button>
            </form>
          </div>  
        </div>
     )
}
export default NewAdmin;