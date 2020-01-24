import React from 'react'

// Import function <Link>. Purpose is no-reload App when user changes page.
import { Link } from 'react-router-dom'

// Styles of Menu what control <div id='buttons'> tag content presentation
import '../css/menu.css'

const Menu = () =>  <div id='buttons'>
                        <Link to='/courses'>
                            <button id='btnCourses'>COURSES</button>
                        </Link> 
                        <Link to='/educators'>
                            <button>EDUCATORS</button>
                        </Link> 
                    </div>
export default Menu