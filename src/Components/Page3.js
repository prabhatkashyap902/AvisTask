import React, { useContext } from 'react'
import { useLocation } from "react-router-dom";
import ContextData from '../ContextData';

const Page3 = (props) => {
	const {data}=useContext(ContextData)
	return (
		<div>
			<h1>Hi {data.input1}</h1>
			<img alt="img1" src={data.url1} style={{width:"200px"}}/>
			
			<h1>Hi {data.input2}</h1>
			<img alt="img2" src={data.url2}  style={{width:"200px"}}/>
		</div>
	)
}

export default Page3