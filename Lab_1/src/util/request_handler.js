export class RequestHandler {
  static async getData( params ){
    const API_URL = "./backend/index.php";
    const map = new Map();
    fetch( API_URL + "?" + new URLSearchParams({
      x: params.get('x'),
      y: params.get('y'),
      r: params.get('r')
    })).then( (response) => {
      map.set('isOk', response.ok);
      map.set('data', response.text());
    });
    return map;
  }

  static async resetData(){
    const API_URL = "./backend/reset_session.php";
    const response = await fetch( API_URL );
    return response.ok; 
  }
}