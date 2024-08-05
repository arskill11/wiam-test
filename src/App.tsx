import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { useState } from 'react';
import { FormDataTypes } from './shared/types';

export const initialFormData: FormDataTypes = {
  firstForm: {
    phone: '',
    firstName: '',
    lastName: '',
    gender: '',
  },
  secondForm: {
    workPlace: '',
    address: '',
  },
  thirdForm: {
    loanSum: 200,
    loanTerm: 10,
  },
  formsAccepted: {
    first: false,
    second: false,
    third: false,
  },
};

function App() {
  const [formData, setFormData] = useState(initialFormData);

  return (
    <>
      <Navbar />
      <Outlet context={[formData, setFormData]} />
    </>
  );
}

export default App;
