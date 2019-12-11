require('../_scss/main.scss');

const cookieChoices = require('./cookieChoices.js');
const timeago = require('timeago.js');
const $ = require('jquery');
require('bootstrap/js/src/util');
require('bootstrap/js/src/collapse');

document.addEventListener('DOMContentLoaded', function(event) {
  cookieChoices().showCookieConsentBar(
    'En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de Cookies pour réaliser des statistiques de visites anonymes.',
    '×',
    'En savoir plus',
    'http://www.cnil.fr/vos-droits/vos-traces/les-cookies/'
  );
});

// Init timeago
timeago.register('fr', function(number, index) {
  return [
    ['à l\'instant', 'dans un instant'],
    ['il y a %s secondes', 'dans %s secondes'],
    ['il y a 1 minute', 'dans 1 minute'],
    ['il y a %s minutes', 'dans %s minutes'],
    ['il y a 1 heure', 'dans 1 heure'],
    ['il y a %s heures', 'dans %s heures'],
    ['il y a 1 jour', 'dans 1 jour'],
    ['il y a %s jours', 'dans %s jours'],
    ['il y a 1 semaine', 'dans 1 semaine'],
    ['il y a %s semaines', 'dans %s semaines'],
    ['il y a 1 mois', 'dans 1 mois'],
    ['il y a %s mois', 'dans %s mois'],
    ['il y a 1 an', 'dans 1 an'],
    ['il y a %s ans', 'dans %s ans'],
  ][index];
});
timeago.render(document.querySelectorAll('.timeago'), 'fr');

// Navbar behaviour on scroll
$(window).scroll(function() {
  onScroll();
});

function onScroll() {
  if ($(this).scrollTop() > 0) {
    $('.navbar').addClass('fixed-top');
    $('.navbar').removeClass('absolute-top');
  }
  else {
    $('.navbar').addClass('absolute-top');
    $('.navbar').removeClass('fixed-top');
  }
}

onScroll();

// Search input behaviour on focus
$('.js-search')
  .on('focus', function() {
    $(this).data('placeholder', $(this).attr('placeholder')); // Store for blur
    $(this).attr('placeholder', $(this).attr('title'));
  })
  .on('blur', function() {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });
