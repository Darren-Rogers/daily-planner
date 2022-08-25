//Displays the current time and date under the heading
var currentTime = $('#currentDay').html(moment().format('LT MMMM Do, YYYY'));
//for loop creates a row with a time, input area and save button for the business hours in a day(9-5)
//if/else statesments check the current time and color code the input areas to display if the hours are past, present or in the future 
for (var i = 9; i <= 17; i++) {
    var parentEl = $('<div class="row" data-id="' + i + '">');
    var idEl = $('<div class="col 1">' + i + '</div>');
    var textEl = $('<textarea class="col-10 activity">');
    var buttonEl = $('<button class="col-1 save" >Save</button>');
    parentEl.append(idEl, textEl, buttonEl);
    $('.container').append(parentEl)
    if (moment().hour() === i) {
        textEl.addClass('present')
    }
    if (moment().hour() < i) {
        textEl.addClass('future')
    }
    else {
        textEl.addClass('past')
    }
}
//when the save button is click the time and activity entered are saved to local storage
$('.container').on('click', '.save', function () {
    var parentId = $(this).parent().attr('data-id');
    var toDo = $(this).prev().val();
    localStorage.setItem(parentId, toDo);
})
//items saved to local storage are retrieved and stay on the page when refreshed
$('.activity').each(function(){
    var parentId = $(this).parent().attr('data-id');
    var getToDo = localStorage.getItem(parentId);
    $(this).text(getToDo);
})


