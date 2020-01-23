import React from 'react'
import { Link } from 'react-router-dom'
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