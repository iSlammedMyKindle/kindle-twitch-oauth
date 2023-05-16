import authenticateTwitch from "./index.js";
import fs from "fs";

async function configFileExists(){
    return new Promise(async (res, rej)=>{
        fs.readFile(process.argv[process.argv.length-1],(err, data)=>{
            if(err) rej(err);
            res(JSON.parse(data));
        });
    });
}

async function twitchGotAuthenticated(){
    const res = await authenticateTwitch(configFile.twitch, configFile.https);
    
    console.log(res);
    console.assert(
        //things to check for
        res.accessToken &&
        res.expiresIn &&
        res.refreshToken &&
        res.scope.length &&
        res.tokenType,
        //If not correct, display error message
        "Failed to authenticate twitch"
    );
}

//Always run first
const configFile = await configFileExists();

console.assert(configFile.twitch, "The config file must at least have the 'twitch' key");

if(!configFile.twitch) throw(new Error("config file not valid"));
// else console.log(configFile);

//Unit testing starts here
twitchGotAuthenticated();