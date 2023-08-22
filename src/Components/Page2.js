import React, { useContext, useState } from 'react'
import ImageInputComponent from './ImageInputComponent'
import ContextData from '../ContextData';

const Page2 = () => {
	const {data,setData}=useContext(ContextData)

  const handleImageUpload = (imageFile) => {
	setData({...data,url2:imageFile})
  };
  const handleInput = (input) => {
	setData({...data,input2:input})
  };
	
  return (
	<div>
		<ImageInputComponent imageLink={handleImageUpload} input={handleInput} next={"/result"}/>
	</div>
  
  )
}

export default Page2