var Crawler = require("crawler");
let count = 0;
var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            if($("title").text() != 'Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more')
            console.log($("title").text());

            count ++;
 console.log( count);


        }
        done();
    }
});
 
// Queue just one URL, with default callback
setInterval(function(){
    
    c.queue('http://www.amazon.com');
},1);
 
// Queue a list of URLs
// c.queue(['http://www.google.com/','http://www.yahoo.com']);
 
// Queue URLs with custom callbacks & parameters
// c.queue([{
//     uri: 'http://parishackers.org/',
//     jQuery: false,
 
    // The global callback won't be called
//     callback: function (error, res, done) {
//         if(error){
//             console.log(error);
//         }else{
//             console.log('Grabbed', res.body.length, 'bytes');
//         }
//         done();
//     }
// }]);
 
// Queue some HTML code directly without grabbing (mostly for tests)