$(document).ready(function () {

  // ********************
  // Typing Functionality
  // ********************
  // https://typeitjs.com/

  new TypeIt('#welcomeTxt', {
      speed: 150,
      waitUntilVisible: true,
      html: true
    })
    .type('Hello, I am Maxwell Handler')
    .go();


  // ********************
  // Popover Functions
  // ********************
  // https://getbootstrap.com/docs/4.0/components/tooltips/

  // HTML Popover
  $(function () {
    $('[data-toggle="html"]').tooltip()
  })
  // CSS Popover
  $(function () {
    $('[data-toggle="css"]').tooltip()
  })
  // Javascript Popover
  $(function () {
    $('[data-toggle="js"]').tooltip()
  })
  // Node.Js Popover
  $(function () {
    $('[data-toggle="node"]').tooltip()
  })

});