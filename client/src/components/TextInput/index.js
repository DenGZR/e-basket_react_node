import React from 'react';

const TextInput = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
    <div>
      <label>
        {label}
      </label>
      <div>
        <input {...input} placeholder={placeholder} type={type} />
        {touched &&
          ((error &&
            <p>
              {error}
            </p>) ||
            (warning &&
              <p>
                {warning}
              </p>))}
      </div>
    </div>
  )

export default TextInput;
