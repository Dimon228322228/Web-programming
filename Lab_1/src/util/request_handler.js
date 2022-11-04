export class RequestHandler {
  static async getData( params ){
    const API_URL = "./backend/index.php";
    const map = new Map();
    const URLParams = new URLSearchParams({
      x: params.get('x'),
      y: params.get('y'),
      r: params.get('r')
    });
    return fetch( API_URL + "?" + URLParams).then( response => {
      if (response.ok) return response.text()} );
  }

  static async get_table_without_request(){
    const API_URL = "./backend/get_requests.php";
    return fetch( API_URL ).then( response => {
      if (response.ok) return response.text()} );
  }


  static async resetData(){
    const API_URL = "./backend/reset_session.php";
    const response = await fetch( API_URL );
  }
}