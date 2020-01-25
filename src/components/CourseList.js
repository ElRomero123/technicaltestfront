import React from 'react'
import Course from '../components/Course'
const Domain = 'https://www.mytablemesa.com'

const CourseList = (props) =>

        <div>
            {props.List.map((course) => {
                return(
                    <Course 
                        key={course.id}
                        Id={course.id}
                        ImageUrl={Domain + course.imageUrl}
                        Name={course.name}
                        ImageText={course.provider.name}
                        MaximumCredits={course.maximumCredits}
                        Price={course.price}
                        Rating={course.rating}
                    />
                )
            })}
        </div>

export default CourseList