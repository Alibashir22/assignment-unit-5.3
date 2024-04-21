console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
const myCollection = []

function addToCollection(collection, title, artist, yearPublished) {
  // your code here...
  const album = {
 title: title, 
 artist: artist,
 yearPublished: yearPublished   
  }
  // add new album to the collection using push
 collection.push(album) 
 return album
}

addToCollection(myCollection,"unavailable","Davido",2023)
addToCollection(myCollection,"mr money","Asake",2023)
addToCollection(myCollection,"city boy","burna boy",2023)
addToCollection(myCollection,"superstar","wizkid",2011)
addToCollection(myCollection,"sos","omaley",2022)
addToCollection(myCollection,"understand","omaley",2022)
console.log(myCollection)

function showCollection(collection) {
// loop through all the albums and consol log album imformation
collection.map((album)=>console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`))  
}
showCollection(myCollection)

function findByArtist(collection,artist){
let searchresult = []
searchresult = collection.filter((album)=>album.artist===artist)
return searchresult
}
console.log(findByArtist(myCollection,"Davido"))
console.log(findByArtist(myCollection,"wizkid"))
console.log(findByArtist(myCollection,"sharma boy"))
// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
