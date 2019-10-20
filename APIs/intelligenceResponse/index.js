/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
/*exports.returnResponse = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello World!';
  res.status(200).send(message);
};*/

const escapeHtml = require('escape-html');

'use strict';
	var http = require('http');
    const Storage = require('@google-cloud/storage');
    const storage = new Storage.Storage();
	let jresp = ''; 
    exports.returnResponse = (req, res) => {
           // console.log('Reading File');
            var archivo = storage.bucket('dubhacks-input-videos').file('results').createReadStream();
           // console.log('Concat Data');
            var  buf = '';
            archivo.on('data', function(d) {
              buf += d;
            }).on('end', function() {
              console.log('This is the api response lok at it\n\n',buf);
              res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
              res.setHeader('Content-Type', 'application/json');
			  res.setHeader('Access-Control-Allow-Origin', '*');
              res.status(200).send(buf);
            });
      
      		
		}