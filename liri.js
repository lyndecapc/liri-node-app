// DEPENDENCIES
// =====================================

// Read and set environment variables
require("dotenv").config();

// Import the API keys
var keys = require("./keys");

// Import the node-spotify-api NPM package.
var Spotify = require("node-spotify-api");

// Import the axios npm package.
var axios = require("axios");

// Import the moment npm package.
var moment = require("moment");

// Import the FS package for read/write.
var fs = require("fs");

// Initialize the spotify API client using our client id and secret
var spotify = new Spotify(keys.spotify);


var command = process.argv[2]
var searchTerm = process.argv.slice(3).join(" ")

// FUNCTIONS
// =====================================

// Writes to the log.txt file
var writeToLog = function (data) {

  /** FIXME: BONUS (DONT DO THIS YET)
   * 
   * 

      In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.

      Make sure you append each command you run to the log.txt file.

      Do not overwrite your file each time you run a command.
    */

  // Append the JSON data and add a newline character to the end of the log.txt file

};

// Helper function that gets the artist name
var getArtistNames = function (artist) {
  return artist.name;
};
var command = process.argv[2];

// Function for running a Spotify search
var getMeSpotify = function (songName) {
  if (songName == "") {
    songName = "We are the Champions";
  };
  spotify.search({
      type: "track",
      query: songName
    },
    //capture any errors and output them to the console
    function (err, data) {
      if (err) {
        console.log("Error occured: " + err);
        return;
      }
      // output the response data from Spotify
      var songList = data.tracks.items;
      if (songList.length === 0) {
        console.log("No Results Found");
      } else {
        for (var i = 0; i < songList.length; i++) {
          console.log(i);
          console.log("Artist(s): " + songList[i].artists.map(getArtistNames));
          console.log("Song Name: " + songList[i].name);
          console.log("Preview Song: " + songList[i].preview_url);
          console.log("Album: " + songList[i].album.name);
          console.log("--------------------------------");
        }
      }
    }
  );
};

// Function for concert search
var getMyBands = function (searchTerm) {

  var queryURL = "https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp";

  axios.get(queryURL).then(


    function (response) {
      var jsonData = response.data;

      console.log(jsonData)
      console.log(jsonData[0].venue)

      for (let i = 0; i < jsonData.length; i++) {
        console.log("venue:", jsonData[i].venue.name)
        console.log("location:", jsonData[i].venue.city + " " + jsonData[i].venue.country)
        console.log("Date:", moment(jsonData[i].datetime, "YYYY-MM-DD").format("MM/DD/YYYY"))
        console.log("----------------------------------------\n")
      }
    }
  );
};

// Function for running a Movie Search
// var getMeMovie = function (movieName) {
//   if (movieName === "") {
//     movieName = "Mr Nobody";
//   };

//   var urlHit = "CREATE-THE-URL-HERE";

//   axios.get(urlHit).then(
//     function (response) {
//       var jsonData = response.data;
//     }
//   );
// };


function getMyMovie(searchTerm) {
  if (searchTerm === "") {
    searchTerm = "Mr Nobody";
  };

  console.log("http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy")
  axios.get("http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy").then(function (response) {

    console.log("Title:", response.data.Title)
    console.log("Year:", response.data.Year)
    console.log("imdbRating:", response.data.imdbRating)
    console.log("Rotten Tomatoes:", response.data.Ratings[1].Value)
    console.log("Country:", response.data.Country)
    console.log("Language:", response.data.Language)
    console.log("Plot:", response.data.Plot)
    console.log("Actors:", response.data.Actors)
  })
}

// Function for running a command based on text file
function getDoWhatItSays() {

  fs.readFile("./random.txt", "utf8", function (err, data) {

    var fileData = data.split(",")
    command = fileData[0]
    searchTerm = fileData[1]
    pick(command, searchTerm)
  })

}

// Function for determining which command is executed
var pick = function (command, searchTerm) {
 // This will be the main function to control which method to call. See function "runThis" is calling this pick method
  switch (command) { 
    case "spotify-this-song": 
      getMeSpotify(searchTerm) 
      break;
    case "concert-this":
      getMyBands(searchTerm);
      break;
    case "movie-this":
      getMyMovie(searchTerm);
      break;
    case "do-what-it-says":
      getDoWhatItSays();
    default:
      break;
  }
};

// Function which takes in command line arguments and executes correct function accordingly
var runThis = function (command, searchTerm) {
  pick(command, searchTerm);
};

// MAIN PROCESS
// =====================================
runThis(command, searchTerm);