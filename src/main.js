// user interface  (imports)
import { Date } from './../src/weekday.js';
import $ from 'jquery';

$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
  
    let input = $("input#input").val();
    let input = $("input#input").val();
    let input = $("input#input").val();
    console.log(input);
  });
});
