import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { findDay } from './weekday-calculator';

$(document).ready(function() {

  let i = 0;
  for(i= new Date().getFullYear(); i > 1800; i--)
  {
    $('#year').append($('<option> </option>').val(i).html(i));
  }
  let j = 0;
  for(j= 1; j <= 12; j++)
  {
    $('#month').append($('<option> </option>').val(j).html(j));
  }
  let k = 0;
  for(k= 1; k <= 31; k++)
  {
    $('#date').append($('<option> </option>').val(k).html(k));
  }

  $('#submitBtn').click(function() {

   let year = $('#year').val();
   let month = $('#month').val();
   let date = $('#date').val();


  $('.result').text(findDay(year, month, date));

  });
});
