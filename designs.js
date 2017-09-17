$(function() {
  // Set vars
  let height, width, color;

  // When size is submitted by the user, call makeGrid()
  $('#sizePicker').submit(function(event) {
    // Select size input
    height = $('#input_height').val();
    width = $('#input_width').val();
    makeGrid(height, width);
    return false;
  });

  // Create grid
  function makeGrid(height, width) {
    // Clear grid
    $('#pixel_canvas').empty();
    // Create content to append to the table
    let content;
    for (let i = 0; i < height; i++) {
      content += '<tr>';
      for (let j = 0; j < width; j++) {
        content += '<td class="cell" id="h'+ i + 'w' + j +'"></td>';
      }
      content += '</tr>';
    }
    // Append the new grid to the table
    $('#pixel_canvas').append(content);
    // Check the click on the cell
    $(".cell").click(function() {
      // Stock the id of the cell
      let getId = $(this).attr('id');
      // Select color input
      color = $('#colorPicker').val();
      $('#' + getId).css('background-color', color);
    });
  }
});
