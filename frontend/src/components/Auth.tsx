import { ChangeEvent, useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import { SignupInput } from "@hemanthgowda/medium-common";
import axios from "axios"
import { Backend_Url } from "../Url";

export const Auth = ({type}:{type: "signup" | "signin"}) =>{
  const navigate = useNavigate();
  {/* <SignupInput> imported from common folder */}
  const [postInputs, setpostInputs] = useState<SignupInput>({
    name: "",
    email:"",
    password: ""
  })

{/* use 'Content-Type': 'application/json' so that it Specifies that the request body is JSON, so the server can parse it correctly. */}
  const SendRequest = async () => {
    try {
      const response = await axios.post(`${Backend_Url}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs, {
        headers: {
          
          'Content-Type': 'application/json',
        },
      });
  
      const jwt = response.data.token;
      const name = response.data.name;
  
      if (jwt) {
        localStorage.setItem("token", jwt);
        localStorage.setItem("name", name);
        navigate(`/blogs`);  // Ensure `navigate` is correctly defined, probably from `useNavigate` hook
      } else {
        throw new Error("Token not received");
      }
    } catch (e) {
      console.error("Error while signing up:", e);
      alert("Error while signing up!");
    }
  };

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
            <div className="px-10">
              <div className="text-3xl font-bold">
                  Create an account
              </div>

              <div className="font-semibold text-slate-500 pt-1 pl-1">
                {type === "signin" ? "Don't have an account?" : "Already have an account?"} 
                {/* <Link> is from react-router-dom */} 
                <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>{type === "signin" ? "Sign Up" : "Sign In"}</Link>
              </div>
            </div>

            <div className="pt-5">
              {type === "signup" ? <LabelledInput label="Name" placeholder="Enter your name" onChange={(e)=>{
                setpostInputs({
                  ...postInputs,
                  name:e.target.value
                })
              }}></LabelledInput>: null}

              <LabelledInput label="Username" placeholder="abc@gmail.com" onChange={(e)=>{
                setpostInputs({
                  ...postInputs,
                  email:e.target.value
                })
              }}></LabelledInput>

              {/* here type={"password"} makes to display * or . when u enter the password in the input box */}
              <LabelledInput label="Password" type={"password"} placeholder="abc12#" onChange={(e)=>{
                setpostInputs({
                  ...postInputs,
                  password:e.target.value
                })
              }}></LabelledInput>

            <button  onClick={SendRequest} type="button" className="mt-5 w-full text-white bg-black hover:bg-black-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">{type === "signup"? "Sign Up" : "Sign In"}</button>
            </div>
         </div>
      </div>
  </div>
  )
}

interface LabelledINputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>)=> void;
  type?: string;
}

function LabelledInput({label, placeholder, onChange, type}: LabelledINputType){
  return (
  <div>
    <div>
            <label className="block mb-2 text-sm font-bold text-black pt-4">{label}</label>
            {/* using type={password} here */}
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-slate-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
  </div>
  )
}