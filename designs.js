// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('input:submit').on('click', function(event) {
    makeGrid()
    event.preventDefault()
})

function makeGrid() {
    
    // Your code goes here!
    var table = $('#pixelCanvas')
    table.empty()
    var rows = $('#inputHeight').val()
    var columns = $('#inputWeight').val()
    for (var i = 0; i < rows; i++) {
        var row = '<tr>'
        for (var j = 0; j < columns; j++) {
            row += '<td id="' + i + '-' + j + '"></td>'
            //row += '<td></td>'
        }
        row += '</tr>'
        table.append(row)
    }
}

$('#pixelCanvas').on('click', function(event) {
    var color = $('#colorPicker').val()
    //alert(color)
    $(event.target).css('background-color', color)
})
