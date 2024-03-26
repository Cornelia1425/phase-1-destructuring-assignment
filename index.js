const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};



// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
//const farmAnimals = 'cow horse sheep pig chicken';
/* const animalSounds ={
  cow: "moo",
  horse: "neigh",
  sheep: "baa",
  pig: "oink",
  chicken: "cluck"
} */
//const [cowSound, horseSound, sheepSound, pigSound, chickenSound] = Object.values(animalSounds);

/* const dogsName = 'Sir Woody BarksALot';
const [title, firstName, lastName] = dogsName.split(' '); */
// we turn the string into an array by split, then declared an array and assign value to the array we created.
console.log(farmAnimals.split(' '))
// [ 'cow', 'horse', 'sheep', 'pig', 'chicken' ]
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ')
//animalSound = [moo, neigh, baa, oink, cluck]
console.log(moo)


// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// const animalarray = farmAnimals.split(' ')
// function removehorse(){
//   const newanimals = [...animalarray.slice(0, 1), ...animalarray.slice(2)]
//   console.log("newanimals: ",newanimals)
//   const [bessie, dolly, babe, little] = newanimals
//   console.log(bessie, dolly, babe, little)
// }
// removehorse()

const animalarray = farmAnimals.split(' ')
const [bessie, dolly, babe, little]= [...animalarray.slice(0, 1), ...animalarray.slice(2)]

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

const [blackAndWhite, black, pink]= [...animalarray.slice(0, 1), ...animalarray.slice(2,4)]

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const [red, orange,yellow, green, blue, indigo, violet] = colors


// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
//const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// console.log("colors.pop(): ", colors.pop())
// console.log("colors.slice(-1): ", colors.slice(-1))
console.log("remove the [5] element: ", [...colors.slice(0,5),...colors.slice(6)])
const [r, o,y, g, b, v] = [...colors.slice(0,5),...colors.slice(6)]

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
// console.log("only the [5] element: ", colors.slice(5,6)[0])
// const indg = colors.slice(5,6)[0]

const indg = colors[5]
// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

/* const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
}; */

const {muppetName,color, song,job,partner} = muppet
console.log("muppetName,color, song,job,partner: ", muppetName,color, song,job,partner)

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner


/* const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
 */

const {song2} = nestedMuppet.album.theMuppetMovie
const {song4} = nestedMuppet.album.theMuppetMovie
const {nestedJob} = nestedMuppet
const {nestedPartner} = nestedMuppet

console.log("song2, : ",song2 )

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// slice() does not modify the original array, it only creates a new array
// splice() method modifies the original array in place.
/*

const array0 = [1, 2, 3, 4, 5];
console.log("[...array0.splice(0, 1),...array0.splice(2)]:", [...array0.splice(0, 1),...array0.splice(2)]) //[1,4,5]
//what does  [...array0.splice(0, 1),...array0.splice(2)] do to const array0 = [1, 2, 3, 4, 5]?

const array1 = [1, 2, 3, 4, 5];
console.log("[...array1.slice(0, 1),...array1.slice(2)]: ", [...array1.slice(0, 1),...array1.slice(2)]) //[1,3,4,5]


const array5 = [1, 2, 3, 4, 5];
console.log("array5.slice(1): ", array5.slice(1)) //[2,3,4,5]
console.log("array5: ", array5) //[2,3,4,5]

const array2 = [1, 2, 3, 4, 5];
console.log("array2.splice(1): ", array2.splice(1)) //[2,3,4,5]
console.log("array2: ", array2) //[2,3,4,5]

const array3 = [1, 2, 3, 4, 5];
console.log("array3.slice(1, 2): ", array3.slice(1, 2)) // output [2] first element inclusive, second element exclusive
console.log("array3",array3) 

const array4 = [1, 2, 3, 4, 5];
console.log("array4.splice(0, 1): ",array4.splice(0, 1)) // output [2,3]
console.log("array4: ",array4); // Output: [1, 3, 4, 5]
*/


//https://learning.flatironschool.com/courses/7589/assignments/276308?module_item_id=670197