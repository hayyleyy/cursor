import styled from 'styled-components';
import { useState } from 'react';

const FormContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  color: #A3AED0;
  font-size: 0.875rem;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  color: #2B3674;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #E9EDF7;
  border-radius: 10px;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: #4318FF;
  }
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid #E9EDF7;
  border-radius: 10px;
  font-size: 0.875rem;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #4318FF;
  }
`;

const SubmitButton = styled.button`
  background: #4318FF;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #3311CC;
  }
`;

const NewCardForm = () => {
  const [formData, setFormData] = useState({
    cardType: 'Classic',
    nameOnCard: '',
    cardNumber: '',
    expirationDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Card Type</Label>
          <Select name="cardType" value={formData.cardType} onChange={handleChange}>
            <option value="Classic">Classic</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Name On Card</Label>
          <Input
            type="text"
            name="nameOnCard"
            value={formData.nameOnCard}
            onChange={handleChange}
            placeholder="Enter name on card"
          />
        </FormGroup>

        <FormGroup>
          <Label>Card Number</Label>
          <Input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="**** **** **** ****"
            maxLength={19}
          />
        </FormGroup>

        <FormGroup>
          <Label>Expiration Date</Label>
          <Input
            type="text"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            placeholder="MM/YY"
            maxLength={5}
          />
        </FormGroup>

        <SubmitButton type="submit">Add Card</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default NewCardForm; 