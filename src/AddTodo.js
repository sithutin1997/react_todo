import React ,{ Component} from 'react';

class AddTodo extends Component{
    state = {
        detail : "",
    }
    handleChange = (e) =>{
        this.setState({
            detail : e.target.value
        })
       
    }
    testFunction =() => {
        console.log("This is test for git")
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            detail : ""
        })
    }
    render(){
        return(
            <div>
                <p>THis si commaind test</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Content
                    </label>
                    <input type="text" onChange={this.handleChange} value={this.state.detail}/>
                </form>
            </div>
        )
    }
}
export default AddTodo;