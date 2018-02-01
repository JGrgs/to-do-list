var $input = $("#todo")
var $list = $(".list")
var newToDo
var addBtn = $(".btn")

$( ".form" ).submit(function( event ) {
    newToDo = $input.val();
    event.preventDefault();
    newToDo = $input.val("");

    var $newItem = $("<p>");
    // $newItem.text(newToDo);
    $list.prepend($newItem)

    var $pInput = $('<input type="checkbox">');
    $newItem.prepend($pInput);

    var $piOne = $('<i class="glyphicon glyphicon-star"></i>');
    $newItem.append($piOne);

    var $pSpan = $("<span>");
    $pSpan.text(newToDo);
    $newItem.append($pSpan)

    var $piTwo = $('<i class="glyphicon glyphicon-remove"></i>');
    $newItem.append($piTwo);
  });

