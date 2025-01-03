import React, { useState, useContext } from 'react';
import { Appcontext } from '../Context/Appcontext.js';
import axios from 'axios';
import { toast } from 'react-toastify';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(true); // Toggle between login and signup
  const { backendurl, setToken} = useContext(Appcontext);

  const handleAuth = async () => {
    try {
      // console.log(name, email, password);
      // console.log(backendurl);

      const endpoint = isSignup ? '/api/user/signup' : '/api/user/login';
      const payload = isSignup ? { name, email, password } : { email, password };
       if(isSignup){
        console.log(backendurl);
        
        // Sign UP
        const { data } = await axios.post(`${backendurl}${endpoint}`, payload);
        // console.log(data);
        if (data.success) {
          toast.success(`SignUp Successfully`);
          setToken(data.token);
          localStorage.setItem('token', data.token);
          
        } else {
          toast.error(data.message);
          console.log(data.message);
        }

       }else{
        // Login
        console.log(email,password);
        
        const { data } = await axios.post(`${backendurl}${endpoint}`, payload);
         
         
        if (data.success) {
          toast.success(`Login Successfully`);
          setToken(data.token);
          localStorage.setItem('token', data.token);
          
        } else {
          toast.error(data.message);
          console.log(data.message);
        }

       }

    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="card p-4 shadow" style={{ width: '300px' }}>
        <h3 className="text-center mb-4">{isSignup ? 'Sign Up' : 'Log In'}</h3>
        <form>
          {isSignup && (
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={handleAuth}
          >
            {isSignup ? 'Sign Up' : 'Log In'}
          </button>
        </form>
        <div className="text-center mt-3">
          <span>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              className="btn btn-link p-0"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? 'Log In' : 'Sign Up'}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
