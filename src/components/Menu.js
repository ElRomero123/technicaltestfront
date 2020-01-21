import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () =>  <div>
                        <Link to='/courses'>
                            <button>Courses</button>
                        </Link> 
                        <Link to='/educators'>
                            <button>Educators</button>
                        </Link> 
                    </div>

export default Menu