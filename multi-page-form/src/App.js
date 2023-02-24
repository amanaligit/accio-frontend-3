import './App.css';
import { useState } from 'react';
import UserDetails from './components/userDetails';
import PersonalDetails from './components/personalDetails';
import ConfirmationPage from './components/confirmationPage';
import SuccessPage from './components/successPage';

function App() {
  const [pageNo, setPageNo] = useState(0);
  // a global state for all components where the form data will be saved:
  const [formData, setFormData] = useState({ email: '', username: '', password: '', confirmpassword: '', firstname: '', lastname: '', country: '', dob: '', address: '' });
  console.log(formData)

  switch (pageNo) {
    case 0: return <UserDetails setFormData={setFormData} setPageNo={setPageNo} formData={formData} />
    case 1: return <PersonalDetails setFormData={setFormData} setPageNo={setPageNo} formData={formData} />
    case 2: return <ConfirmationPage setFormData={setFormData} setPageNo={setPageNo} formData={formData} />
    case 3: return <SuccessPage />
    default: return <h1 className='display-1 text-center'>Invalid Page</h1>

  }


}

export default App;
