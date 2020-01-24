import React from 'react'

// Import components of Navigation by React Extensions
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// Menu to Select Page
import Menu from '../components/Menu'

// Navigation Page, Import all Pages
import Courses from '../pages/Courses'
import Educators from '../pages/Educators'


//Functional component, using Arrow Functions with ECMAScript 6 Notation
const App = () =>   <div>
                        <BrowserRouter> 
                            <Menu/>
                            <Switch>
                                <Route exact path='/courses' component={Courses} />
                                <Route exact path='/educators' component={Educators} />
                                <Route component={Courses}/>
                            </Switch>
                        </BrowserRouter>
                    </div>
export default App