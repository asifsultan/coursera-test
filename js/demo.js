$(function() {
  $('#next-button').click(function() {
    resetHtml();
    $('#target').next().addClass('highlight');
    displayHtml();
  })
  $('#prev-button').click(function() {
    resetHtml();
    $('#target').prev().addClass('highlight');
    displayHtml();
  })

  $('#prev-all-button').click(function() {
    resetHtml();
    $('#target').prevAll().addClass('highlight');
    displayHtml();
  })
  $('#next-all-button').click(function() {
    resetHtml();
    $('#target').nextAll().addClass('highlight');
    displayHtml();
  })

  $('#prev-until-button').click(function() {
    resetHtml();
    $('#target').prevUntil('.flag').addClass('highlight');
    displayHtml();
  })
  $('#next-until-button').click(function() {
    resetHtml();
    $('#target').nextUntil('.flag').addClass('highlight');
    displayHtml();
  })
});