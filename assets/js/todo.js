$(document).ready(function() {

  $(".fa-plus").on("click", showInputBox);

  $(document).on("click", hideInputBox);

  // block propagation of clicks inside input box
  $("input[type='text']").click(function(event) {
    event.stopPropagation();
  })

  $("ul").on("click", "li", crossOffListItem);

  $("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
      saveListItem();
    }
  });

  $("ul").on("click", ".remove", deleteListItem);

});

function showInputBox(event) {
  event.stopPropagation();

  if ($("#input-container").is(":visible")) {
    saveListItem();
  }
  else {
    $("#input-container").slideDown(150);
    $("input[type='text']").focus();
  }
}

function hideInputBox(event) {
  if (this.id != "list-container") {
    if ($("#input-container").is(":visible")) {
      $("#input-container").slideUp(150);
   }
  }
}

function crossOffListItem() {
  $(this).toggleClass("completed");
}

function saveListItem() {
  var newItem = $("input[type='text']").val();
  $("input[type='text']").val("");
  $("ul").append("<li id='new-item'><span class='hover-target'><span class='remove'><i class='fa fa-minus'></i></span> </span>" + newItem + "</li>");
  
  $("#new-item").slideDown(150);
  $("#new-item").removeAttr("id");
}

function deleteListItem(event) {
  event.stopPropagation();

  $(this).parent().parent().slideUp(150, function() {
    $(this).remove();
  });

  $("input[type='text']").focus();
}