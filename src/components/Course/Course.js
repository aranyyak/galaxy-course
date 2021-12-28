import React from 'react';
import './Course.css';
import { Button } from 'react-bootstrap';

const Course = (props) => {
    const {course, price} = props.course;
    const handleAddCourse = props.handleAddCourse;
    return (
        <div id="course" className="course">
            <h3>{course}</h3>
            <h6>US${price}</h6>
            <Button variant="secondary" onClick={() => handleAddCourse(props.course)}>Buy Now</Button>
        </div>
    );
};

export default Course;