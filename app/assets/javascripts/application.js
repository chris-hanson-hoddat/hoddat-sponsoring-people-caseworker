/* global $ */
/* global GOVUK */

// Warn about using the kit in production
// if (
//   window.sessionStorage && window.sessionStorage.getItem('prototypeWarning') !== 'false' &&
//   window.console && window.console.info
// ) {
//   window.console.info('GOV.UK Prototype Kit - do not use for production')
//   window.sessionStorage.setItem('prototypeWarning', true)
// }

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

// caseworker stick content
$("#js-stick").sticky({
  zIndex:1,
  widthFromWrapper: false
});

// $(".leftnav").sticky({
//   zIndex:1,
//   topSpacing: 120,
//   widthFromWrapper: false
// });


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
  $('.my-cases-view').show();

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
  $('.my-cases-view').hide();

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
  var current = $('.leftnavlinks.active').data('target');
  var target = $(this).data('target');

  $('.leftnavcontent').hide();
  $('#'+target).show();
  $('.leftnavlinks').removeClass('active');
  $('.'+target).addClass('active');

  // If the continue button is selected
  if ( $(this).hasClass('button') ) {
    $('html,body').scrollTop(0);
    $('.'+target).parent().prev().find('.tag--complete').show();

    // remove all if this is a resubmit
    $('.'+current+'-results').find('tr').remove();

    // Store and display case details
    // loop through any form input with class of .store...
    $('#'+current+' .store').each(function (index, value) {
      //store the name attribute (key) and the value entered (value)...
      var thisKey = $(this).attr('name');
      var thisVal = $(this).val();

      if ( thisVal.length > 0 ) {
        $('.results-title').removeClass('visuallyhidden');
        $('.'+current+'-results')
          .append(
            '<tr><th>' + thisKey + '</th><td>' + thisVal + '</td></tr>'
            )
          .show();
      }
    });

  } // /buttons
}); // /left links





// Notes on caseworker page
$('.js-add-note').click(function() {
  $('.js-notes').toggle();
  $(this).text(function(i, v){
    return v === 'Add note' ? 'Cancel note' : 'Add note'
  })
});






// Set dates dynamically so they stay useful throughout prototyping
$('.date').each(function() {
  var days = $(this).data('days');
  var currentTime = new Date();
  currentTime.setDate(currentTime.getDate()+days);
  var month = currentTime.getMonth()+1;
  var day = currentTime.getDate();
  var year = currentTime.getFullYear();
  $(this).text(day + "/" + month + "/" + year);
});



if ( document.location.href.indexOf('overview') > -1 ) {
    $('.overview')
      .show()
      .click(function(e) {
        e.preventDefault();
        document.location.href=location.href.replace(/&?overview/, "");
      });
} else {
  $('.action').show();
}
