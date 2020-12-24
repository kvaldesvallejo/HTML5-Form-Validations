/*llenar el select de estados */
//const usaStates = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
//usaStates.forEach((stat,index) => document.querySelector("#inputState").innerHTML += `<option>${usaStates[index]}</option>`);

const inputCard = document.querySelector("#inputCard");
const inputCVC = document.querySelector("#inputCVC"); 
const inputAmount = document.querySelector("#inputAmount");
const inputFName = document.querySelector("#inputFName");
const inputLName = document.querySelector("#inputLName");

function validateInputCard(){
    if (inputCard.value.length===12){
        if(inputCard.classList.contains("is-invalid"))
            inputCard.classList.remove ("is-invalid");
        inputCard.classList.add ("is-valid");
        document.querySelector("#card-feedback").innerHTML = "Looks good";
    }
    else{
        if(inputCard.classList.contains("is-valid"))
            inputCard.classList.remove ("is-valid");
        inputCard.classList.add ("is-invalid");
        document.querySelector("#card-feedback").innerHTML = "Must have 12 digits";
    }

    console.log(document.querySelector("#card-feedback").innerHTML);
    console.log( inputCard.value.length );
}

function validateInputCVC(event){
    
    if (inputCVC.value.length>6){
        if(inputCVC.classList.contains("is-invalid"))
            inputCVC.classList.remove("is-invalid");
        inputCVC.classList.add("is-valid");
        document.querySelector("#cvc-feedback").innerHTML = "Looks good";
    }
    else{
        if(inputCVC.classList.contains("is-valid"))
            inputCVC.classList.remove("is-valid");
        inputCVC.classList.add("is-invalid");
        document.querySelector("#cvc-feedback").innerHTML = "Must have more than 6 characters";
    }

    console.log(inputCVC.value.length);
    console.log(inputCVC.value);
    //console.log(event);
}

function validateInputAmount(){
    if (inputAmount.value>0){
        if(inputAmount.classList.contains("is-invalid"))
            inputAmount.classList.remove ("is-invalid");
        inputAmount.classList.add ("is-valid");
        document.querySelector("#amount-feedback").innerHTML = "Looks good";
    }
    else{
        if(inputAmount.classList.contains("is-valid"))
            inputAmount.classList.remove ("is-valid");
        inputAmount.classList.add ("is-invalid");
        document.querySelector("#amount-feedback").innerHTML = "The amount needs to be higher";
    }

    console.log(document.querySelector("#card-feedback").innerHTML);
    console.log( inputAmount.value.length );
}

function validateInputFName(){
    //console.log(inputFName.value);
    if (inputFName.value.length>2){
        if(inputFName.classList.contains("is-invalid"))
            inputFName.classList.remove("is-invalid");
        inputFName.classList.add("is-valid");
        document.querySelector("#fName-feedback").innerHTML = "Looks good";
    }
    else{
        if(inputFName.classList.contains("is-valid"))
            inputFName.classList.remove("is-valid");
        inputFName.classList.add("is-invalid");
        document.querySelector("#fName-feedback").innerHTML = "Invalid First Name";
    }

    console.log(inputFName.value.length);
}

function validateInputLName(){
    //console.log(inputFName.value);
    if (inputLName.value.length>2){
        if(inputLName.classList.contains("is-invalid"))
            inputLName.classList.remove("is-invalid");
        inputLName.classList.add("is-valid");
        document.querySelector("#lName-feedback").innerHTML = "Looks good";
    }
    else{
        if(inputLName.classList.contains("is-valid"))
            inputLName.classList.remove("is-valid");
        inputLName.classList.add("is-invalid");
        document.querySelector("#lName-feedback").innerHTML = "Invalid Last Name";
    }

    console.log(inputLName.value.length);
}
