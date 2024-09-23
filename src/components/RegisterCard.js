// src/components/RegisterCard.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterCard = ({ addCard }) => {
  return (
    <Formik
      initialValues={{ cardNumber: '', cardHolder: '', expiryDate: '', cvv: '' }}
      validationSchema={Yup.object({
        cardNumber: Yup.string().required('Required'),
        cardHolder: Yup.string().required('Required'),
        expiryDate: Yup.string().required('Required'),
        cvv: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        addCard(values);
        setSubmitting(false);
      }}
    >
      <Form>
        <label htmlFor="cardNumber">Card Number</label>
        <Field name="cardNumber" type="text" />
        <ErrorMessage name="cardNumber" />

        <label htmlFor="cardHolder">Card Holder</label>
        <Field name="cardHolder" type="text" />
        <ErrorMessage name="cardHolder" />

        <label htmlFor="expiryDate">Expiry Date</label>
        <Field name="expiryDate" type="text" />
        <ErrorMessage name="expiryDate" />

        <label htmlFor="cvv">CVV</label>
        <Field name="cvv" type="text" />
        <ErrorMessage name="cvv" />

        <button type="submit">Register Card</button>
      </Form>
    </Formik>
  );
};

export default RegisterCard;
