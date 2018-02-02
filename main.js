var $input = $("#todo")
var $list = $(".list")
var newToDo
var $addBtn = $(".btn")
var $checkBox = $(".check-box")
var $star = $(".glyphicon-star");
var $remove = $(".glyphicon-remove")

$( ".form" ).submit(function( event ) {
    newToDo = $input.val();
    event.preventDefault();
    $input.val("");

    var $newItem = $("<p>");
    // $newItem.text(newToDo);
    $list.prepend($newItem)

    var $pInput = $('<input class ="check-box" type="checkbox">');
    $newItem.prepend($pInput);

    var $piOne = $('<i class="glyphicon glyphicon-star"></i>');
    $newItem.append($piOne);

    var $pSpan = $("<span>");
    $pSpan.text(newToDo);
    $newItem.append($pSpan)

    var $piTwo = $('<i class="glyphicon glyphicon-remove"></i>');
    $newItem.append($piTwo);

    $checkBox = $('.check-box')
    $star = $('.glyphicon-star')
    $remove = $(".glyphicon-remove")
    $checkBox.on('click', boxChecked)
    $star.on('click', starBtn)
    $remove.on('click',fadeItem)
  });

  function boxChecked(){
      if (this.checked === true) {
          var strike = $(this).siblings("span")
          strike.css({textDecoration: "line-through"})
      } else {
         var strike = $(this).siblings("span")
          strike.css({textDecoration: "none"})
      }
      
  }

  $checkBox.on("click", boxChecked);

  function starBtn () {
      if ($(this).css("color") !== "rgb(255, 215, 0)") {
       $(this).css({color: "rgb(255, 215, 0)"})
  } else {
      $(this).css({color: "rgb(71, 62, 57"})
  } }


  $star.on("click", starBtn)

  function removeItem () {
      $(this).remove()
  }


  function fadeItem () {
      $(this).parent().fadeOut(3000, removeItem)
  }

  $remove.on("click", fadeItem)

