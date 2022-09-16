import {Application } from "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/6.5.2/browser/pixi.mjs";
import { start as gameStart} from "./js/game.mjs";
import { loadAssets } from "./js/loader.mjs";

export function createGame(div) {
    const game = new Application({
        width:innerWidth+10,
        height:innerHeight+100,
        // backgroundColor:0x2266FF,
        transparent:true,
    });
    console.log('game', game);
    div.appendChild(game.view);
    return game;
}

const game = createGame(document.getElementById('game'));
loadAssets(game,[
    { name: "back", url: "./assets/back2.jpg" },
    { name: "front", url: "./assets/carddeck.png" },
  ], () => {
    console.log('starting game');
    gameStart(game);
  });