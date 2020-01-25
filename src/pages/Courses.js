import React from 'react'

// Import component Course List, this component represent the list of courses, obtained using Backend Request
import CourseList from '../components/CourseList'

// Style of Page Courses, it control <main id='courses'> tag content presentation
import  '../css/courses.css'

// Link of deployed backend, it created in second-part of Condor Labs Technical Test
const Link = 'https://test.mytablemesa.com/api/courses?orderBy=popularity+desc&expand=provider&limit=24&profession=&subjectAreaCode=&state=&provider=&name='
const Domain = 'https://test.mytablemesa.com'

// Class Component
class Courses extends React.Component
{
    constructor(props)
    {
        // Global state of Courses Page 
        super(props)
        this.state = 
        {
            link: Link,
            data: [],
            next: null
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
        let result = await fetch(this.state.link), Data = await result.json()
        if(this.state.next === null){this.setState({data:Data.items})}
        else{this.setState({data:this.state.data.concat(Data.items)})}
        this.setState({next:Data.next})
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
        this.setState({link: Domain + this.state.next}, () =>  
        {
            //console.log(this.state.link)
            this.fetchExercises(); this.render(); 
        })
    }

    // Input Search make new request to obtain new 24 results, using name criteria. Note, this method reload page with 0
    inputSearch = e =>
    {
        this.setState({next: null, link: Link + e.target.value}, () => 
            {
                this.fetchExercises(); this.render(); 
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