import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ImageInputComponent = (props) => {

    const [check, setCheck] = useState(false)

    const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
        setCheck(true)
        props.imageLink(URL.createObjectURL(event.target.files[0]))
        }
    }
    const onInputChange=(event)=>{

        props.input(event.target.value)
    }
    
  return (
    <div>
        <input type='text' onChange={onInputChange}></input>

  <div>
    {!check&&<input type="file" onChange={onImageChange} className="filetype" />}
    
    {check&&"You have selected the image!"}
    {check&&<Link to={props.next}><button>Next</button></Link>}
  </div>

    </div>
  )
}

export default ImageInputComponent