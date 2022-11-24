import { Component } from 'react';
import { InputForm,Input,InputNumber, FormContainer, BtnAdd, Span } from './Form.styled';

class Form extends Component {
  state = { name: '', number: '' };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handelSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    // if (e.target.value === ) {
    //   return alert('is already in contacts');
    // }
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  }

  render() {
    return (
      <FormContainer>
        <InputForm onSubmit={this.handelSubmit}>
          <label>
            <Span>Name</Span>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            <Span>Number</Span>
            <InputNumber
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <BtnAdd type="submit">Add contact</BtnAdd>
        </InputForm>
      </FormContainer>
    );
  }
};

export default Form;









// const ContactForm = ({onSubmit, name, handleNameChange, number, handleAddNumber }) => {
//   return (
//     <FormContainer>
//       <InputForm>
//         <label>
//           <Span>Name</Span>
//           <Input
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleNameChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <label>
//           <Span>Number</Span>
//           <InputNumber
//             type="tel"
//             name="number"
//             value={number}
//             onChange={handleAddNumber}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//       </InputForm>
//       <BtnAdd type="button">Add contact</BtnAdd>
//     </FormContainer>
//   );
// };

// export default ContactForm;