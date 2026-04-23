// CHALLANGE 6 GENERATE THE SOFTCOPY OF AN ARRAY
// let popularTeas = ["green tea", "oolong tea", "chai"]
// popularTeas.unshift("black tea")
// let softCopyTeas = popularTeas
// console.log(softCopyTeas)
// popularTeas.push("matcha")
// console.log(softCopyTeas)
// console.log(popularTeas)

// CHALLANGE 7 GENERATE THE DEEP COPY(HARD COPY or SHALLOW COPY) OF AN ARRAY

// let topCities = ["Berlin", "Singapore", "New York", "Tokyo"]
// topCities.unshift("Copenhagen")
// let deepCopyCities = [...topCities]
// let deepCopyCities = topCities.slice();
// console.log(deepCopyCities)
// topCities.push("Hong Kong")
// console.log(deepCopyCities)
// console.log(topCities)
 
// CHALLANGE 8 MERGE TWO ARRAYS
// let europeanCities = ["Paris", "Rome"];
// let asianCities = ["Tokyo", "Bangkok"];
// let worldCities = europeanCities + asianCitiesy

// console. log(typeof worldCities);

// let europeanCities = ["Paris", "Rome"];
// let asianCities = ["Tokyo", "Bangkok"];
// let worldCities = [europeanCities, asianCities];
// console. log(worldCities);

// let europeanCities = ["Paris", "Rome"];
// let asianCities = ["Tokyo", "Bangkok"];
// let worldCities = europeanCities.concat(asianCities);

// console. log(worldCities);


//CHALLANGE 9 FIND THE LENGTH OF AN ARRAY

// let languages = ["JavaScript", "Python", "C++", "Java"];
// let length = languages.length;
// console.log(length)



/*CHALLANGE 10 You have an array named cityBucketList containing "Kyoto"', '"London"', '"Cape Town"', and "Vancouver". Check if '"London"' is in the array and store the result in a variable named `isLondonInList'.*/


// let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
// for(let i = 0; i < cityBucketList.length; i++){
//     if(cityBucketList[i] === "London"){
//         isLondonInList = true;
//     }  
// }
// console.log(isLondonInList)

// let cityBucketList = ["Kyoto", "London", "Cape Town",
// "Vancouver"] ;

// let isLondonInList = cityBucketList. includes("London");
// console. log(isLondonInList);