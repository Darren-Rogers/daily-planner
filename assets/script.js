var currentTime = $('#currentDay').html(moment().format('LT MMMM Do, YYYY'));
for (var i = 9; i <= 20; i++) {
    var hour = i
    var idEl = $('<div class="col 1">' + i + '</div>');
    var parentEl = $('<div class="row" data-id="' + i + '">');
    var textEl = $('<textarea class="col-10" activity">');
    var buttonEl = $('<button class="col-1" save">Save</button>');
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
    var activity = $(this).parent().attr('data-id');
    var toDo =$(this).prev().val();
    localStorage.setItem(activity, toDo);
})
$('.activity').each()


