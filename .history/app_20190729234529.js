document.getElementById('loan-form').addEventListener('submit', function(e){

    document.getElementById('results').style.display='none';

    document.getElementById()



    e.preventDefault();
});

function calculateResults() {

    console.log('calculating....');
    

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlypayment = document.getElementById('monthlypayment');
    const totalpayment = document.getElementById('totalpayment');
    const totalinterest = document.getElementById('totalinterest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedpayments = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedpayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    if (isFinite(monthly)) {

        monthlypayment.value = monthly.toFixed(2);
        totalpayment.value = (monthly * calculatedpayments).toFixed(2);
        totalinterest.value = ((monthly * calculatedpayments) - principal).toFixed(2);

    } else {
        showerror('please check your numbers');
    }

    // console.log(calculatedpayments+calculatedInterest);

    console.log(x);
    e.preventDefault();

setTimeout(clearerror,3000);
}

function clearerror(){
    document.querySelector('.alert').remove();
}


function showerror(error){
    const errordiv=document.createElement('div');
    const card=document.querySelector('.card');
    const heading=document.querySelector('.heading');


    errordiv.className='alert alert-danger';

     errordiv.appendChild(document.createTextNode(error))

     card.insertBefore(errordiv,heading);
}