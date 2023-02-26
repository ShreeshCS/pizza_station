const sizePrice = {
    'Regular' : 100,
    'Medium' : 130,
    'Large' : 170
};

const basePrice = {
    'Thin Crust' : 50,
    'Hand Tossed' : 65,
    'Cheeze Burst' : 86,
    '100% Whole Wheat' : 66,
    'Thin Crust' : 55
};

const toppingsPrice = {
    'Olives' : 20,
    'Tomato' : 15,
    'Mushroom' : 33,
    'Capsicum' : 14,
    'Babycorn' : 35,
    'Onion' : 24,
    'Chicken tikka' : 66,
    "Grilled chicken" : 76,
    'Eggfry' : 40,
    'Chicken Peri-Peri' : 78
};

function displayOrderSummary(){
    var size = document.querySelector('input[name="size"]:checked').value;
    var base = document.querySelector('input[name="base"]:checked').value;
    var toppings = document.querySelectorAll('input[name="toppings"]:checked');

    var [custName, custAddress, custPhone, custEmail] = [
        document.getElementById('name').value, 
        document.getElementById('address').value,
        document.getElementById('phone').value,
        document.getElementById('email').value
    ];

    var totalBill = 0;
    console.log(totalBill);

    // console.log(typeof(sizePrice[size]));

    totalBill += sizePrice[size] + basePrice[base];

    // console.log(totalBill);

    toppings.forEach(t => {
        let top = t.value;
        totalBill += toppingsPrice[top];
    }); 

    // console.log(custName);
    // console.log(custEmail);
    // console.log(custAddress);
    // console.log(custPhone);
    // console.log(totalBill);

    alert(`${size} size ${base} Pizza
    
    Amount: Rs.${totalBill}

    Customer Details: 
    ${custName}
    Phone: ${custPhone}
    Email: ${custEmail}
    Address: ${custAddress}
    `);
}

