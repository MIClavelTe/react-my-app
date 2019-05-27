import React from 'react';

class InputForm extends React.Component {
    state = {
        value1: "",
        value2: ""
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
    };

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="value1"
                    value={this.state.value1} 
                    onChange={this.handleChange}
                />
                <input 
                    type="text"
                    name="value2" 
                    value={this.state.value2} 
                    onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>
        );
    };
};

export default InputForm;