$(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBC6bgaeMJ_vVMkcAjhZU55nXapFuGSpVg",
        authDomain: "portfolio-imen.firebaseapp.com",
        databaseURL: "https://portfolio-imen.firebaseio.com",
        projectId: "portfolio-imen",
        storageBucket: "",
        messagingSenderId: "463003366448"
    };
    firebase.initializeApp(config);

    var database = firebase.database();


  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM

      // Check for white space in name for Success/Fail message
        database.ref().push({
            name: $("#name").val().trim(),
            email: $("#email").val().trim(),
            phone: $("#phone").val().trim(),
            message: $("#message").val().trim()

        });
        //trigger alert after saving info to database
        setTimeout(function(){ alert('successfully sent!'); }, 2000);
        $("#name").val('');
        $("#email").val('');
        $("#phone").val('');
        $("#message").val('');

    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
