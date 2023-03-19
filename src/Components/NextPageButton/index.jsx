import React, {useState, useEffect} from 'react'
import "./NextPageButton.css"
import arrow from "../../Assets/Arrow.png";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Links } from "../Navigation/Links";

export const NextPageButton = () => {
    
    const [show, setShow] = useState(false)

    const linkData = Links;


    
    useEffect(() => {
        setTimeout(() => setShow(true), 3000);
      }, []);  

	
    return (
        <div className="button__container">
                {show && <button className='btn btn-primary next-page-button'><i class="uil uil-arrow-right" /></button>}
        </div>
        )
    }

