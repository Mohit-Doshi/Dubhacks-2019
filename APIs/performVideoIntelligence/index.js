/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

var request = require('request');
var querystring = require('query-string');

exports.callVideoIntelligence = (req, res) => {
  //let message = req.query.message || req.body.message || 'Hello World!';
  //res.status(200).send(message);


  let q = querystring.parse(req.query.message);
  console.log('q is : ', q);
  let fName = q.fileName;
  console.log(fName);
  var options = { method: 'POST',
  url: 'https://videointelligence.googleapis.com/v1/videos:annotate',
  qs: { key: 'AIzaSyDIqUagcJ8soNiDRN-57re3EwsiIV211vk' },
  headers: 
   {
     Host: 'videointelligence.googleapis.com',
	 'Content-Type': 'application/json' },
  body: 
   { inputUri: 'gs://dubhacks-input-videos/robberyvideo.mp4',
     features: [ 'FEATURE_UNSPECIFIED', 'LABEL_DETECTION' ],
     outputUri: 'gs://dubhacks-input-videos/results' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.status(200).send(response);
}); 
};

