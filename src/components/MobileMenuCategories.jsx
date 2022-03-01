import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../styles/MobileMenu.scss';
import AppContext from "../context/AppContext";

const MobileMenuCategories = () => {

    const {selectCategory} = useContext(AppContext);

    return(
        <ul className="MobileMenu_categories">

                            <li className="categories_li">
                                <Link to="/" onClick={()=>selectCategory(0)}>All</Link>
                            </li>
                                
                            <li className="categories_li">
                                <Link to="/" onClick={()=>selectCategory('Clothes')}>Clothes</Link>
                            </li>
                            
                            <li className="categories_li">
                                <Link to="/" onClick={()=>selectCategory('Electronics')}>Electronics</Link>
                            </li>
                                
                            <li className="categories_li">
                                <Link to="/" onClick={()=>selectCategory('Furniture')}>Furnitures</Link>
                            </li>

                            <li className="categories_li">
                                <Link to="/" onClick={()=>selectCategory('Toys')}>Toys</Link>
                            </li>

                            <li>
                                <Link to="/" onClick={()=>selectCategory('Others')}>Others</Link>
                            </li>
                        </ul>
    );
};

export default MobileMenuCategories;