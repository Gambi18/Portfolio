//Event Listener proceedure- last

//Declarations
let form = document.getElementById("task-form");
const addBtn = document.getElementById('addBtn');

//Array Creation
let myArray=[];
let mArray=[];

//Add local storage to empty array
strMyArray = localStorage.getItem("ContactInfo");
mArray=[];
mArray = JSON.parse(strMyArray);
console.log("MArray:", mArray);
if(mArray!=null){
    myArray.push(...mArray); 
    mArray=[];
}else{};

//this function displays the tasks before and after the submit is clicked
if(addBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactOptions = (document.getElementById('option').value);
    const message = document.getElementById('message').value;

    //Validation declarations
    // const nam = document.getElementById('name');
    // const nmer = document.createElement('div');
    // removeErrorElement(document.getElementById('subBtn'));

    //Validation Check 
    if(name.trim()==""||email.trim()==""||contactOptions==""||message.trim()==""){
    // alert("Fill out all fields");
        if(name.trim()==""){
            // document.getElementById("nm").innerHTML = "Please fill out this field";
            addErrorElement( document.getElementById('name'),'Please fill out this field');
        }else{
            // document.getElementById("nm").innerHTML = "";
            removeErrorElement(document.getElementById('name'));
        };
        if(email==""){
            // document.getElementById("pt").innerHTML = "Please fill out this field";
            addErrorElement( document.getElementById('email'),'*required');
        }else{
            // document.getElementById("pt").innerHTML = "";
            removeErrorElement(document.getElementById('email'));
        };
        if(contactOptions==""){
            // document.getElementById("des").innerHTML = "Please fill out this field";
            addErrorElement( document.getElementById('option'),'Please fill out this field');
        }else{
            // document.getElementById("des").innerHTML = "";
            removeErrorElement(document.getElementById('option'));
        };
        if(message.trim()==""){
            // document.getElementById("dt").innerHTML = "Please fill out this field";
            addErrorElement( document.getElementById('message'),'Please fill out this field');
        }else{
            // document.getElementById("dt").innerHTML = "";
            removeErrorElement(document.getElementById('message'));
        };
    }else{
        // document.getElementById("nm").innerHTML = "";
        removeErrorElement(document.getElementById('name'));
        // document.getElementById("des").innerHTML = "";
        removeErrorElement(document.getElementById('email'));
        // document.getElementById("dt").innerHTML = "";
        removeErrorElement(document.getElementById('option'));
        // document.getElementById("tm").innerHTML = "";
        removeErrorElement(document.getElementById('message'));

        //this is to display the succes message when the submit button is pressed
        // addSuccessElement(document.getElementById('subBtn'), 'Contact info submitted');

        //this is the trigger for the bootstrap modal call when the submit on the contact form is pressed
        let submit = document.getElementById('submitModal');
        $(submit).modal('show');

        //this is the declaration of the object which would be fit into each array position
        const info = {
            name,
            email,
            contactOptions,
            message
        };
    
        addobj(info);
    
        form.reset();

        //Save to local storage
        let strMyArray = JSON.stringify(myArray);
        localStorage.setItem("ContactInfo", strMyArray);    
    };
})){}

//Array Addition
function addobj(task) {
    myArray.push(task);
    console.log("MyArray:", myArray);
    return myArray;
};


function addErrorElement(inputElement,errorMessage) {
    //check if the error class already exists
    //create error element or edit it
    //create error class
    let errorEle = inputElement.parentElement.querySelector(".error");
    if(!errorEle){
        errorEle = document.createElement("div");
        errorEle.setAttribute("class", "error");
        inputElement.parentElement.appendChild(errorEle);
    };
    errorEle.textContent = errorMessage;
    
}
function removeErrorElement(inputElement) {
   let errorEle = inputElement.parentElement.querySelector('.error');
   if(errorEle){
        errorEle.remove();
   };
}