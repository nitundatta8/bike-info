import { BikeService } from './../src/bike.js';
import './styles.css';
import $ from "jquery";

$(document).ready(function() {
  let city = "";
  $('#bikeInfo').click(function() {
    city = $('#location').val();
    console.log(city);
    $('#location').val("");

    (async () => {
      let bikeService = new BikeService();
      const response = await bikeService.getBikeByCity(city);
      getResponse(response);
    })();

    //$("<li></li>").html(demoTask).appendTo(list);

    function getResponse(response) {
      //let bikeArray = [];
      if (response) {
        let count=0;
        for(let i=0;i<response.bikes.length;i++){
          if(response.bikes[i].stolen_location === city){
            count++;
            let list = $("#showList");
            $("<li></li>").html(response.bikes[i].title).appendTo(list);
          }
        }
        $('#showBikeCount').text(`You are searching in ${city} and there are ${count} stolen bikes.`);
      }else {
        $("#showError").text(`There was an error handling your request.`);
      }
    }
  });
});