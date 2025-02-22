import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

// STARTER CODE FOR THE SIGNUP COMPONENT
const SignUp = () => {
	const[inputs,setinputs]=useState({
		fullName:"",
		username:"",
        password:"",
		confirmPassword:"",
		gender:""
	})
  const {signup,loading}=useSignup()
	const handleCheckboxChange = (gender) => {
		setinputs({ ...inputs, gender });
	};
	const handleSubmit=async(e)=>{
        e.preventDefault()
		await signup(inputs)
		console.log(inputs)
	}
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-xl md:text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit} >
					<div className="md:w-full w-[200px] m-auto">
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input type='text' placeholder='John Doe' className='md:w-full input input-bordered  h-10 ' 
						value={inputs.fullName}
						onChange={(e)=>setinputs({...inputs,fullName:e.target.value})}
						/>
					</div>

					<div className="md:w-full w-[200px] m-auto"> 
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' placeholder='johndoe' className='md:w-full input input-bordered h-10' 
						value={inputs.username}
						onChange={(e)=>setinputs({...inputs,username:e.target.value})}
						/>
					</div>

					<div className="md:w-full w-[200px] m-auto">
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='md:w-full input input-bordered h-10'
							value={inputs.password}
							onChange={(e)=>setinputs({...inputs,password:e.target.value})}
						/>
					</div>

					<div className="md:w-full w-[200px] m-auto">
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='md:w-full input input-bordered h-10'
							value={inputs.confirmPassword}
							onChange={(e)=>setinputs({...inputs,confirmPassword:e.target.value})}
						/>
					</div>
                
					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
                  
					<Link to="/login" 
					className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block ml-20 ' href='#'>
						Already have an account?
					</Link>

					<div className="md:w-full w-[100px] m-auto">
					   <button className='btn btn-block btn-sm mt-2 border border-slate-700 ' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> :<span >Sign Up</span> }
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;