(function() {
  'use strict'; 


//Input from user

var searchTerm = '';
var beginDate = 0;
var endDate = 0;
var numResults = 0;

function search(){



var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "d20e3e965a6e439187a9e32695566dfc",
  'q': searchTerm,
  'begin_date': beginDate,
  'end_date': endDate
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

}

 

}()); 