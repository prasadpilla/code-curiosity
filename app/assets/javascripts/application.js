// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require bootstrap-datepicker
//= require AdminLTE
//= require jquery.noty.packaged
//= require_tree .


function onDocReady(){
  $.AdminLTE.layout.activate();
}

$(document).ready(onDocReady);
$(document).on('page:load', onDocReady);

$(document).on('page:change', function(event) {
  $('.sidebar').off('click')
  $.AdminLTE.tree('.sidebar');
});


function selectTabUsingUrlHash(){
  var hash = window.location.hash;

  if(hash){
    $(hash + '_tab_link').tab('show');
  }
}

Turbolinks.enableProgressBar();
