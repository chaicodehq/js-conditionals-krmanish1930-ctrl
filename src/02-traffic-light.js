
export function traffic(color){
    color=color.toLowerCase();
    switch(color){
        case"green":
          console.log("GO");
          break;
        case"yellow":
          console.log("GO SLOW");
          break;
        case"red":
          console.log("STOP");
          break;

        case"flashing red":
          console.log("PROCCED TO GO");
          break;
        default:
          console.log("INVALID CHOICE");
        }

        
    }
    traffic("red");