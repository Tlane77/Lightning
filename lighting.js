const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

// Dot notation for key access all for practice dimensions + details
console.log(`The Empire State Building is ${empireStateBuilding.stories} stories.`)
console.log(`The Empire State Building is ${empireStateBuilding.height} feet high.`)
console.log(`The Empire State Building is located at ${empireStateBuilding.address}.`)
console.log(`The Empire State Building is ${empireStateBuilding.squareFeet} square feet.`)
console.log(`The Empire State Building was constructed in ${empireStateBuilding.constructionDate}.`)
console.log(`The Empire State Building cost $ ${empireStateBuilding.cost}.00 dollars to build.`)
console.log(`The Empire State Building is owned by ${empireStateBuilding.owner}.`)
console.log(`The Empire State Building has an East-West Latitude of ${empireStateBuilding.eastWestLength}.`)
console.log(`The Empire State Building has an East-West Latitude of ${empireStateBuilding.northSouthLength}.`)
console.log(`The Empire State Building is designed by ${empireStateBuilding.owner}architectural firm.`)

// Square bracket notation for key access 5 details
console.log(empireStateBuilding["address"])
console.log(empireStateBuilding["constructionDate"])
console.log(empireStateBuilding["cost"])
console.log(empireStateBuilding["owner"])
console.log(empireStateBuilding["architect"])

// object example
const kennel = {
    name: "Nashville North Kennels",
    address: "100 Demonbreun Road",
    manager: "Harper Frankstone",
    capacity: 50,
    currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
}

// Pull a single object out, Remember Arrays start with Zero.

console.log(kennel.currentAnimals[3])

    > "Jacks"

    //Object pull exercise
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
// How to make them red letters
const currentinstructors = nashvilleSoftwareSchool.instructors

for (let i = 0; i < nashvilleSoftwareSchool.instructors.length; i++) {
    console.log(nashvilleSoftwareSchool[i])
}



console.log(nashvilleSoftwareSchool.instructors.partTime)
console.log(nashvilleSoftwareSchool.instructors.fullTime)




const partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime

for (let i = 0; i < partTimeInstructors.length; i++){
    console.log(partTimeInstructors[i])

    const fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime

    for (let i = 0; i < fullTimeInstructors.length; i++) {
        console.log(fullTimeInstructors[i])
        
    }


}
console.log(nashvilleSoftwareSchool.instructors[0, 4])

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
// How do I make a sentence to look like this one below? What do I ask google how to pull object from series? How to add object to string using....?
// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Mystery Tour Album.

console.log(`${beatles.members[1].name} was in the Beatles from 1960 to 1970. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Tour Album.`)
    

















