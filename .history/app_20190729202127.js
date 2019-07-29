document.getElementById('loan-form').addEventListener('submit',calculateResults);

function calculateResults(e){
console.log('calculating....');

const amount=document.getElementById('amount');
const interest=document.getElementById('interest');
const years=document.getElementById('years');
const monthlypayment=document.getElementById('monthlypayment');
const totalpayment=document.getElementById('totalpayment');
const totalinterest=document.getElementById('totalinterest');

const principal=parseFloat(amount.value);
const calculatedInterest=parseFloat(interest.value)/100/12;
const calculatedpayments=parseFloat(years.value)*12;


const x=



e.preventDefault();
}