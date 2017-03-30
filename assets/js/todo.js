// check off item when clicked
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// click to delete item
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).parent().remove();
  });
  event.stopPropogation();
});

// add an item
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    var newItem = $(this).val();
    $(this).val("");
    $("ul").append("<li><span class='hoverTarget'><span class='remove'><i class='fa fa-minus'></i></span> </span>" + newItem + "</li>")
  }
});

// click to add new item
$(".fa-plus").on("click", function() {
  $("input[type='text']").fadeToggle();
})