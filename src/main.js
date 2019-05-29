import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { findDay } from './weekday-calculator';

$(document).ready(function() {
  $('#submitBtn').click(function() {

   let year = $('#year').val();
   let month = $('#month').val();
   let date = $('#date').val();


  // for(i= new Date().getFullYear(); i > 1800; i--)
  // {
  //   $('#year').append($('<option />').val(i).html(i));
  // }

  $('.result').text(findDay(year, month, date));

  });
});
