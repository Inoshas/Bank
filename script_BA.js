
// Link to Html code:::::

           
//////////////////////////////////////////////////////////////////
/**** Part 1 : Create Customer ****/
const form_new_user=document.getElementById("form_new_user");
const bank_h=document.getElementById("bank_h");
 // new cutomer or not
const p_new_cus_or_not=document.getElementById("new_cus_or_not");   
const button_newcus_yes=document.getElementById("button_newcus_yes");
const button_newcus_no= document.getElementById("button_newcus_no");

// getting cutomer info:
// name : Socila security id : Address: phone: User name : Password
//const p_cus_nam= document.getElementById("p_cus_nam");


const create_cus= document.getElementById("create_new_customer")
const input_cus_nam= document.getElementById("input_cus_nam");
const input_cus_id=document.getElementById("input_cus_id");
const input_cus_add=document.getElementById("input_cus_add");
const input_cus_phone= document.getElementById("input_cus_phone");
const p_Cus_user_name= document.getElementById("p_Cus_user_name");
const input_cus_user_name=document.getElementById("input_cus_user_name");
const p_Cus_password= document.getElementById("p_Cus_password");
const input_cus_pass=document.getElementById("input_cus_pass");


// Requirements : with check box and then submit:::
const p_rec=document.getElementById("p_rec");
const check_bankA=document.getElementById("check_bankA");
const check_creditA=document.getElementById("check_creditA");
const credit_lim=document.getElementById("credit_lim")
const check_deposit= document.getElementById("check_deposit");
const submit_create_customer= document.getElementById("submit_create_customer");

//////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////
/**** Part 2 : Existing Customer ****/

// Check customer exist or not:  if yes or not things may change: If existing customer we have 
// things to do: else we have to plan :) :) :)

// verification with customer id and phone number:
const p_exist_cus=document.getElementById("p_exist_cus");
const button_exis_cus_yes=document.getElementById("button_exis_cus_yes");
const button_existing_cus_no=document.getElementById("button_existing_cus_no");

// input name
const p_cus_id_v= document.getElementById("p_cus_id_v");
const input_cus_id_v= document.getElementById("input_cus_id_v");
// input id
const p_cus_phone_v=document.getElementById("input_cus_user_name");
const input_cus_phone_v= document.getElementById("input_cus_phone_v");

// Check with check boxes what to do: we can go for buttons too: However, 
// execute depend on the request...

// crrate new accounts: deposit: transfer: check balance: withdraw :......
// and submit::
const p_to_do=document.getElementById("p_to_do");
const chk_new_BA= document.getElementById("chk_new_BA");
const chk_new_CA=document.getElementById("chk_new_CA");
const chk_deposit= document.getElementById("chk_deposit");
const chk_transfer_money= document.getElementById("chk_transfer_money");
const chk_withdraw_money=document.getElementById("chk_withdraw_money");
const chk_balance= document.getElementById("chk_balance");
const submit_exsi_cus= document.getElementById("submit_exsi_cus");

///////////////////////////////////////////////////////////////////////

//// Global variables goes here::


/// Classes and objects goes here:

class Customer {
static idnumber = 0;
// user name and PW has to sectrt
#customer_username1=0;
#custmer_PW1=0;
constructor(cutomer_name, customer_soci_sec,customer_address,customer_phone_nu,
customer_username,custmer_PW) {
this.customer_name=cutomer_name;
this.customer_soci_sec=customer_soci_sec;
this.customer_address=customer_address;
this.customer_phone_nu=customer_phone_nu;
this.customer_username1=customer_username;
this.custmer_PW1=custmer_PW;
this.bankaccountnumber = 0;
this.customernumber = ++Customer.idnumber;// this need to modify... 

}
 return_cust_num() {
    return (this.customernumber)
  
}

}

class BankAccount {
        static idnumber = 0;
        constructor(customernumber) {
            this.customernumber = customernumber;
            this.bankaccountnumber = ++BankAccount.idnumber;
            this.balance = 0;
            this.accountypo="bank_AC"
        }
        // change balance
        // positive value increases
        // negative value is withdrawal
        changebalance(money) {       
            if ( (money >= 0) || (Math.abs(money) <= this.balance)) {
                    this.balance += money;
                    return true;
            }
            return false;
        }
        //bankaccountnumber = ++BankAccount.idnumber
    }

    class CreditAccount extends BankAccount {
        //static idnumber = 0;
        constructor(customernumber,credit_lim) {
            super();
            this.customernumber = customernumber;
            //this.bankaccountnumber = ++BankAccount.idnumber;
           // this.balance = 0;
            this.accountypo="credit_AC"
        
           this.creditlimit=credit_lim;
            console.log(this.creditlimit)
        } 
        changebalance(money) {       
            if ( (money >= 0) || (Math.abs(money)  <= this.balance +this.creditlimit)) {
                    this.balance += money;
                    return true;
            }
            return false;
        }
   
    }


