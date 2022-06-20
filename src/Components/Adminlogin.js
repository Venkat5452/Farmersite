import React from 'react' 
import { useForm } from 'react-hook-form';
import {FcCheckmark} from "react-icons/fc";
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import {Button} from 'react-bootstrap';
function Adminlogin() {
     const {register , handleSubmit , formState:{ error } }=useForm();
    
     const onFormSubmit=(usercred)=>{
       //HTTP POST REQUEST
       axios.post('http://localhost:4000/admin/login',usercred)
       .then(Response=>{
         console.log(Response);
         alert(Response.data.message);
         if(Response.data.message == "LOG IN SUCCESS" ){
           navigate('/Products')
         }
       })
       .catch(error=>{
        console.log(error);
        alert("Something Went wrong")});
     }
     let navigate = useNavigate(); 
       const routeChange = () =>{ 
        let path = '/NewAdmin'; 
       navigate(path);
  }

     return (
        <div className='row mt-3'>
          <p className='display-4 text-danger text-center'>ADMIN LOGIN</p>
          <div className='col-9 col-sm-8 col-md-6 mx-auto mt-2'>
            <img src='https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg?t=st=1653919115~exp=1653919715~hmac=b862b32ec70166cb1338a0d20717c0efce523da5077d769a32c8d5cd61f393ca&w=740'width="100%" height="350" className='rounded-3 responsive' alt=''/>
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <div className='mb-3'>
                 <label htmlFor='un'>UserName</label>
                 <input type='text' id="un" className='form-control'  {...register("userName")} required/>   
              </div>
              <div className='mb-3'>
                <label htmlFor="pp">Password</label>
                <input type="text" id='pp' className="form-control"  minLength='6' required {...register("password")}/>
              </div>
              <button type="submit" className='btn btn-success w-50'>Submit<FcCheckmark/></button> <Button onClick={routeChange} variant="secondary" size="sm">    Admin Register</Button>
            </form>
          </div>  
        </div>
    )
}

export default Adminlogin;