import React from 'react'
import CourseList from '../components/CourseList'

class Courses extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            data:[]
        }
    }

    async componentDidMount()
    {
        await this.fetchExercises()
    }

    fetchExercises = async() => {
        let res = await fetch('https://test.mytablemesa.com/api/courses?orderBy=popularity+desc&expand=provider&limit=24&profession=&subjectAreaCode=&state=&provider=&name=')
        let string = await res.json()
        const data = string.items
        //https://test.mytablemesa.com/api/courses?orderBy=popularity+desc&expand=provider&limit=24&profession=&subjectAreaCode=&state=&provider=&name=
        //https://jsonplaceholder.typicode.com/todos
        console.log(data)

        this.setState({data})
        //console.log(this.state.data)
    }
    
    render()
    {
        return(
            <CourseList List={this.state.data} />
            
            )
    }
}

export default Courses