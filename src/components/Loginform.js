import React, { useState } from 'react'

const Loginform = () => {
    const [formData,setFormData] = useState({
        email:"",password:""
    })

    const [showPass,setShowPass]= useState(false);

    function changehandler(event){
        setFormData((prev)=>(
           {
            ...prev,
            [event.target.name]:event.target.value
           }
        ))
    }
    
  return (

    

    <form>
        <label>
            Username
            <input
            required
            type="text"
            name="email"
            placeholder="Enter email address"
            onChange={changehandler}
            value={formData.email}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

            ></input>
        </label>
        <br></br>
        <br></br>
        <label>
            Password
            <input
            required
            type={showPass?("password"):("text")}
            name="email"
            placeholder="Enter email address"
            onChange={changehandler}
            value={formData.email}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

            ></input>
        </label>
    </form>
  )
}

export default Loginform