var currentTime = $('#currentDay').html(moment().format('LT MMMM Do, YYYY'));
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
$('.container').on('click', '.save', function () {
    var parentId = $(this).parent().attr('data-id');
    var toDo = $(this).prev().val();
    localStorage.setItem(parentId, toDo);
})
$('.activity').each(function(){
    var parentId = $(this).parent().attr('data-id');
    var getToDo = localStorage.getItem(parentId);
    $(this).text(getToDo);
})


