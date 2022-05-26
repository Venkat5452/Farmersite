import React from 'react' 
import { useForm } from 'react-hook-form';

function Login() {
     const {register , handleSubmit , formState:{ errors } }=useForm();
    
     const onFormSubmit=(userdata)=>{
       console.log(userdata);
     }


     return (
        <div className='row mt-3'>
          <p className='display-4 text-danger text-center'>REGISTER HERE</p>
          <div className='col-11 col-sm-8 col-md-6 mx-auto mt-2'>
            <p>The following are some of the Benifits you can get with the regsitration.. <br></br> 1.you can can direct assistance by refering the crop <br></br> 2.We will refer you ,if you are facing any bank loan isuues </p>
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <div className='mb-3'>
                 <label htmlFor='un'>Name</label>
                 <input type='text' id="un" className='form-control' autoComplete='off' {...register("name")} required/>
              </div>
              <div className='mb-3'>
                <label htmlFor="aadhar">Aadhar Number</label>
                <input type="text" className="form-control" maxLength='12' minLength='12'  autoComplete='off' required {...register("aadhar")}/>
              </div>
              <div className='mb-3'>
                <label htmlFor="Phno">Phone Number</label>
                <input type="tel" id="phno" maxLength='10' minLength='10' className="form-control" {...register("Phno")} required/>
              </div>
              <div className="mb-3">
                <label htmlFor="state">State</label>
                 <select id="state" className="form-select" required {...register("state")}>
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
                 <input type='text' id="add" className='form-control' autoComplete='off' required {...register("add")}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='pin'>PinCode</label>
                 <input type='text' id="pin" required className='form-control' minLength={"6"} maxLength={"6"} autoComplete='off' {...register("PINCODE")}/>
              </div>
              <div className='mb-3'>
                <label htmlFor="Reason">Reason for Contact</label>
                <textarea id="reason" row="5" className='form-control' {...register("reason")}></textarea>
              </div>
              <button type="submit" className='btn btn-success w-50'>Submit</button>
            </form>
          </div>  
        </div>
    )
}

export default Login