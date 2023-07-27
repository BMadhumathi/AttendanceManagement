// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// export default function Form() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch,
//   } = useForm();

//   const onSubmit = async (data) => {
//     if (data.password !== data.confirmPassword) {
//       window.alert('Password and confirm password do not match');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8181/api/v1/auth/register', {
//         username: data.username,
//         email: data.email,
//         password: data.password,
//         mobile: data.mobile,
//       });

//       // Registration successful, do something if needed
//       console.log(response);
//     } catch (error) {
//       // Handle registration errors
//       console.log(error.response.data); // Log the error response from the server
//     }
//   };

//   return (
//     <section>
//       <div className="register">
//         <div className="col-1">
//           <h2 style={{ fontSize: '1.5cm', paddingLeft: '70px', color: 'darkblue' }}>Welcome!</h2>
//           <span>Register</span>

//           <form id="form" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
//             <input
//               type="text"
//               {...register('username', { required: true, maxLength: 10 })}
//               placeholder="Username"
//               style={{ width: '120%', height: '50%' }}
//             />
//             {errors.username?.type === 'required' && 'Username is required'}

//             <input
//               type="email"
//               {...register('email', { required: true })}
//               placeholder="Email"
//               style={{ width: '120%', height: '50%' }}
//             />
//             {errors.email?.type === 'required' && 'Email is required'}

//             <input
//               type="password"
//               {...register('password', { required: true, minLength: 10 })}
//               placeholder="Password"
//               style={{ width: '120%', height: '50%' }}
//             />
//             {errors.password?.type === 'required' && 'Password is required'}
//             {errors.password?.type === 'minLength' && 'Password must be at least 10 characters'}

//             <input
//               type="password"
//               {...register('confirmPassword')}
//               placeholder="Confirm Password"
//               style={{ width: '120%', height: '50%' }}
//             />
//             <input
//               type="role"
//               {...register('role')}
//               placeholder="role"
//               style={{ width: '120%', height: '50%' }}
//             />

//             <input
//               type="text"
//               {...register('mobile', { required: true, maxLength: 10 })}
//               placeholder="Mobile Number"
//               style={{ width: '120%', height: '50%' }}
//             />
//             {errors.mobile?.type === 'required' && 'Mobile Number is required'}
//             {errors.mobile?.type === 'maxLength' && 'Max Length Exceeded'}

//             <button className="btn" style={{ width: '90%' }} type="submit">
//               Sign Up
//             </button>
//             <Link to="/login" style={{ color: 'white', fontSize: '0.5cm', paddingLeft: '30px' }}>
//               Already have an account?
//             </Link>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setErrorMessage('Password and confirm password do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        name: data.username,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,

        mobile: data.mobile,
        role: data.role, // Add role to the request data
      });

      if (response?.data) {
        console.log(response.data); // Assuming the server returns data in the response
        alert("success signup");
      } else {
        console.log('Registration failed. No response data.');
        alert("no signup");
      }
      
      // After successful registration, you might want to redirect the user to a new page
      // For example, you can redirect to a "Thank You" page:
      // history.push('/thankyou');
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error.response.data); // Log the error response from the server
      } else {
        console.log('Registration failed. An error occurred.',error);
        alert("catch signup");
      }
    }
  };

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2 style={{ fontSize: '1.5cm', paddingLeft: '70px', color: 'darkblue' }}>Welcome!</h2>
          <span>Register</span>

          <form id="form" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register('username', { required: true, maxLength: 10 })}
              placeholder="Username"
              style={{ width: '120%', height: '50%' }}
            />
            {errors.username?.type === 'required' && 'Username is required'}

            <input
              type="email"
              {...register('email', { required: true })}
              placeholder="Email"
              style={{ width: '120%', height: '50%' }}
            />
            {errors.email?.type === 'required' && 'Email is required'}

            <input
              type="password"
              {...register('password', { required: true, minLength: 10 })}
              placeholder="Password"
              style={{ width: '120%', height: '50%' }}
            />
            {errors.password?.type === 'required' && 'Password is required'}
            {errors.password?.type === 'minLength' && 'Password must be at least 10 characters'}

            <input
              type="password"
              {...register('confirmPassword')}
              placeholder="Confirm Password"
              style={{ width: '120%', height: '50%' }}
            />

            {/* Dropdown/select field for role */}
            <select {...register('role')} style={{ width: '120%', height: '50%' }}>
              <option value="STUDENT">Student</option>
              <option value="TEACHER">Teacher</option>
              <option value="ADMIN">Admin</option>
            </select>

            {/* Mobile number field */}
            <input
              type="text"
              {...register('mobile', { required: true, maxLength: 10 })}
              placeholder="Mobile Number"
              style={{ width: '120%', height: '50%' }}
            />
            {errors.mobile?.type === 'required' && 'Mobile Number is required'}
            {errors.mobile?.type === 'maxLength' && 'Max Length Exceeded'}

            {/* Error message for password confirmation mismatch */}
            {errorMessage && <p>{errorMessage}</p>}

            <button className="btn" style={{ width: '90%' }} type="submit">
              Sign Up
            </button>
            <Link to="/login" style={{ color: 'white', fontSize: '0.5cm', paddingLeft: '30px' }}>
              Already have an account?
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}
