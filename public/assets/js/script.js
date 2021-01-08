$(function () {

    // When the Devour button is clicked, update the devoured state and move the burger accordingly
    $(".devoured-btn").on("click", function (event) {
      const id = $(this).data("id");
      const newDevoured = $(this).data("devoured");
  
      const newDevouredState = {
        devoured: newDevoured
      };
  
      let currentURL = window.location.origin;
      $.ajax(currentURL + "/api/burgers/devoured/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(function () {
        console.log("changed devoured to", newDevoured);
        location.reload();
      });
    });
  
  
    // Add a new burger to the database
    $(".burger-form").on("submit", function (event) {
      event.preventDefault();
  
      if ($("#burger-name").val() === "") {
        console.log("Enter a burger name!");
      } else {
        const newBurger = {
          burger_name: $("#burger-name").val()
        };
  
        let currentURL = window.location.origin;
        $.post(currentURL + "/api/burgers", newBurger)
          .then(function (data) {
            console.log(data);
            location.reload();
          });
      }
    });
  
  
    // When the Clean Up button is clicked, delete the burger from the page/list of burger options
    $(".delete-btn").on("click", function () {
      const id = $(this).data("id");
  
      let currentURL = window.location.origin;
      $.ajax(currentURL + "/api/burgers/" + id, {
        type: "DELETE"
      }).then(function () {
        console.log(`id: ${id} is deleted!`);
        $(".devoured-burger" + id).remove();
      });
    });
  
});