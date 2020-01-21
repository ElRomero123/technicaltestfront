import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Navbar from './components/Navbar'

const container = document.getElementById('root')
ReactDOM.render(<div>
                    <Navbar />
                    <App />
                </div>
                , container);