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

    // getter to acces to defaultLocation 

    this.getDefaultLocation = function (){
        return defaultLocation
    };

    //this function would be call when I access the object
    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if (!value.x || !value.y)
                throw new Error("Invalid Location")
                
            defaultLocation = value
        }
    })

}
const ConstructureCircle = new Circle(3)

ConstructureCircle.defaultLocation = 0 ;

