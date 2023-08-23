import React, { useContext, useEffect, useState } from 'react'
import ImageInputComponent from './ImageInputComponent'
import ContextData from '../ContextData';

const Page1 = () => {
	const {data,setData}=useContext(ContextData)

  const handleImageUpload = (imageFile) => {
	setData({...data,url1:imageFile})
  };
  const handleInput = (input) => {	
	setData({...data,input1:input})
  console.log(data)
  };
  useEffect(()=>{},[data])
	
  return (
	<div>
		<ImageInputComponent imageLink={handleImageUpload} input={handleInput} next={"/page2"}/>
	</div>
  )
}

export default Page1