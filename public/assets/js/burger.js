// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    console.log(id);
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured
    };

    if (newDevouredState.devoured === false) {
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(function() {
          console.log("changed devoured to", newDevoured);
          location.reload();
        }
      )
      // .catch(function(err) {
      //   console.log("Error in the PUT request: " + err)
      // });
    } else {
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
        data: newDevouredState
      }).then(function() {
          console.log("changed devoured to", newDevoured);
          location.reload();
        })
      //   .catch(function(err) {
      //   console.log("Error in the DELETE request: " + err);
      // });
    } 

  }); // END ON CLICK

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
