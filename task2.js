
var time = $('.CO2s').first();

var car2move = 100;
var car3move = 900;
var car4move = 1200;

if (screen.width < 400) {
     time.css('--transform-duration', '15s');
    time.css('--transform-y', '-700vh');

    // Padding values for mobile
    car2move = 1680;
    car3move = 3000;
    car4move = 4300;
}

$(window).on('scroll', function () {
    let value = $(this).scrollTop(); 
    $('#text').css('top', 50 + value * -0.2 + '%');
    $('#cloud').css('left', value * 2 + 'px');

    $('#bird1').css({
        'top': value * 0.1 + 'px',
        'left': value * 1 + 'px'
    });

    $('#bird2').css({
        'top': value * -0.1 + 'px',
        'left': value * -2 + 'px'
    });

    $('#explore').css('margin-top', value * 1.5 + 'px');
    $('#bridge').css('top', value * -0.14 + 'px');
    $('#city').css('top', value * 0.4 + 'px');
    $('#sky').css('top', value * 0.25 + 'px');
    $('#mountains').css('top', value * 0.25 + 'px');
    $('#header').css('top', value * 0.7 + 'px');
    $('#moon').css('top', value * 1 + 'px');

    if (value < 380) {
        $('#boat').css('top', 20 + value * -0.3 + 'px');
    }

  
    $('#car1').css('right', (value - 100) * 1 + 'px');
    $('#car2').css('left', (value - car2move) * 1 + 'px');
    $('#car3').css('right', (value - car3move) * 1 + 'px');
    $('#car4').css('left', (value - car4move) * 1 + 'px');
});

