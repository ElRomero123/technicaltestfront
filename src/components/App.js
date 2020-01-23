import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Courses from '../pages/Courses'
import Educators from '../pages/Educators'
import Menu from '../components/Menu'

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