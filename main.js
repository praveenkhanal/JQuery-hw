// name
console.log(fdsfasfs);
$('document').ready(function (){
	var nameError = $('#name').on('blur',function()){
		$('#name').addClass('error');
		$('#error-name').text('please enter your full name!');
			}
});
//email

	var emailError = $('#email').on('blur'.function()){
		$('#email').addClass('error');
		$('#error-email').text('please enter an email address!');

	}; 
  //subject
  var subjectError = $('#subject').on('blur'.function()){
  	$('#subject').addClass('error');
  	$('error-subject').text('please enter a subject');
  };
  // message
  var messageError = $('#message').on('blur'.function()){
  	$('#message').addClass('error');
  	$('error-message').text('please enter a message!');
  };
  //prevent default .

	  // $(document).ready(function(){
	  //   $("form").click(function(event){
	  //       event.preventDefault();
	  //   });
	
	//another method for prevent default.
	$('.contact form').on('submit', function(event){
		event.preventDefault();
	});