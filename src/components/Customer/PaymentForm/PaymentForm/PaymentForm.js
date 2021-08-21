import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Payment from '../Payment/Payment';

require('dotenv').config();
const stripePromise = loadStripe('pk_test_51IeCXhIbU0BILRiyqXycjhNhDYv5MlpSHgECNiMb8yaN9yiWJOwqmdE7z55U35RWs9jdqpiKEFGKpheM6K5n9AOZ00DJ9SzQkU')
const PaymentForm = ({handlePayment}) => (
   <Elements stripe={stripePromise}>
       <Payment handlePayment={handlePayment}></Payment>
   </Elements>
);

export default PaymentForm;