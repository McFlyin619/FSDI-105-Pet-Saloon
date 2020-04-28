// Object Literal

const salon = {
    name:'The Pettery Barn',
    phone:'7779876544',
    address: {
        street:'Central Ave',
        number:'6969'
    },
    workingHours:{
        days:'Mon-Fri',
        open:'9:00 am',
        close:'5:00 pm'
    },
    pets:[], // simulation of a database
    count:function(){
        alert('You registered a new pet, you have '+ this.pets.length + "pets.");
    }
}

// Object Destructuring 

let {name,phone,address:{street,number},workingHours:{days,open,close}} = salon;

// Display info of Salon on HTML (main) 
document.getElementById('info-main').innerHTML = `
    <h2> ${name} </h2>
    <p><b> Phone:</b> ${phone}</p>
    <p><b>Address:</b> ${number} ${street}</p>
    <p><b>Hours:</b> ${days} | ${open}-${close}</p>
`;

// Object Constructor

class Pet{
    constructor(name,age,gender,breed,service,ownersName,contactPhone){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownersName = ownersName;
        this.contactPhone = contactPhone;
    }
    ownersInfo = function() {
        console.log(`${this.ownersName} ${this.contactPhone}`);
    }
}

// Create pets (simple process)
const scooby = new Pet('Scooby','50','Male','Great Dane','Full Service','Shaggy','6554332969');
salon.pets.push(scooby);
displayList(scooby);
scooby.ownersInfo();
// displayTable(scooby);
// Create Register Function

// Take values from form in HTML

let txtName = document.getElementById('petName');
let txtAge = document.getElementById('petAge');
let txtGender = document.getElementById('petGender');
let txtBreed = document.getElementById('petBreed');
let txtService = document.getElementById('petService');
let txtOwners = document.getElementById('ownersName');
let txtPhone = document.getElementById('contactPhone');


function register(){
    // Create the pet
    let thePet = new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwners.value,txtPhone.value)

    console.log(thePet);
    // Push the pet into the Pets array
    salon.pets.push(thePet);
    // Display on HTML
    displayList(thePet);
    // displayTable(thePet);
    // Clear the inputs on the form 
    clear();
    // add onclick event on the button (HTML)- DONE
    
}

function displayTable(aPet){
}

function displayList(aPet){
    let listBody = document.getElementById('pet-list');
    let item = `
        <li><b>Name:</b> ${aPet.name} | <b>Age:</b> ${aPet.age} <br> <b>Gender:</b> ${aPet.gender} | <b>Breed:</b> ${aPet.breed}<br> <b>Service:</b> ${aPet.service}<br>
        <b>Owner:</b> ${aPet.ownersName} | <b>Phone:</b> ${aPet.contactPhone}</li><hr>
    `;
    listBody.innerHTML += item;

    // Mortal hw add the other attributes om line 84 and apply css style
    // Inmortal hw show all the pets in a table
}

function clear(){
    txtName.value =' ';
    txtAge.value = ' ';
    txtGender.value = 'invalid';
    txtBreed.value = ' ';
    txtService.value = 'invalid'
    txtOwners.value = ' ';
    txtPhone.value = ' ';
}