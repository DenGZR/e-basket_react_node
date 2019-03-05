import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../TextInput';

import { required, maxLength15, number } from './validation';

const CheckoutForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="name"
          type="text"
          placeholder="Ведите ваше имя"
          validate={[required]}
          component={TextInput}
        />
        <Field
          name="phone"
          type="text"
          placeholder="Ведите номер телефона"
          validate={[number, maxLength15]}
          component={TextInput}
        />
        <button type="submit" disabled={pristine || submitting}>
          Оформить заказ
        </button>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'checkoutForm',
})(CheckoutForm)