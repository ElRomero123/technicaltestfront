import React from 'react'
import '../css/course.css'


class Course extends React.Component
{
    render()
    {
        const {name, imageText, maximumCredits, price, rating} = this.props
        return (
            <div className='course'>
                <div>
                    <p>{name}</p>
                    <p>{imageText}</p>
                </div>
                <p>{price}</p>
                <p>{rating}</p>
                <p>{maximumCredits}</p>
            </div>
        )
    }
}

export default Course