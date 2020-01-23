import React from 'react'
import CourseList from '../components/CourseList'
import  '../css/courses.css'
const Link = 'https://tmbackend.azurewebsites.net/api/courses/5'

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
    }

    fetchExercises = async() => 
    {
        let result
        result   = await fetch(this.state.link)
        this.setState({data:await result.json()})
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
                <input id='criteria' type='name' onChange={this.inputSearch}></input>
                <CourseList List={this.state.data} />
                <button onClick={this.handleSubmit}>Siguiente</button>
            </main>)
    }
}

export default Courses