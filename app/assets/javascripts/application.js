/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (
  window.sessionStorage && window.sessionStorage.getItem('prototypeWarning') !== 'false' &&
  window.console && window.console.info
) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
  window.sessionStorage.setItem('prototypeWarning', true)
}

$(document).ready(function () {
  // Use GOV.UK selection-buttons.js to set selected
  // and focused states for block labels
  var $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']")
  new GOVUK.SelectionButtons($blockLabels) // eslint-disable-line

  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .block-label uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})




// Make jQuery :contains Case-Insensitive
// https://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/
// NEW selector
jQuery.expr[':'].Contains = function(a, i, m) {
  return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
};

// OVERWRITES old selecor
jQuery.expr[':'].contains = function(a, i, m) {
  return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
};




// Cases search function
$('.js-case-search').click(function(e) {
  e.preventDefault();
  var search = $('.js-case-search-query').val();

  $('.cases tbody tr').each(function() {
    $(this).hide();
  });

  $('.cases tbody tr td:contains("' + search + '")')
    .parent('tr')
    .show();
});




// Cases tabs function
$('.js-my-cases').click(function(e) {
  e.preventDefault();
  $(this).siblings('.tab--active').removeClass('tab--active');
  $(this).addClass('tab--active');
  $('.all-cases-view').hide();

  var search = 'Joe Bloggs';

  $('.cases tbody tr').each(function() {
    $(this).hide();
  });

  $('.cases tbody tr td:contains("' + search + '")')
    .parent('tr')
    .show();
});
$('.js-all-cases').click(function(e) {
  e.preventDefault();
  $(this).siblings('.tab--active').removeClass('tab--active');
  $(this).addClass('tab--active');
  $('.all-cases-view').show();

  var search = '603';

  $('.cases tbody tr').each(function() {
    $(this).hide();
  });

  $('.cases tbody tr td:contains("' + search + '")')
    .parent('tr')
    .show();
});




// Tabs
// Left hand tab navigation, e.g. caseworker screen
$('.leftnavlinks').click(function(e) {
  e.preventDefault();
  var target = $(this).data('target');

  $('.leftnavcontent').hide();
  $('#'+target).show();
  $('.leftnavlinks').removeClass('active');
  $('.'+target).addClass('active');

  if ( $(this).hasClass('button') ) {
    $('html,body').scrollTop(0);
    $('.'+target).parent().prev().find('.tag--complete').show();
  }
});

// Set dates dynamically so they stay useful throughout prototyping
$('.date').each(function() {
  var days = $(this).data('days');
  var currentTime = new Date();
  currentTime.setDate(currentTime.getDate()+days);
  var month = currentTime.getMonth();
  var day = currentTime.getDate();
  var year = currentTime.getFullYear();
  $(this).text(day + "/" + month + "/" + year);
});


