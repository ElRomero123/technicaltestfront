import React from 'react'
import Course from '../components/Course'
function CourseList(props)
{
    return(
        <div>
            {props.List.map((course) => {
                return(
                    <Course 
                        key={course.id}
                        id={course.id}
                        name={course.name}
                        imageText={course.imageText}
                        maximumCredits={course.maximumCredits}
                        price={course.price}
                        rating={course.rating}
                    />
                )
            })}
        </div>
    )
}

export default CourseList