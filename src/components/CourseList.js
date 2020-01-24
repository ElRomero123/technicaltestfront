import React from 'react'
import Course from '../components/Course'
const CourseList = (props) =>

        <div>
            {props.List.map((course) => {
                return(
                    <Course 
                        key={course.Id}
                        Id={course.Id}
                        ImageUrl={course.ImageUrl}
                        Name={course.Name}
                        ImageText={course.ImageText}
                        MaximumCredits={course.MaximumCredits}
                        Price={course.Price}
                        Rating={course.Rating}
                    />
                )
            })}
        </div>

export default CourseList