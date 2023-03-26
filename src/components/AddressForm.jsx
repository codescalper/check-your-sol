import React, { ChangeEvent, FormEvent, useState } from 'react';

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          id="public-key"
          style={{ padding: '10px', marginBottom: '20px', borderRadius: '5px', border: 'none', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', width: '80%', maxWidth: '400px' }}
          type="text"
          placeholder="Public Address"
          name="firstName"
          value={values.address}
          onChange={handleAddressInputChange}
        />
        <br />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#32a852', borderRadius: '5px', border: 'none', color: '#fff', fontWeight: 'bold' }}>
          Check SOL Balance
        </button>
      </form>
    </div>
  );
}

export default AddressForm;
