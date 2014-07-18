/**
 * Created by Blake on 7/17/2014.
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
        'The'
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
        'Moose-Jaw'
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
        'Balbroa'
    ],

    name: function(){
        return (bro.first_names[Math.floor(Math.random() * bro.first_names.length)] + ' ' + bro.middle_names[Math.floor(Math.random() * bro.middle_names.length)] + ' ' + bro.last_names[Math.floor(Math.random() * bro.last_names.length)]);
    }
};

$(document).ready(function () {
    $('#name').on('click', function() {

        if ($('span[contenteditable]').hasClass('empty')) {

        } else {
            $('.output').text(bro.name);
        }
    });

    $('span[contenteditable]').on('keyup', function() {
        if ('' === $(this).text()) {
            $(this).addClass('empty');
        } else {
            $(this).removeClass('empty');
        }
    }).trigger('keyup');
});