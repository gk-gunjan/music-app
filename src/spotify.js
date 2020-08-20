//https://developer.spotify.com/
//documentation/web-playback-sdk/quick-start/#

export const authEndpoint =
"https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId ="aa3efd3c239042db80b6411fcf22b750";

const scopes =[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]; //restrict the user what user can do to the spotify app as here is not delete option so user cant delete the song which is on spotify

export const getTokenFromUrl =() => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item) =>{ //if you dont understand this read the reduce function first
        let parts  =item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial;
    },{}); //here we are acessing or pulling the accesstoken which we fetch from url of localhost
}

export const loginUrl =`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
    )}&response_type=token&show_dialog=true`;