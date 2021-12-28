import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Shop.css';
import Data from '../../data/data.json'

const Shop = () => {
    const [courses, setCourses] = useState(Data);
    const [cart, setCart] = useState([]);
    const handleAddCourse = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div>
            <div id="shop-container">
                <div id="course-container">
                    {
                        courses.map(course => <Course handleAddCourse={handleAddCourse} course={course}></Course>)
                    }
                </div>
                <div id="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;