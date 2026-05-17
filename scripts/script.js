// // https://isotope.metafizzy.co/
// var $grid = $('.xgrid').isotope({});
//   // filter items on button click
//   $('.filter-button-group').on('click', 'button', function() {
//     var filterValue = $(this).attr('data-filter');
//     // use filterFn if matches value
//      $grid.isotope({ filter: filterValue });
//   });
//   // change is-checked class on buttons
  

$(document).ready(function () {

    var $grid = $('.xgrid').isotope({
        itemSelector: '.card'
    });

    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');

        $grid.isotope({
            filter: filterValue
        });
    });

});