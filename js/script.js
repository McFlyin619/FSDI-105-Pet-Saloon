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

scooby.ownersInfo();

// Create Register Function

function register(){
    // Take values from form in HTML

    // Create the pet

    // push the pet into the Pets array

    // display on HTML

    // Clear the inputs on the form 

    // add onclick event on the button (HTML)
}