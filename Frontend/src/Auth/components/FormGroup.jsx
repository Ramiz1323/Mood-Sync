import React from 'react'

const FormGroup = ({ label, placeholder, type = "text", value, onChange }) => {
  return (
    <div className="form-group" style={{ display: 'flex', flexDirection: 'column' , gap: '0.7rem'}}>
      <label htmlFor={label}>{label}</label>
      <input type={type} name={label} id={label} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default FormGroup