/// Functions goes heree::::


///////////////////////////////////////////////
/// code body goes here:::.


button_newcus_yes.addEventListener("click" ,function(){
create_new_customer.addEventListener("click" ,function(){

console.log("test")
bank_account_array=[];

input_cus_nam.focus();
customer_name= input_cus_nam.value;
customer_soci_sec=input_cus_id.value;
customer_address=input_cus_add.value;
customer_phone_nu=input_cus_phone.value;
customer_username=input_cus_user_name.value;
customer_PW= input_cus_pass.value;

dummy_customer= new Customer(customer_name, customer_soci_sec,customer_address,
customer_phone_nu,customer_username,customer_PW);

console.log(dummy_customer)

dummy_cus_id=dummy_customer.return_cust_num();
if (check_bankA.checked){
dummybankaccount = new BankAccount(dummy_cus_id);
console.log(dummybankaccount);
bank_account_array.push(dummybankaccount.bankaccountnumber);
}

if (check_creditA.checked){
credit_limit=credit_lim.value;
dummycreditaccount =new CreditAccount(dummy_cus_id, credit_limit);
console.log(dummycreditaccount);
bank_account_array.push(dummybankaccount.bankaccountnumber);
}
dummy_customer.bankaccountnumber= bank_account_array;

if (check_deposit){

}

})


})


button_newcus_no.addEventListener("click" ,function(){

form_new_user.style.display = "none";

})

// if customer need bank account

//if (check_bankA.addEventListener('change', function(e) {
//console.log(check_bankA.checked, "yuhuueeQEQ");})
/*
// if customer need credit account:::
check_creditA.addEventListener('change', function(e) {
console.log(check_creditA.checked, "yuhuuQDW");})

// if customer need to deposit
check_deposit.addEventListener('change', function(e) {
console.log(check_deposit.checked, "yuhuuEe   ");})*/








/*

<form id = 'player_stuff'>
Player's Position:<br>
<input type="radio" name="position" value="p1" checked>Position One
<input type="radio" name="position" value="p2">Position Two
<input type="radio" name="position" value="p3">Position Three
<input type="radio" name="position" value="p4">Positin Four
<br/>
Add by Player ID:<br>
<input type='text' name='player_id'>
<input type="button" value="Submit Player" id='smit' >
</form>
<div id="disp_player"></div>
Then using querySelector and querySelectorAll

document.getElementById('smit').onclick = function () {
var checkedPosition =
document.querySelectorAll("#player_stuff [name='position']:checked");
var playerId =
document.querySelector("#player_stuff [name='player_id']");
var position = checkedPosition[0].value;
var player_id = playerId.value;

document.getElementById('disp_player').innerHTML =
position + " " + player_id;
}
*/





