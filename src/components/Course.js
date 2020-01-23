import React from 'react'
import '../css/course.css'


class Course extends React.Component
{
    render()
    {
        const {Id, ImageUrl, Name, ImageText, MaximumCredits, Price, Rating } = this.props
        return (
            <div className='course'>
                <p>{Id}</p>
                <p>{ImageUrl}</p>
                <p>{Name}</p>
                <p>{ImageText}</p>
                <p>{MaximumCredits}</p>
                <p>{Price}</p>
                <p>{Rating}</p>
            </div>
        )
    }
}

export default Course