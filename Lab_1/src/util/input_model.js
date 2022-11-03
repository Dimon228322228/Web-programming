import { x, y, r } from "../store.js";
import { get } from "svelte/store";
import { RequestHandler } from "./request_handler.js";

export class InputModel{
  constructor(){}

  get x (){
    return get(x);
  }

  get y (){
    return get(y);
  }

  get r (){
    return get(r);
  }

  getData(){
    const request_map = new Map();
    request_map.set('x', get(x));
    request_map.set('y', get(y));
    request_map.set('r', get(r));
    return RequestHandler.getData( request_map );
  }

  resetData(){
    RequestHandler.resetData();
  }
}

