export class RequestHandler {
  static async getData( params ){
    const map = new Map();
    const URLParams = new URLSearchParams({
      x: params.get('x'),
      y: params.get('y'),
      r: params.get('r')
    });
    return fetch( "controller?" + URLParams).then( response => {
      if (response.ok) return response.json()} );
  }

  static async get_table_without_request(){
    const URLParams = new URLSearchParams({
      getAllData: 1,
    });
    return fetch( "controller?" + URLParams ).then( response => {
      if (response.ok) return response.json()} );
  }


  static async resetData(){
    const URLParams = new URLSearchParams({
      clear: 1,
    });
    const response = await fetch( "controller?" + URLParams );
  }
}