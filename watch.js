

function Watch(){

    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if(running)
            throw new Error("Watch has already started");

        running = true;

        startTime = new Date();
    }
    this.stop = function(){
        if(!running)
            throw new Error(" watch already stoped");
        
        running = false

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime())/ 1000;

        duration+= seconds

    }
    
    this.reset = function(){
        startTime = 0;
        endTime = 0;
        running = null;
        duration = 0;
    }

    //Read only property 
    Object.defineProperty(this, "duration" , {
        get: function(){
            return duration
        }
    })

    }


