# liri-node-app
LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data. The user has the option of using four commands in conjuntion with specific parameters associated with the commands. The Commands are:

Liri Node Commands:
1. concert-this
2. spotify-this-song
3. movie-this
4. do-what-it-says

When running a command follow it by desired text/search.
For Example: 

node liri.js movie-this The Last of the Mohicans

When concert-this command is used the following information will be returned:
1. Name of the venue
2. Venue location
3. Date of the Event

When spotify-this-song command is used the following information will be returned:
1. Artist(s)
2. The song's name
3. A preview link of the song from Spotify
4. The album that the song is from
If no song is provided then your program will default to "The Sign" by Ace of Base.

When movie-this command is used the following information will be returned:
1. Title of the movie.
2. Year the movie came out.
3. IMDB Rating of the movie.
4. Rotten Tomatoes Rating of the movie.
5. Country where the movie was produced.
6. Language of the movie.
7. Plot of the movie.
8. Actors in the movie.
If the user doesn't type a movie in, the program will return information for the movie 'Mr. Nobody.

When do-what-it-says command is run:
A random.txt file with search for spotify-this-song "We Are the Champions." This will give you the spotify results of "We are the Champions"

Technologies Used
JavaScript
Node.js
Spotify API
Bands in Town API
OMDB API

Video:
The following video demonstrates six different cases using the liri node app and was captured using Screencastify. The liri-node-app commands demonstrated are as follows:
1. spotify-this-song (with song name)
2. concert-this
3. movie-this (with movie name)
4. do-what-it-says
5. movie-this (with no movie entered so as information for the default movie, "Mr. Nobody" is retrieved)
6. spotify-this-song (with no song name entered so as information for the default song, "We are the Champions" is loaded)
To view the video demonstration of the liri-node-app, follow the link below and choose video player for Google. 
https://drive.google.com/file/d/1ybhquDhCVrYTho7IwVF5tXpIObqP7Wy8/view

