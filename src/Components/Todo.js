import React, { Component } from 'react'


export default class Todo extends Component {
    constructor()
    {
        super(); //defines this keyword for us

        this.state={
            tasks: [{task: 'Get Grocery', id:1}, {task: 'Do Homework', id:2}, {task:'Gym', id:3}],
            currTask: ''
        }

    }

    handleChange=(e)=>
    {
        console.log(e.target.value);
        this.setState({
            currTask:e.target.value
        })
    }

    handleAdd=()=>
    {
        this.setState({
            tasks: [...this.state.tasks,{task:this.state.currTask, id:this.state.tasks.length}],
            currTask:''
        })
    }
    handleDelete=(id)=>
    {
       let narr=this.state.tasks.filter((taskObj)=> {return taskObj.id!=id});
       
       this.setState({
           tasks:[...narr]
       });
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.currTask} onChange={this.handleChange}></input>
                <button onClick={this.handleAdd}>Add</button>
                <ul>
                    {
                    this.state.tasks.map((obj)=>
                    (
                            <li key={obj.id}>
                                <p>{obj.task}</p>
                                <button onClick={()=>this.handleDelete(obj.id)}>Delete</button>
                            </li>

                    ))
                 } 
                </ul>
            </div>
        )
    }
}

