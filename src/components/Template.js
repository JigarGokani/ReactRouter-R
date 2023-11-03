import React from 'react'
import frameImage from "../assets/frame.png"
import Loginform from './Loginform'
import Signupform from './Signupform'
import {FcGoogle} from "react-icons/fc"


const Template = ({title,desc1,desc2,image,formtype,}) => {
  return (
    <div className='flex justify-center items-center text-white text-3xl h-full'>
    
        <div>
            <h1>{title}</h1>
            <p>{desc1}</p>
            <p>{desc2}</p>
            
            {
                formtype === 'signup'?
                (<Signupform/>):
                (<Loginform/>)

            }
        
            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700 '></div>
                <p className='text-richblack-700 font-medium leading-[1.375rem]'>
                    OR
                </p>
                <div className='w-full h-[1px] bg-richblack-700 '></div>
            </div>
            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p>Sign Up with Google</p>

            </button>
        </div>
    <div className='relative w-11/12 max-w-[450px]'>
            <img src={frameImage}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"/>
            
            <img src={image}
                alt="students"
                width={558}
                height={490}
                loading="lazy"
                className='absolute -top-4 right-4'
                />

        </div>
    </div>
  )
}

export default Template