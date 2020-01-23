import React from 'react'
import CourseList from '../components/CourseList'
import  '../css/courses.css'
const Link = 'https://tmbackend.azurewebsites.net/api/courses/5'

window.addEventListener('scroll', () => {
    
})

class Courses extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            link: Link + '?name=&page=0',
            data: [],
            page: 0,
            name: ''
        }
    }

    async componentDidMount()
    {
        await this.fetchExercises()
        window.addEventListener('scroll', this.handleScroll)
    }

    fetchExercises = async() => 
    {
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


    handleSubmit = e => 
    {
        this.setState({page: this.state.page+1}, () =>  
        {
            this.setState({link: Link + '?name=' + this.state.name + '&page=' + this.state.page}, () => 
                {
                    this.componentDidMount(); this.render(); 
                }
            )
        })
    }

    handleScroll = () =>
    {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;

        if(scrolled > scrollable - 100)
        {
            this.handleSubmit()
        }
    }

    inputSearch = e =>
    {
        this.setState({name:e.target.value, page: 0}, () => 
            {
                this.setState({link: Link + '?name=' + this.state.name + '&page=' + this.state.page}, () => 
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