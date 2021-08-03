require('aws-sdk').config.update({ region: 'us-east-1' });
const mysql = require('mysql'); 

const dbConnectionUrl = process.env.DB_CONNECTION_URL; 
const dbUser = process.env.DB_USER; 
const dbPassword = process.env.DB_PASSWORD; 
const dbName  = process.env.DB_NAME; 

const connection = mysql.createConnection({
  host: dbConnectionUrl,
  user: dbUser,
  password: dbPassword,
  database: dbName
});


// Handler for Lambda event
const hello = (event: any, _context: any, callback: any): void => {
  let request = JSON.parse(event.body); 
  console.info("Event Received: The nexline should say test:"); 
  console.info(request.message); 
  callDatabase(request);
  // Input validation example -- expects JSON to be POSTED
  if (!event.body) {
    console.log("invalid request format provided");
    return callback(null, createResponseObject(400, { "message": "[400] Error!  invalid request body!" }));
  }
  // Do logic
  let successfullExecution = true;
  let err = {}; // the Error if something broke
  let data = request;  // The response if something worked

  if (!successfullExecution) {
    callback(null, createResponseObject(500, { "message": "[500] Error!", err }));
  } else {
    callback(null, createResponseObject(200, { "message": "[200] Success!", data }));
  }

}


const callDatabase = (input: any) : void => {
  if(!input) {
  connection; 
  }


}

const tryParseJSON = (jsonString: string): any => {
  try {
    let o = JSON.parse(jsonString);
    console.log(o);

    if (typeof o === "object") {
      return o;
    }
  }
  catch (e) {
    console.log(e);
  }

  return false;
}

const createResponseObject = (statusCode: number, body: any): any  => {
  const response = {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(body),
  };

  console.log("assembled response: " + JSON.stringify(response));
  return response;
}

export { hello, tryParseJSON, createResponseObject};
