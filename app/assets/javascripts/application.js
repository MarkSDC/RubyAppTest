// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function get_json(){
   $.getJSON({
       type: 'GET',
       url: 'http://localhost:3000/json',
       dataType: 'json',
       success: function(data) {
           var items = []
           $.each(data, function(key, val) {
            console.log(val);
            items.push(
                  '<tr><td>' + val.name + '</td><td>' +  val.manufacturer + '</td><td>' + val.colour + '</td></tr>');
           });
           $(document).ready( function () {
             $('#table_id').DataTable({
               data: data,
               columns: [
                 { data: 'name' },
                 { data: 'manufacturer' },
                 { data: 'colour' }
               ]
             });
           });
        }
   });
   return false;
});
