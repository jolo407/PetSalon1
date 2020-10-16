var salon={
    name:"The Fashion Pet",
    address:{
        street:"Ave University",
        number:"2569"
    },
    hours:{
        open:"8:00 a.m.",
        close:"8:00 p.m."
    },
    pets:[
    {
        name:"Scooby",
        age: "50",
        gender:"Male",
        type:"Dog",
        breed:"Dane",
        service:"Full Service",
        ownersName:"Shaggy",
        contactPhone:"555-555-5555"
    },
    {
        name:"Scrappy",
        age: "40",
        gender:"Male",
        type:"Dog",
        breed:"Dane",
        service:"Nails Cuty",
        ownersName:"Shaggy",
        contactPhone:"555-555-5555"
    },
    {
        name:"Tweety",
        age: "60",
        gender:"Male",
        type:"Bird",
        breed:"Mixed",
        service:"Full Service",
        ownersName:"Silvester",
        contactPhone:"910-543-9888"
    },
    {
        name:"speedy",
        age: "60",
        gender:"Male",
        type:"Mouse",
        breed:"Mixed",
        service:"Shower",
        ownersName:"Bunny",
        contactPhone:"251-543-2343"
    }
]
}

document.write("Pets registered: " + salon.pets.length + "<br>" + "<br>");
document.write("Pet names: " + "<br>" + "1." + salon.pets[0].name + "<br>","2." + salon.pets[1].name + "<br>","3." + salon.pets[2].name + "<br>","4." + salon.pets[3].name + "<br>");

/* display information on the footer

text=`
${salon.name}, ${salon.address.street} ${salon.address.number} <br>
It is open from ${salon.hours.open} to ${salon.hours.close}
`;

document.getElementById(`footer-info`).innerHTML=text;

/*constructor 
class Pet{
    constructor(name,age,gender,type,breed,service,ownersName,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.type=type;
        this.breed=breed;
        this.service=service;
        this.ownersName=ownersName;
        this.contactPhone=contactPhone;
}
}

var scooby=new Pet("Scooby",50,"Male","Dog","Dane","Full Service","Shaggy","555-555-555")
var champ=new Pet("Champ","1","Male","Dog","Pit","Nails","Joel","897-898-0765");
var tweety=new Pet("Tweety",2,"Female","Bird","Canarian","Full Service","Silvester","555-555-555")



salon.pets.push(scooby);
salon.pets.push(champ);
salon.pets.push(tweety);

/*register function 
const txtName=document.getElementById('petName');
const txtAge=document.getElementById('petAge');
const txtGender=document.getElementById('petGender');
const txtType=document.getElementById('petType');
const txtBreed=document.getElementById('petBreed');
const txtService=document.getElementById('service');
const txtOwner=document.getElementById('petownersName');
const txtPhone=document.getElementById('petcontactPhone');

function register(){
    var thePet=new Pet(txtName.value,txtAge.value,txtGender.value,txtType.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value);
   salon.pets.push(thePet);
   document.getElementById('pets').innerHTML='${thePet}'
   clear();
}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtGender.value="";
    txtType.value="";
    txtBreed.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";
}
*/