/*
// Additional separate software modules and libraries you need

// constant variables you use

// global variables
let programloop = true;
let customerarray = [];
let accountarray = [];
let creditaccountarray=[];

// context between HTML elements and JavaScript variables

// classes, interfaces and objects
class Customer {
    static idnumber = 0;
    constructor(name) {
        this.bankaccountnumber = 0;
        this.creditaccountnumber=0;
        this.customernumber = ++Customer.idnumber;
        this.customername = name;
    }
}

class BankAccount {
    static idnumber = 0;
    constructor() {
        this.customernumber = 0;
        this.bankaccountnumber = ++BankAccount.idnumber;
        this.balance = 0;
        this.accountypo="bank_AC"
    }
    // change balance
    // positive value increases
    // negative value is withdrawal
    changebalance(money) {       
        if ( (money >= 0) || (Math.abs(money) <= this.balance)) {
                this.balance += money;
                return true;
        }
        return false;
    }
    //bankaccountnumber = ++BankAccount.idnumber
}

class CreditAccount extends BankAccount {
    //static idnumber = 0;
    constructor() {
        super();
        this.customernumber = 0;
        this.bankaccountnumber = ++BankAccount.idnumber;
        this.balance = 0;
        this.accountypo="credit_AC"
    
        this.creditlimit=Number(prompt("what is your credit limit?"))
        console.log(this.creditlimit)
    } 
    changebalance(money) {       
        if ( (money >= 0) || (Math.abs(money)  <= this.balance +this.creditlimit)) {
                this.balance += money;
                return true;
        }
        return false;
    }

}
/*
let testcustomer1 = new Customer();
let testcustomer2 = new Customer();
console.log(testcustomer1.customernumber,testcustomer2.customernumber);            

let testbank1 = new BankAccount();
let testbank2 = new BankAccount();
console.log(testbank1.bankaccountnumber,testbank2.bankaccountnumber);            

let testcredit1 = new CreditAccount();
let testcredit2 = new CreditAccount();
console.log(testcredit1.bankaccountnumber,testcredit2.bankaccountnumber);            
*/
/*
// functions

// Event handlers

// Get data from database and/or generate data

// any code you need

// create a loop or bank
// leave the loop when user wants to do so
do {
    // present a display of options
    // ask from user what to do
    // get a number
    let selection = Number(prompt(
        "BANK MENU \n" +
        "1: Show Customers\n" +
        "2: Create a Customer\n" +
        "3: Carry out Transactions\n" +
        "4: Transfer money\n"
    ))
    // following declarations define dummy values used in switch
    let dummyname = "";
    let dummycustomer = null;
    let dummyaccount = null;
    let dummyaccountcredit=null;
    let dummycustomernumber = 0;
    let dummyreceiveraccount = null;

    // carry out selected option
    switch(selection) {
        case 1:
            for (let iter of customerarray) {
                console.log(iter);
            }
            break;
        case 2:
            dummyname = prompt("Give new Customer name");
            dummycustomer = new Customer(dummyname);
            accountchoice = Number(prompt(
                "Give me account type\n" +
                "1: Bank Account? \n" + 
                "2: Credit Account \n" ));
            dummyaccount = null;
            dummyaccountcredit=null;
            if (accountchoice === 1) {
                // bank account was chosen
                dummyaccount = new BankAccount();
                                }
            else {
                dummyaccount = new CreditAccount();
                
                }

            dummycustomer.bankaccountnumber = dummyaccount.bankaccountnumber; 
            // set customer number to bank account
            dummyaccount.customernumber = dummycustomer.customernumber;
            /* 
            // set bank account number to customer
            dummycustomer.bankaccountnumber = dummyaccount.bankaccountnumber; 
            // set customer number to bank account
            dummyaccount.customernumber = dummycustomer.customernumber;
            // set credit account number to customer:
            dummycustomer.creditaccountnumber =dummyaccountcredit.creditaccountnumber;
            // set customer number to credit account:
            dummyaccountcredit.customernumber=dummycustomer.customernumber; */
/*
            customerarray.push(dummycustomer);
            accountarray.push(dummyaccount);
            //creditaccountarray.push(dummyaccountcredit);
        
            break;
        case 3:
            // customer says her customernumber
            dummycustomernumber = Number(prompt("Give me your customer number"));
            // All arrays have find method for finding elements
            // this returns all elements that have same customernumber
            // as inserted customernumber
            dummyaccount = accountarray.find(item => 
                item.customernumber === dummycustomernumber);
            console.log(dummyaccount);                        
            if (typeof dummyaccount !== undefined) {
                dummytransactionvalue = Number(prompt("Transaction value?"));
                dummyaccount.changebalance(dummytransactionvalue);
            }
            break;
        case 4:
            // customer says her customernumber
            dummysendernumber = Number(prompt("Give me sender customer number"));

            dummysenderaccount = accountarray.find(item => 
                item.customernumber === dummysendernumber);
            console.log(dummysenderaccount);                        

            dummyreceivernumber = Number(prompt("Give me receiver customer number"));

            dummyreceiveraccount = accountarray.find(item => 
                item.customernumber === dummyreceivernumber);
            console.log(dummyreceiveraccount);                        

            if (
                (typeof dummysenderaccount !== undefined) && 
                (typeof dummyreceiveraccount !== undefined)
            ) {
            
                
                dummytransactionvalue = Number(prompt("Transfer value?"));

                // Transaction with bankaccount
                console.log("Here we go "+ dummysenderaccount.accountypo)
                    if (dummysenderaccount.changebalance(-dummytransactionvalue)) {
                    dummyreceiveraccount.changebalance(dummytransactionvalue);
                }
                
                // Transaction with creditaccount



            }
            break;
        /// create new credit account for existing custome: 
        case 5:
        case 999:
            for (let iter of accountarray) {
                console.log(iter);
            }

            break;
        default:
            programloop = false;
            break;
    }
} while(programloop);

*/