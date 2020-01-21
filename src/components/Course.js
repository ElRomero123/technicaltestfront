import React from 'react'

class Course extends React.Component
{
    render()
    {
        const {id, image, imageUrl, maximumCredits, price} = this.props
        return (
            <div>
                <p>{id}</p>
                <p>{image}</p>
                <p>{imageUrl}</p>
                <p>{maximumCredits}</p>
                <p>{price}</p>

            </div>
        )
    }
}

export default Course