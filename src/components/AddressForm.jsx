import React, { useState } from 'react';
import './AddressForm.css';

function AddressForm(props) {
  const [values, setValues] = useState({
    address: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handler(values.address)
  };

  const handleAddressInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      address: event.target.value,
    }));
  };

  return (
    <div className="address-form">
      <form onSubmit={handleSubmit} className="form">
        <input
          id="public-key"
          className="input"
          type="text"
          placeholder="Public Address"
          name="firstName"
          value={values.address}
          onChange={handleAddressInputChange}
        />
        <br />
        <button type="submit" className="button">
          Check SOL Balance
        </button>
      </form>
    </div>
  );
}

export default AddressForm;
