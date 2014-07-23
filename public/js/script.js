/**
 * Created by Blaine on 7/17/2014.
 */

var bro = {
    first_names: [
        'Scott',
        'Jimmy',
        'Tom',
        'Nabroleon',
        'Brohan',
        'Brometheus',
        'Vincent',
        'Brad',
        'Chad',
        'Scooter',
        'Dude',
        'Broam',
        'Bro',
        'Brony',
        'Pete',
        'Brofessor',
        'Shoeless',
        'Rambro',
        'Mean',
        'Apollo',
        'A-Bro-ham',
        'Hulk',
        'Luke',
        'Han',
        'Jack',
        'Rocky',
        'The',
        'Swellington',
        'Franco',
        'Duke',
        'Benjamin',
        'Bo',
        'Larkin',
        'Irving',
        'Apollbro',
        'Broseph',
        'Chadwick',
        'Trent',
        'Paul',
        'Brody',
        'Chaz',
        'Keith',
        'Cliff'
    ],

    middle_names: [
        'Reginald',
        'Marco',
        'Broel',
        'Mario',
        'J.',
        'Bro',
        'Big',
        'Theodore',
        'La',
        'Great',
        'Moose-Jaw',
        'Lee',
        'Rayner',
        'Job',
        'Wyatt',
        'Michael',
        'Claude',
        'Flynn',
        'Ryder',
        'Poe',
        'Rae',
        'Henry',
        'Eli',
        'Troy',
        'Maddox',
        'Xavier',
        'Colton'
    ],

    last_names: [
        'McCallister',
        'Browens',
        'Santana',
        'Helmsley',
        'Bro\'Connor',
        'Brometheus',
        'Bryant',
        'Salk',
        'Clinton',
        'Chomsky',
        'Jackson',
        'Soprano',
        'Brose',
        'X',
        'Simpson',
        'Jackson',
        'Dirt',
        'Bronaparte',
        'LeBroski',
        'Greene',
        'Jangles',
        'Bro-hno',
        'Dimaggio',
        'Brogan',
        'Browalker',
        'Brolo',
        'Brouer',
        'Montana',
        'Brosevelt',
        'Tengo',
        'Lincoln',
        'Balbroa',
        'Swellington',
        'Brosidon',
        'Creed',
        'Bro',
        'Stanwick'
    ],

    rand_name: function(){
        return (bro.first_names[Math.floor(Math.random() * bro.first_names.length)] + ' ' + bro.middle_names[Math.floor(Math.random() * bro.middle_names.length)] + ' ' + bro.last_names[Math.floor(Math.random() * bro.last_names.length)]);
    },

    name: function(a, b, c, d, e) {
        a = a.length;
        b = b.length;
        c = c.length;
        d = d.length;
        e = e.length;

        var first_index = (bro.first_names.length % a + bro.first_names.length % b) % bro.first_names.length;
        var middle_index = c % bro.middle_names.length;
        var last_index = (bro.last_names.length % d + bro.last_names.length % e) % bro.last_names.length;

        return bro.first_names[first_index] + ' ' + bro.middle_names[middle_index] + ' ' + bro.last_names[last_index];
    }
};

var replaceBroName = function(name) {
    $('#tweet').attr('href', $('#tweet').data('href').replace(/{broname}/, name));
    $('.output').text(name);
    $('#tweet').addClass('result');
};

$(document).ready(function () {
    $('#name').on('click', function() {

        if ($('span[contenteditable]').hasClass('empty')) {
            //TODO show message here.
        } else {
            replaceBroName(bro.name($('#a').text(), $('#b').text(), $('#c').text(), $('#d').text(), $('#e').text()));
        }
    });

    $('#rand').on('click', function() {
        replaceBroName(bro.rand_name());
    });

    $('span[contenteditable]').on('keyup', function() {

        if ('' === $(this).text()) {
            $(this).addClass('empty');
        } else {
            $(this).removeClass('empty');
        }


    }).on('keydown', function(e) {
        var code = e.which || e.keyCode;

        if (13 === code) {
            $('#name').trigger('click');

            e.preventDefault();
        }

    }).trigger('keyup');
});