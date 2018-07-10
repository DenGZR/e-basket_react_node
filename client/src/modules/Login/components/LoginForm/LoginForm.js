import React from 'react';
import TextInput from '../../../../components/TextInput';
import { Field, reduxForm } from 'redux-form';
import { required, minLength2 } from './validation';

const loginForm = (props) => {
  const { onHandleSubmit, pristine, submitting } = props;

  return (
    <form onSubmit={onHandleSubmit}>
      <div>
        <Field
          name="email"
          type="text"
          placeholder="email"
          validate={[required, minLength2]}
          component={TextInput}
        />
        <Field
            name="password"
            type="password"
            placeholder="password"
            validate={[required, minLength2]}
            component={TextInput}
        />
        <button type="submit" disabled={pristine || submitting}>
          Login
        </button>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'loginForm',
})(loginForm)
