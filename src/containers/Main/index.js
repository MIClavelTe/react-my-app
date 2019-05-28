import React from 'react';
import HelloWorld from '../../components/HelloWorld';
import HelloWorld2 from '../../components/HelloWorld2';
import Button from '../../components/Button';
import NameForm from '../../components/NameForm'
import InputForm from '../../components/InputForm';
import Card from '../../components/Card';

class Main extends React.Component {
    state = {
       books: [] 
    }

    handleBookAdd = book => {
        this.setState( {books: [...this.state.books, {title: book.value1, author: book.value2}] } )
    }

    handleBookDelete = id => {
        /*
            this.setState((state, props) => {
            return {counter: state.counter + props.step};
            });
        */
        this.setState( state => (
            { books: state.books.filter( (value, index) => index !== id ) }
        ))
    }

    render () {
        return (
            <>
                <HelloWorld name="Adriana" color="blue"/>
                <HelloWorld2 />
                <Button>Button</Button>
                <Button primary>Primary</Button>
                <NameForm />
                <InputForm onBookAdd={this.handleBookAdd} />
                {
                    this.state.books.map( (book,index) => 
                        <Card 
                            key={index}
                            title={book.title} 
                            author={book.author}
                            onBookDelete={this.handleBookDelete}
                            bookIndex={index}
                            // onBookDelete={()=>this.handleBookDelete(index)} 
                        /> 
                    )
                }
            </>
        )
    }
}

export default Main;