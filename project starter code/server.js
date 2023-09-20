import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util.js';
import { URL } from 'url';  // Import the URL module for validation



  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

    /**************************************************************************** */

  //! END @TODO1
  
  app.get("/filteredimage", async (req, res) => {
    const imageUrl = req.query.image_url;
  
    if (!imageUrl) {
      return res.status(400).send("image_url is required");
    }
  
    // Check if the provided string is a valid URL
    try {
      new URL(imageUrl);
    } catch (e) {
      return res.status(400).send("Invalid image_url provided");
    }
  
    try {
      const filteredImagePath = await filterImageFromURL(imageUrl);
      
      res.sendFile(filteredImagePath, (err) => {
        if (err) {
          console.error("Error sending the file:", err);  // Log the error for debugging
          return res.status(500).send("Error sending the file");
        }
    
        deleteLocalFiles([filteredImagePath]);
      });
  
    } catch (error) {
      console.error("Error processing the image:", error);  // Log the error for debugging
      return res.status(422).send(`Unable to process the provided image url. Error: ${error.message}`);
    }
  });

  // Root Endpoint
  // Displays a simple message to the user
  app.get("/", (req, res) => {
    const exampleUrl = "https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg";
    const encodedExampleUrl = encodeURIComponent(exampleUrl);

    const link = `${req.protocol}://${req.get('host')}/filteredimage?image_url=${encodedExampleUrl}`;

    res.send(`try GET /filteredimage?image_url={{}}</br>try <a target="_blank" href="${link}">GET /filteredimage?image_url=${exampleUrl}</a>`);
  });



  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
