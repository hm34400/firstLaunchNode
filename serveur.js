var express = require('express');
var appli = express();

appli.get('/',function (request,response){
   response.sendFile(__dirname+'views/index.html'); 
}
        );
appli.get(
    '/user',
    function (request,response){
        var retour = {
            nom : "michel",
            prenom : "robert"
        };
        response.json(retour); 
});

appli.listen(3000,function () {
    console.log('il ecoute rien du tout');
});