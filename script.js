function displayOrderSummary(){
    var size = document.querySelector('input[name="size"]:checked').value;
    var base = document.querySelector('input[name="base"]:checked').value;
    // var toppings = document.getElementsByName("toppings");
    var toppings = document.querySelector('input[name="toppings"]:checked');
    alert(`${size}, ${base}  ` + typeof(toppings));
    console.log(typeof(toppings));
}