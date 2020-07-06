$(document).ready(function () {
    $('#echo').click(function (e) { 
        $('.character-icons img').css('opacity', 0.5);
        $(this).css('opacity', 1);

        $('h1').text('Katalina');
        $('p').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio magna, tristique ac aliquet ac, mollis non sapien.\
        Praesent diam mi, cursus id aliquet sit amet, venenatis sed ipsum. Cras vel dolor a purus ullamcorper efficitur.\
        Nulla imperdiet congue justo, a tempus sem dictum tempus.\
        Fusce sit amet risus at libero varius elementum quis at lacus. Phasellus ut odio eu erat vestibulum iaculis a eu dolor.\
        Donec velit ante, viverra sed venenatis at, lobortis non arcu. Maecenas quis elit tortor.\
        In imperdiet facilisis elit, nec bibendum tellus luctus quis. Quisque tempor diam ac fermentum euismod.\
        Praesent libero ligula, sagittis eget neque ac, rhoncus dapibus sapien.\
        Proin malesuada leo non eleifend varius.');

        $('.character-image').css('left', '60%');
        $('.character-image').attr('src', './img/bg/katalina.png');
        $('body, html').css('background-image', 'url("./img/bg/katalina.jpg")');
    });

    $('#2').click(function (e) { 
        $('.character-icons img').css('opacity', 0.5);
        $('#2').css('opacity', 1);

        $('h1').text('Gran');
        $('p').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio magna, tristique ac aliquet ac, mollis non sapien.\
        Praesent diam mi, cursus id aliquet sit amet, venenatis sed ipsum. Cras vel dolor a purus ullamcorper efficitur.\
        Nulla imperdiet congue justo, a tempus sem dictum tempus.\
        Fusce sit amet risus at libero varius elementum quis at lacus. Phasellus ut odio eu erat vestibulum iaculis a eu dolor.\
        Donec velit ante, viverra sed venenatis at, lobortis non arcu. Maecenas quis elit tortor.\
        In imperdiet facilisis elit, nec bibendum tellus luctus quis. Quisque tempor diam ac fermentum euismod.\
        Praesent libero ligula, sagittis eget neque ac, rhoncus dapibus sapien.\
        Proin malesuada leo non eleifend varius.');

        $('.character-image').css('left', '65%');
        $('.character-image').attr('src', './img/bg/gran.png');
        $('body, html').css('background-image', 'url("./img/bg/gran.jpg")');
    });
});