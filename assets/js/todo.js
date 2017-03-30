$(document).ready(function() {

  var inputContainer = $("#input-container");
  var inputBox = $("input[type='text']");

  // FUNCTIONS

  function showInputBox(event) {
    event.stopPropagation();

    if (inputContainer.is(":visible")) {
      saveListItem();
    }
    else {
      inputContainer.slideDown(150);
      inputBox.focus();
    }
  }

  function hideInputBox(event) {
    if (this.id != "list-container") {
      if (inputContainer.is(":visible")) {
        inputContainer.slideUp(150);
     }
    }
  }

  function crossOffListItem() {
    $(this).toggleClass("completed");
  }

  function saveListItem() {
    var newItem = inputBox.val();
    inputBox.val("");
    $(".list").append("<div class='item' id='new-item'><div class='item-content'><div class='hover-target'><div class='remove'><i class='fa fa-minus'></i></div> </div><div>" + newItem + "</div></div></div>");
    
    $("#new-item").slideDown(150);
    $("#new-item").removeAttr("id");
  }

  function deleteListItem(event) {
    event.stopPropagation();

    $(this).parent().parent().slideUp(150, function() {
      $(this).remove();
    });

    inputBox.focus();
  }

  // DOCUMENT CONTROL

  $(".fa-plus").on("click", showInputBox);

  $(document).on("click", hideInputBox);

  // block propagation of clicks inside input box
  inputBox.click(function(event) {
    event.stopPropagation();
  });

  $(".list").on("click", ".item", crossOffListItem);

  inputBox.keypress(function(event) {
    if (event.which === 13) {
      saveListItem();
    }
  });

  $(".list").on("click", ".remove", deleteListItem);

});

