import { AppBar } from "../components/AppBar"
import axios from "axios"
import { Backend_Url } from "../Url"
import {ChangeEvent, useState } from 'react'
import { useNavigate } from "react-router-dom"

export const Publish = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate();

  return <div>  
    <AppBar></AppBar>
   <div className="flex justify-center">

    <div className="max-w-screen-lg w-full pt-8">
      {/* <label classNameName="block mb-2 text-sm font-medium text-gray ">Your email</label> */}
      <input onChange={(e)=>{
        setTitle(e.target.value)
      }}  type="text" className="text-5xl bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title" />

      <TextEditor onChange={(e)=>{
        setDescription(e.target.value)
      }}></TextEditor>

      <button onClick={async ()=>{
        const response = await axios.post(`${Backend_Url}/api/v1/blog`, {
          title,
          content: description
        },{
          headers:{
            Authorization: localStorage.getItem("token")
          }
        })
        navigate(`/blog/${response.data.id}`)

      }} type="button" className="mr-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Publish Post</button>
    </div>
  </div>
  </div>
}

function TextEditor({onChange}:{onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}){
  return  <div className="mt-2">
    <div className="w-full mb-4">
      <div className="flex items-center justify-between border">
        <div className="my-2 bg-white rounded-b-lg w-full">
          
          <textarea onChange={onChange}  id="editor" rows={8} className="text-xl focus:outline:none block w-full px-0 text-gray-800 bg-white  pl-2" placeholder="Tell your story..."></textarea>

        </div>
      </div>
    </div>
  </div>
}