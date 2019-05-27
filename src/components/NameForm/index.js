import React from 'react';

class NameForm extends React.Component {
    state = {
        value: ""
    };

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        );
    };
};

export default NameForm;