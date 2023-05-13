// Object literals 

const circle = {
    radius: 1,  // this is an property 
    location: {
        x:1,
        y:2
    },
    draw : function(){  // this is a method 
        console.log('Draw something for me !');
    }
}

circle.draw();

// Factory function 

function CreateCircle(radios){
    return  {
        radios,
        draw: function(){
            console.log('Draw with a Factory function');
        }
    }
}

const circle2 = CreateCircle(2)

console.log(circle2);

// Constructure function //////////////////////////////////////////////////////////////////////////

function Circle(radios){
    this.radios = radios;

    this.draw = function(){
        console.log('draw Const');
    }
    let defaultLocation = {
        x:0,
        y:0
    }

    this.getDefaultLocation = function (){
        return defaultLocation
    };

}



const ConstructureCircle = new Circle(3)

//Add Methos to the object:

ConstructureCircle.location = {x:1};
ConstructureCircle['location'] = {y:3}

delete ConstructureCircle['location']

////////////Enumerate //////////////////////////////////////

for(let key in ConstructureCircle){
        console.log(key, ConstructureCircle[key]);
}

const keys = Object.keys(ConstructureCircle);
console.log(keys);

if('radios' in ConstructureCircle)
    console.log('Circle has a radius. ');

console.log(ConstructureCircle);

ConstructureCircle.draw();


// Primitives Vs Objets //////////////////////////////////////////////////////////////
let x = {value : 10};

let y = x;

x.value = 20 



let obj = {value: 10}

function increase(obj) {
    obj.value++
}

increase(obj);
console.log(obj);

