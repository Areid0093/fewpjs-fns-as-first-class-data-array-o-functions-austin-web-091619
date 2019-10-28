function wakeDog(a, b) {
    console.log(`Wake ${a} the ${b}`);
    return `Wake ${a} the ${b}`;
    }
function leashDog(a, b) {  
    console.log(`Leash ${a} the ${b}`);
    return `Leash ${a} the ${b}`;
    }
function walkToPark(a, b) {
    console.log(`Walk to the park with ${a} the ${b}`);
    return `Walk to the park with ${a} the ${b}`;
    }
function throwFrisbee(a, b) {
    console.log(`Throw the frisbee for ${a} the ${b}`);
    return `Throw the frisbee for ${a} the ${b}`;
    }
function walkHome(a, b) {
    console.log(`Walk home with ${a} the ${b}`);
    return `Walk home with ${a} the ${b}`
    }
function unleashDog(a, b) {
    console.log(`Unleash ${a} the ${b}`);
    return `Unleash ${a} the ${b}`
  }

  const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

  function exerciseDog(a, b) {
    let arr = []
    for (let i = 0; i < routine.length; i++) {
        arr.push(routine[i](a,b));
    }
    return arr;
  }

