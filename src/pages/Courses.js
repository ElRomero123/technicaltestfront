import React from 'react'
import CourseList from '../components/CourseList'
import  '../css/courses.css'

class Courses extends React.Component
{
   
    constructor(props)
    {
        super(props)
        this.state = 
        {
            link: 'https://test.mytablemesa.com/api/courses?orderBy=popularity+desc&expand=provider&limit=24&profession=&subjectAreaCode=&state=&provider=&name=',
            data:[]
        }
    }

    async componentDidMount()
    {
        await this.fetchExercises()
    }

    fetchExercises = async() => 
    {
        let res = await fetch(this.state.link)
        let string = await res.json()
        const data = string.items
        this.setState({data})
        if(string.next == null){this.state.link = 'END'}
        else{this.state.link = 'https://test.mytablemesa.com' + string.next}
    }

    handleSubmit = e => 
    {
        if(this.state.link === 'END'){alert('Fín de los Cursos')}
        else
        {
            this.componentDidMount()
            this.render()
        }
    }

    inputChange = e =>
    {
        let cr = document.getElementById('criteria')
        this.state.link = 'https://test.mytablemesa.com/api/courses?orderBy=popularity+desc&expand=provider&limit=24&profession=&subjectAreaCode=&state=&provider=&name=' + cr.value
        this.componentDidMount()
        this.render()
    }
    
    render()
    {
        return(
            <main id='courses'>
                <input id='criteria' type='name'></input>
                <button onClick={this.inputChange}>Buscar</button>
                <CourseList List={this.state.data} />
                <button onClick={this.handleSubmit}>Siguiente</button>
            </main>)
    }
}

export default Courses