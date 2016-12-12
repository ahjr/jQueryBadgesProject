$(function() {
  // your code will go here
  jQuery.ajax({
    url: 'https://www.codeschool.com/users/iole.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      $.each(response.courses.completed, function(index, course) {
        var courseDiv = $('<div></div>').addClass("course");
      	$('<h3>'+course.title+'</h3>').appendTo(courseDiv);
      	$('<img src="'+course.badge+'""></img>').appendTo(courseDiv);
      	$('<a href="'+course.url+'" target="_blank" class="btn btn-primary">See Course</a>').appendTo(courseDiv);
        courseDiv.appendTo($("#badges"));
      });
    }
  });

});
