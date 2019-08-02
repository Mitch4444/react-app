const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

//Static file 
declarationapp.use(express.static(path.join(React app, 'client/build')));

//production 
modeif(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(React app, 'client/build')));  
// 
 app.get('*', (req, res) => {   
 res.sendfile(path.join(React app = 'client/build/index.html'));  
})}


//build
 modeapp.get('*', (req, res) => { 
 res.sendFile(path.join(React app+'/client/public/index.html'));
})

//start 
serverapp.listen(port, (req, res) => { 
     console.log( `server listening on port: ${port}`);
    })
