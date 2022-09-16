import {
    Sprite,
    Texture,
    Rectangle,
    Container,
  } from "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/6.5.2/browser/pixi.mjs";
  import { getTextureById } from "./loader.mjs";
  
  let cardFrames = [];
  let w = 148.5;
  let h = 204.5;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      cardFrames.push([i * w, j * h, w, h]);
    }
  }
  
  export const FRAMES = shuffle(cardFrames);
  export const WIDTH = w;
  export const HEIGHT = h;
  
  export function getCard(id, frame) {
    console.log("card ", id, frame);
    let isClicked = false;
    const container = new Container();
    const back = Sprite.from(getTextureById("back"));
    back.width = w;
    back.height = h;
    back.visible = true;
    container.addChild(back);
    const smily = new Texture(getTextureById("front"), frame);
    const front = Sprite.from(smily);
    front.visible = false;  
    container.addChild(front);
    back.buttonMode = true;
    back.interactive = true;
    back.on("pointerup", () => {
      isClicked = true;
      back.visible = false;
      front.visible = true;
    });
    return {
      id,
      view: container,
      isOpen: () => {
        return isClicked;
      },
      reset: () => {
        isClicked = false;
        back.visible = true;
        front.visible = false;
      },
    };
  }
  
  // export function shuffle(array) {
  //   array.sort(() => Math.random() > 0.5);
  //   return array;
  // }
  export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }