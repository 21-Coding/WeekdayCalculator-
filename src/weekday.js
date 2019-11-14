// Back-end Function
export function Weekday (userInput) {

  this.userInput = userInput

}

Date.prototype.dayFinder = function () {
  if (this.userInput % 7 === 0 ){
    return "sunday"
  } else if(this.userInput % 7 === 1){
    return "monday"
  }else if(this.userInput % 7 === 2){
    return "tuesday"
  }else if(this.userInput % 7 === 3){
    return "wednesday"
  }else if(this.userInput % 7 === 4){
    return "thursday"
  }else if(this.userInput % 7 === 5){
    return "friday"
  }else if(this.userInput % 7 === 6){
    return "saturday"
  }else{
    return "idk"
  }
}


export const day = new Date('August 19, 1975 23:15:30');
export const day1 = day.getDay();
console.log(day1);
