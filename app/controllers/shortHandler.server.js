var ShortUrl = require('../models/shortUrl');

var Id = Math.floor(Math.random()*9000+1000);

module.exports = function ShortHandler(){
//     this.createNew = function(req,res){
//         var origin = req.params.url;
//         ShortUrl.findOne({'original':origin},function(err,result){
//     if(err) throw err;
//     if(result) {
//      res.write('has existed.');
//      res.end();
//     }else{
   
//      var n = 0;
//         var findID = function(id){
//             ShortUrl.findOne({'short':id},function(err,short){
//                 if(err) throw err;
//                 if(short){
//                     Id = Math.floor(Math.random()*9000+1000);
//                     n++;
//                     if(n>10) return 0;
//                     findID(Id);
//                 }else{
//                     return id;
//                 }
//             })
//         }
        
//             var id = findID(Id);
//                 if(id){
//                      var short = new ShortUrl();
//                     short.original = origin;
//                     short.short = id;
//                     short.save(function(err){
//                         if(err) throw err;
//                     });
//                     res.write('has established.');
//                     res.end();
//                 } else{
//                     res.write('try again.');
//                     res.end();
//                 }  
//     }
// })
//     };

    this.createNew = function(req,res){
        var origin = req.params[0];
        var newShort= new ShortUrl();
        var short =Math.floor( Math.random()*1000+1000);
        newShort.original = origin;
        newShort.short = short;
        newShort.save();
        res.write('you have redirect : '+origin+' To: '+short);
        res.end();
    };
    
    
    this.redirect = function(req,res){
        console.log(req.params.short);
        var id = parseInt(req.params.short);
        if(id){
        ShortUrl.findOne({'short':id},function(err,result){
            if(err) throw err;
            if(result){
                var origin = result.original;
                console.log(origin);
                res.redirect(origin);
            }else{
                res.write('has not beend defined.');
                res.end();
            }
        })
        }else{
            res.write('you must enter a number.');
            res.end();
        }
    }
    
};



