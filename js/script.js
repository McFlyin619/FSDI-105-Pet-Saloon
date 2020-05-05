// Object Literal

const salon = {
    name:'The Pettery Barn',
    phone:'777-987-6544',
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
let x = 0;
class Pet{
    constructor(name,age,gender,breed,service,ownersName,contactPhone){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownersName = ownersName;
        this.contactPhone = contactPhone;
        this.id = "pet" + x;
        x += 1;
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


function displayList(aPet){
    let tableBody = document.getElementById('rowPet');
    let item = `
    <tr id="${aPet.id}">
        <td>${aPet.name}</td>
        <td>${aPet.age}</td>
        <td>${aPet.gender}</td>
        <td>${aPet.breed}</td>
        <td>${aPet.service}</td>
        <td>${aPet.ownersName}</td>
        <td>${aPet.contactPhone}</td>
        <td><button onclick='deletePet("${aPet.id}");'> Delete</button></td>
    </tr>
    `;
    tableBody.innerHTML += item;
}

function deletePet(petID) {
    let row = document.getElementById(petID);
    let indexDelete;

    for (let i = 0; i < salon.pets.length; i++){
        let selected = salon.pets[i];
        if( petID === selected.id){
            indexDelete = i;
        }
    }

    salon.pets.splice(indexDelete,1);

    row.remove();

    myAlert();
    
    
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

function searchPet() {
    let searchString = document.getElementById('txtSearch').value;
    let ss = searchString.toLowerCase();
    
    for ( let j = 0; j<salon.pets.length; j++) {
        let searched = salon.pets[j];
        if (ss === searched.id || ss === searched.service.toLowerCase() || ss === searched.name.toLowerCase() || ss === searched.gender.toLowerCase()) {
            document.getElementById('pet'+j).setAttribute('class','selected');
        }
    }


}

// search by pets name

function myAlert() {
    document.getElementById('myAlert').className = 'alert alert-danger alert-dismissible fade show';
}

function closeAlert() {
    document.getElementById('myAlert').className = 'alert alert-danger alert-dismissible fade';

}

