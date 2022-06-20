import React from 'react' 
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {FcCheckmark} from "react-icons/fc";
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
function Productup() {
     const {register , handleSubmit , formState:{ error } }=useForm();
    
     const onFormSubmit=(userdata)=>{
       //HTTP POST REQUEST
       axios.post('http://localhost:4000/product/updateproduct',userdata)
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
          <p className='display-4 text-danger text-center'>ENTER CROP UPDATION DETAILS</p>
          <div className='col-9 col-sm-8 col-md-6 mx-auto mt-2'>
              <p className='text-warning'>The Product Id should Be Checked Twice Before Updating</p>
            <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className='mb-3'>
                 <label htmlFor='ID'>Crop ID</label>
                 <input type='text' id="ID" className='form-control' autoComplete='off' {...register("ID")} required/> 
              </div>
              <div className='mb-3'>
                 <label htmlFor='un'>Crop Name</label>
                 <input type='text' id="un" className='form-control' autoComplete='off' {...register("Name")} required/> 
              </div>
              <div className='mb-3'>
                <label htmlFor="soil">Soil Type</label>
                <input type="text" id='soil' className="form-control" minLength='2'  autoComplete='off' required {...register("Soil")}/>
              </div>
              <div className='mb-3'>
                <label htmlFor="Ph">Ph In Soil</label>
                <input type="text" id="ph"  className="form-control" {...register("Ph")} required/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='water'>Water Required</label>
                 <input type='text' id="water" required className='form-control' autoComplete='off' {...register("Water")}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='season'>Season </label>
                 <input type='text' id="season" required className='form-control' autoComplete='off' {...register("Season")}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='disease'>Common Disease</label>
                 <input type='text' id="disease" required className='form-control' autoComplete='off' {...register("disease")}/>
              </div>
              <button type="submit" className='btn btn-success w-50'>Submit<FcCheckmark/></button> <Button onClick={routeChange} variant="secondary" size="sm" className='float-right'>    Admin Login</Button>
            </form>
          </div>  
        </div>
    )
}

export default Productup;