import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MobileMenu.scss';
import MobileMenuCategories from './MobileMenuCategories';



const MobileMenu = () =>{

    const [toggleCategories, setCategories] = useState(false);

    const handleToggleCategories = () => {
        setCategories(!toggleCategories);
    }


    return(
        <div className="MobileMenu">

            <ul className="MobileMenu_ul">

                <li className="MobileMenu_li">
                    <Link to="/orders">My Orders</Link>
                </li>

                <li className="MobileMenu_li">
                    <Link to="account">My Account</Link>
                </li>

                <li className="MobileMenu_li">
                    <Link to="" onClick={handleToggleCategories}>
                        Categories                        
                    </Link>
                    {toggleCategories && <MobileMenuCategories/>}
                </li>

                <li className="MobileMenu_li">
                    <Link to="/login">Sign out</Link>
                </li>
            </ul>
           
        </div>
       
    );
};

export default MobileMenu;