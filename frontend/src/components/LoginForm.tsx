import React, { FormEvent, useState   , useEffect} from "react";
import axios from 'axios'   
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  const {dispatch , state } = authContext
  const submitHandler = async (e :FormEvent) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const config = {
        headers: { "Content-type": "application/json" },
      };

     
      const {data} = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );
     
      dispatch({type : "LOGIN" , payload : data})
     
  console.log('context data ' , state ) // this will show old state data even when new state is updated because usestate / use reducer take some time to update state .
    } catch (error) {
      
      console.log(error)
    }
  };
  useEffect(() => {
    if (state.user) {
      console.log("Updated context state:", state);
    }
  }, [state]);
  

  return (
    <form onSubmit={submitHandler} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md" 
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md" 
          required
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
