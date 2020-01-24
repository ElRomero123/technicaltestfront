import React from 'react'

// Styles of Course Card
import '../css/course.css'


class Course extends React.Component
{
    render()
    {
        // Config Presentation Price Tag 
        const {ImageUrl, Name, ImageText, MaximumCredits, Rating } = this.props
        var {Price} = this.props
        if(Price <= 0)
        {
            Price = 'FREE'
        }
        else
        {
            Price = '$' + Price
        }
        
        // Render final Card
        return (
            <div className='course'>
                <div className='courseHeader'>
                    <div className='c1'>
                        <img src={ImageUrl} alt={ImageUrl} />
                        <p className='creditBanner'><b>{MaximumCredits} CREDIT</b></p>
                    </div>
                </div>
                <div className='courseMain'>
                    <div className='c2'>
                        <p className='TagName'><b>{Name}</b></p>
                        <p className='TagImageText'>{ImageText}</p>
                    </div>
                </div>
                <div className='courseFooter'>
                    <div className='c3'>
                        <p className='TagPrice'><b>{Price}</b></p>
                        <div className='TagRating' style={{
                            width:`${(Rating*24)}px` }} > 
                            <div className='StartPattern'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Course