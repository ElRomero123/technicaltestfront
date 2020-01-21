import React from 'react'
import Course from '../components/Course'
function CourseList(props)
{
    return(
        <div>
            {props.List.map((course) => {
                return(
                    <Course 
                        id={course.id}
                        image={course.image}
                        imageUrl={course.imageUrl}
                        maximumCredits={course.maximumCredits}
                        price={course.price}
                    />
                )
            })}
        </div>
    )
}

export default CourseList