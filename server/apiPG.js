const axios = require("axios");
const url = "https://api-gate2.movieglu.com/";
const film = "The Florida Project";
const date = new Date();
const header = {
    client: "SPOT",
    "x-api-key": "gN9ddVokvL8h3tYy1jMcedp4IIjdR6b1NK9kYm50", 
    authorization: "Basic U1BPVF9YWDoxaGwxNkNQR090Z3A=",
    territory: "XX",
    "api-version": "v200",
    geolocation: "-22.0;14.0",
    "device-datetime": date.toISOString()
};


async function getFilm(title){
    const request = {
        url: "filmLiveSearch/",
        params: {
            query: title,
            n: 1
        },
        baseURL: url,
        headers: header
    };
    let response;
    await axios(request).then(res => response = res.data).catch(error => console.log("Error: ", error));
    console.log("Movie: ", response)
    return response;//.data.films[0].film_id;
}

async function getCredits(id){
    const request = {
        url: "filmDetails/",
        params: {
            film_id: id
        },
        baseURL: url,
        headers: header
    };
    let response;
    await axios(request).then(res => response = res.data).catch(error => console.log("Error: ", error));
    let Producers = response.producers.map(dude =>{
        return dude.producer_name;
    });
    let Actors = response.cast.map(dude =>{
        return dude.cast_name;
    });
    let Director = response.directors.map(dude =>{
        return dude.director_name;
    });
    let Writer = response.writers.map(dude =>{
        return dude.writer_name;
    });
    let Genre = response.genres.map(dude =>{
        return dude.genre_name;
    });
    let Poster = response.images.poster["1"].medium.film_image;
    let rating = () => {
        let rating = response.age_rating[0].rating;
        switch(rating){
            case "U ":
                rating = "G";
                break;
            case "PG ":
                rating = "PG";
                break;
            case "12A ":
            case "12 ":
                rating = "PG-13";
                break;
            case "15 ":
                rating = "R";
                break;
            case "18 ":
                rating = "NC-17";
            case "R18 ":
                rating = "Dude this is straigh up porn. Who reviewed?";
                break;
            default:
                rating = "I have no idea";
        }
        return rating;
    }
    return {
        Title: response.film_name,
        Year: response.release_dates[0].release_date.substring(0,4),
        Producers,
        Actors,
        Director,
        Writer,
        Genre,
        Poster,
        Rated: rating()
    };
}

async function main(){
    let id = await getFilm(film);
    // let data = await getCredits(id);
    console.log("W/ credits: ", id);
}

main()
// getFilm(film).then(data => console.log("w/ data 3 : ", data));
// axios(header).then(res => console.log("Try 5: ", res.data)).then(console.log("Finished")).catch(error => console.log(error));