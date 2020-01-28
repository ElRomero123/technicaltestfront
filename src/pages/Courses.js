import React from 'react'

// Import component Course List, this component represent the list of courses, obtained using Backend Request
import CourseList from '../components/CourseList'

// Style of Page Courses, it control <main id='courses'> tag content presentation
import  '../css/courses.css'

// Link of deployed backend, it created in second-part of Condor Labs Technical Test
const Link = 'https://tmbackendnode.herokuapp.com/api/course'

// Class Component
class Courses extends React.Component
{
    constructor(props)
    {
        // Global state of Courses Page 
        super(props)
        this.state = 
        {
            link: Link + '//0',
            data: [],
            page: 0,
            name: ''
        }
    }

    async componentDidMount()
    {
        // Initial Request to obtain first 24 Courses Cards
        await this.fetchExercises()
        
        // Event to Detect Scrolling to Bottom, and make new request to obtain other 24 Courses Cards
        window.addEventListener('scroll', this.handleScroll)
    }

    fetchExercises = async() => 
    {
        /*
        If Page is more than 0, it means user Scrolled Bottom, here concat old 24 Courses array with new 24 Courses Array
        In other case, it make new request and put new 24 Courses Cards into screen, this can be use in 2 cases:

        - Search using Name criteria  
        - Initial Request. Name is " " 
        */

        let result, data
        if(this.state.page === 0)
        {
            result   = await fetch(this.state.link)
            this.setState({data:await result.json()})
        }
        else
        {
            result   = await fetch(this.state.link)
            data     = await result.json()
            this.setState({data:this.state.data.concat(data)})
        }
    }

    // This event detect with User Scrolled Bottom, and call handleSubmit
    handleScroll = () =>
    {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;

        if(scrolled >= scrollable - 1)
        {
            this.handleSubmit()
        }
    }

    // Handle Submit make new request to obtain other 24 results. Note this method, increases Page each new request
    handleSubmit = e => 
    {
        this.setState({page: this.state.page+1}, () =>  
        {
            this.setState({link: Link + '/' + this.state.name + '/' + this.state.page}, () => 
                {
                    this.componentDidMount(); this.render(); 
                }
            )
        })
    }

    // Input Search make new request to obtain new 24 results, using name criteria. Note, this method reload page with 0
    inputSearch = e =>
    {
        this.setState({name:e.target.value, page: 0}, () => 
            {
                this.setState({link: Link + '/' + this.state.name + '/' + this.state.page}, () => 
                {
                    this.componentDidMount(); this.render(); 
                }
                )
            } 
        )
    }

    render()
    {
        return(
            <main id='courses'>
                <div id='searchField'>
                    <div id='imgSearch'/>
                    <input id='criteria' type='name' onChange={this.inputSearch} placeholder='Search all courses'/>
                    <p id='line'>____________________________________________________________________________________________________________________________________________</p>
                </div>
                
                <CourseList List={this.state.data} />
            </main>)
    }
}

export default Courses