import { Component } from "react"
import PropTypes from 'prop-types';

export class Phonebook extends Component {
    state = {
    name: '',
    number: '',
    };
    
    onChangeName = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    }
    
    handelSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddContact(this.state.name, this.state.number);
        this.setState({name: '', number:''})
    }

   render() {
    return (
        <>
        <form onSubmit={this.handelSubmit}>
             <label>Name</label>
        <input
                
        type="text"
        name="name"
        value={this.state.name}          
        onChange={this.onChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
        <label>Number</label>
        <input
        type="tel"
        name="number"
        value={this.state.number}
        onChange={this.onChangeName}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        />
            
            <button type="submit" >Add contact</button>
            </form>
            
       </>
)
}
}
Phonebook.propTypes = {
  handleAddContact: PropTypes.func,
};
