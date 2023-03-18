import React, {useState, useEffect} from 'react'
import "./NextPageButton.css"
import arrow from "../../Assets/Arrow.png";
import { NavLink, Link, useNavigate } from 'react-router-dom';

export const NextPageButton = () => {
    
    const [show, setShow] = useState(false)
    
    useEffect(() => {
        setTimeout(() => setShow(true), 5000);
      }, []);  

	
    return (
        <>
            {show && <button className='btn btn-primary next-page-button'>Click here</button>} 
        </>
        )
    }

