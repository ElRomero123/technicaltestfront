import React from 'react'
import '../css/navbar.css'
const Navbar = () => 
<header>
    <div id='Filters'>
        <p>Show me courses for</p>
        <select className='s'>
            <option value="volvo">All professions</option>
        </select>
        <p>In</p>
        <select className='s'>
            <option value="volvo">All States</option>
        </select>
        <p>classified as</p>
        <select className='s'>
            <option value="volvo">+</option>
        </select>
        <p>sorted by</p>
        <select className='s'>
            <option value="volvo">Popularity</option>
        </select>
    </div>
</header>
export default Navbar