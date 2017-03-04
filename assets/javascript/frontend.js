
  $('#search-btn').on('click', function(e){
  	// searchTerm, beginDate, endDate, numResults
  	e.preventDefault();
  	var searchTerm = $('#search').val();
  	var beginDate = parseInt($('#start-year').val());
  	var endDate = parseInt($('#end-year').val());
  	var numResults = parseInt($('#num-records').find('option:selected').attr('value')); 

  	console.log(searchTerm, beginDate, endDate, numResults);
  	search(searchTerm, beginDate, endDate, numResults);
  });

