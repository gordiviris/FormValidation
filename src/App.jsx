import React, { useState } from 'react';

function App(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    //first name validation
    if (!firstName) {
      errors.firstName = 'First name is required';
    } else if (firstName.length < 2) {
      errors.firstName = 'First name must be at least 2 characters long';
    }
    //last name validation
    if (!lastName) {
      errors.lastName = 'Last name is required';
    } else if (lastName.length < 2) {
      errors.lastName = 'Last name must be at least 2 characters long';
    }


    //email validation
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }

    if (Object.keys(errors).length === 0) {
      // Submit the form if there are no errors
      console.log('Form submitted');
      setFirstName('');
      setLastName('');
      setEmail('');
    } else {
      // Set the errors state if there are errors
      setErrors(errors);
    }
  };

  //used to clear form
  const handleClear = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setErrors({});
  };

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Show Form'}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <label className="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && (
              <div className="error">{errors.firstName}</div>
            )}
          </div>
          <div>
            <label className="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && (
              <div className="error">{errors.lastName}</div>
            )}
          </div>
          <div>
            <label className="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClear}>
            Clear Form
          </button>
        </form>
      )}
    </div>
  );
}

export default App;