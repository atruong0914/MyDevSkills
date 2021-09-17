// need to make interactions. button, ul(x), and input value.
//select a button then adding click event
$('#btn').click(function(){
    // selecting the value of the input at the moment the btn is clicked
let input = $('#input-text').val()
    // appending html into a container using the data we've generated dynamically
$('ul').append(`<li><p class="x">x</p><p>  ${input}</p></li>`)
})

$('ul').on('click','li', function() {
$(this).remove()
})