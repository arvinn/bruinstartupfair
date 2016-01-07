var sponsors = {
  'Snapchat': {
    'name': 'Snapchat',
    'description': 'Snapchat is a fun messaging app for sharing moments. You can take a photo or a video, then add a caption or doodle or lense, and send it to a friend or add it to your story to share with the world/your followers. Friends can view individual snaps for up to 10 seconds, and then it disappears.',
    'positions': [{
                     'position': 'Software Engineer Intern',
                     'details': ['3 Open Positions', 'Full-Time', 'Summer 2016']
                  },
                  {
                     'position': 'Marketing Intern ',
                     'details': ['Full-Time' , 'Summer 2016',]
                  },
                  {
                     'position': 'Data Analytics Intern ',
                     'details': ['Part-Time', 'Spring 2016']
                  }],
    'logo': './img/logo-small.png'
  }
}

var source = $("#tooltip-template").html();
var tooltip_template = Handlebars.compile(source);
var modal_source = $("#modal-template").html();
var modal_template = Handlebars.compile(modal_source);


$(document).ready(function() {

  // Tooltip hover
  $('.logo').tooltipster({
      delay: 150,
      content: $('<span>' + tooltip_template(sponsors['Snapchat'])  + '</span>')
  });

  // Modals
  $('.logo').click(function(e) {
    var id = ($(this)[0].id);
    //var company = sponsors[id];
    var company = sponsors['Snapchat'];
    var width = $(window).width() / parseFloat($("body").css("font-size"));

    // Disable modals for desktops (40 em or greater)
    if (width > 40) {
      return;
    }
    $('#mobile-modal').html(modal_template(company));
    $('#mobile-modal').modal('show');
  });

  // Scroll-to effect
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 400);
          return false;
        }
      }
    });
  });

});
