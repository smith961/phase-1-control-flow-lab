function scuberGreetingForFeet(distance){
  // Write your code here!
  let ride;
  if(distance <= 400){
    //gives customer a free sample
    ride = "This one is on me!"
  }
  else if (distance > 2000 && distance <= 2500){
    ride = "I will gladly take your thirty bucks."
  }
  else {
    ride = "No can do."
  }

  return  ride
}
scuberGreetingForFeet(199);

function ternaryCheckCity(city){
  // Write your code here!
  
 return  city === "NYC" ? "Ok, sounds good." : "No go."
}


function switchOnCharmFromTip(tip){
  // Write your code here!
  
  switch(tip){
    case "generous":
      return "Thank you so much."
    
      case "not as generous":
        return "Thank you."
        
        default:
          return "Bye."
  }

}