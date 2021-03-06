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