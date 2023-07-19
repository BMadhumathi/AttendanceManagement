import { yellow } from '@mui/material/colors';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      window.alert('Password and confirm password do not match');
      return;
    }
    console.log(data);
  };

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2 style={{fontSize:'1.5cm',paddingLeft:'70px',color:'darkblue'}}>Welcome!</h2>
          <span>register </span>

          <form id="form" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('username', { required: true, maxLength: 10 })} placeholder="username"  style={{ width: '120%',height:'50%' }}/>
            <input type="password" {...register('password', { required: true, minLength: 10 })} placeholder="password" style={{ width: '120%',height:'50%' }}/>
            <input type="password" {...register('confirmPassword')} placeholder="confirm password" style={{ width: '120%' ,height:'50%'}}/>
            <input type="text" {...register('mobile', { required: true, maxLength: 10 })} placeholder="mobile number"style={{ width: '120%',height:'50%' }} />
            {errors.username?.type === 'required' && 'Username is required'}
            {errors.password?.type === 'required' && 'Provide a password'}
            {errors.mobile?.type === 'required' && 'Mobile Number is required'}
            {errors.mobile?.type === 'maxLength' && 'Max Length Exceeded'}

            <button className="btn" style={{width:'90%'}}>Sign Up</button>
            <Link to="/signup" style={{color:'white',fontSize:'0.5cm',paddingLeft:'30px'}}>Already have an account?</Link>
          </form>
        </div>
      </div>
    </section>
  );
}
