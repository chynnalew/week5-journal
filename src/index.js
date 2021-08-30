import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Entry} from './journal.js';


$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const title = $("#title").val();
    const body = $("#body").val();
    const entry = new Entry(title, body);
    const response = entry.numberOfWords();
    const vowels = entry.numberOfVowels();
    const consonants = entry.numberOfConsonants();
    $("#entries").html(response);
    $("#vowels").html(vowels);
    $("#consonants").html(consonants);
  })
})