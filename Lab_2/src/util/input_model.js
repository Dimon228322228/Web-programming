import { x, y, r, table, count } from "../store.js";
import { get } from "svelte/store";
import { RequestHandler } from "./request_handler.js";
import { HitResult } from "./hit_result.js";

export class InputModel{
  constructor(){}

  requestData( vector, callback ){
    const request_map = new Map();
    request_map.set('x', vector.x);
    request_map.set('y', vector.y);
    request_map.set('r', get(r));
    this.setRows( RequestHandler.getData( request_map ), callback );
  }

  get_table_without_request( callback ){
    this.setRows( RequestHandler.get_table_without_request(), callback );
  }

  setRows( promise, callback ) {
    promise.then(( resultTextHTML ) => {
      const tableElement = document.createElement('table');
      tableElement.innerHTML = resultTextHTML;
      const valueRows = [];
      const xRow = tableElement.querySelectorAll('.x_table_value');
      const yRow = tableElement.querySelectorAll('.y_table_value');
      const rRow = tableElement.querySelectorAll('.r_table_value');
      const isHitRow = tableElement.querySelectorAll('.inShape_table_value');
      const current_time_table_value = tableElement.querySelectorAll('.current_time_table_value');
      const execution_time_table_value = tableElement.querySelectorAll('.execution_time_table_value');

      for (let i = 0; i < tableElement.rows.length; i++) {
          valueRows.push(new HitResult(
              (+(xRow[i]).innerText.trim()).toFixed(2),
              (+(yRow[i]).innerText.trim()).toFixed(2),
              (+(rRow[i]).innerText.trim()).toFixed(2),
              (isHitRow[i]).innerText.trim() === "true",
              current_time_table_value[i].innerText.trim(),
              execution_time_table_value[i].innerText.trim()
          ));
      }
      table.set( valueRows );
      tableElement.remove();
    }).then(() => {
      callback( get(table) );
    });
  }

  resetData(){
    RequestHandler.resetData();
    table.set([]);
    count.set(0);
  }


  get x (){
    return get(x);
  }

  get y (){
    return get(y);
  }

  get r (){
    return get(r);
  }

  set r ( value ){
    r.set( value );
  }

  get table (){
    return get(table);
  }

  set table ( value ){
    table.set( value );
  }
}

