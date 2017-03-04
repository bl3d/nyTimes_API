(function() {
  'use strict'; 


//Input from user

var searchTerm = 


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "d20e3e965a6e439187a9e32695566dfc",
  'q': "soccer",
  'begin_date': "20170304",
  'end_date': "20170304"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;

   console.log(result);
});

 

}()); 