import logo from './logo.svg';
import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ImageInputComponent from './Components/ImageInputComponent';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import { useState } from 'react';
import ContextData from './ContextData';


const router=createBrowserRouter([{
	path:"/",
	element:<Outlet/>,
	children:[{
		element:<Page1/>,
		path:"/",

	},{
		element:<Page2 />,
		path:"/page2",
	},{
		element:<Page3 />,
		path:"/result",
	}]
}])


function App() {
	const[data,setData]=useState({url1:"",input1:"",url2:"",input2:""})
	
	return (
		<div className="App">

			<ContextData.Provider value={{data,setData}}>
				<RouterProvider router={router}/>
			</ContextData.Provider>
			{/* <ImageInputComponent/>	 */}
		</div>
	);
}

export default App;
