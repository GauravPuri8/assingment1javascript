//create a javascript program to takes tha payment method use switch statement
let paymentMethod="credit";

switch(paymentMethod){
    case"credit":
    console.log("processing fee for credit payment: 2%");
    break;
    case"debit":
    console.log("processing fee for debit payment; 1.5%");
    break;
    case"paypal":
    console.log("processing fee for paypal payment: 3%");
    break;
    default:
        console.log("invalid payment method");     
}