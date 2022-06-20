import React from 'react' 
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {FcCheckmark} from "react-icons/fc";
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
function Login() {
     const {register , handleSubmit , formState:{ error} }=useForm();
    
     const onFormSubmit=(userdata)=>{
       //HTTP POST REQUEST
       axios.post('http://localhost:4000/user/create-user',userdata)
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
        <div className='row mt-3'>
          <p className='display-4 text-danger text-center'>REGISTER HERE</p>
          <div className='col-11 col-sm-8 col-md-6 mx-auto mt-2'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL5HQOcbyArc72ZUCN53Ete_yPYFHEOICMiA&usqp=CAU' width="100%" height="350" className='rounded-3 responsive' alt=''/>
            <p>The following are some of the Benifits you can get with the regsitration.. <br></br> 1.you can can direct assistance by refering the crop <br></br> 2.We will refer you ,if you are facing any bank loan isuues </p>
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <div className='mb-3'>
                 <label htmlFor='un'>Name</label>
                 <input type='text' id="un" className='form-control' autoComplete='off' {...register("Name")} required/>
              
              </div>
              <div className='mb-3'>
                <label htmlFor="aadhar">Aadhar Number</label>
                <input type="text" className="form-control" maxLength='12' minLength='12'  autoComplete='off' required {...register("Aadhar")}/>
              </div>
              <div className='mb-3'>
                <label htmlFor="Phno">Phone Number</label>
                <input type="tel" id="phno" maxLength='10' minLength='10' className="form-control" {...register("PhoneNumber")} required/>
              </div>
              <div className="mb-3">
                <label htmlFor="state">State</label>
                 <select id="state" className="form-select" required {...register("State")}>
                   <option value="" disabled selected>Select a state</option>
                   <option value="Telangana">Telangana</option>
                   <option value="Andhra pradesh">Andhra pradesh</option>
                   <option value="Kerala">Kerala</option>
                   <option value="chennai">chenna</option>
                 </select>
              </div>
              <div className='mb-3'>
                <label>Choose a contact Method</label>
                <div className="form-check">
                   <input type="radio" id="PC"  className='form-check-input' {...register("CONTACT")} value="PHONE CONTACT"/>
                   <label htmlFor='PC' className='form-check-label'>CALL</label>
                </div>
                <div className="form-check">
                   <input type="radio" id="CON"  className='form-check-input' {...register("CONTACT")} value="PERSONAL CONTACT"/>
                   <label htmlFor='CON' className='form-check-label'>VISIT</label>
                </div>
              </div>
              <div className='mb-3'>
                 <label htmlFor='add'>Address</label>
                 <input type='text' id="add" className='form-control' autoComplete='off' required {...register("Address")}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='pin'>PinCode</label>
                 <input type='text' id="pin" required className='form-control' minLength={"6"} maxLength={"6"} autoComplete='off' {...register("PINCODE")}/>
              </div>
              <div className='mb-3'>
                <label htmlFor="Reason">Reason for Contact</label>
                <textarea id="reason" row="5" className='form-control' {...register("Reason")}></textarea>
              </div>
              <button type="submit" className='btn btn-success w-50'>Submit<FcCheckmark/></button> <Button onClick={routeChange} variant="secondary" size="sm">  Admin Login</Button>
            </form>
          </div>  
        </div>
    )
}

export default Login