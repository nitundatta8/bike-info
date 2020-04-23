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

   

    function getResponse(response) {
      //let bikeArray = [];
      if (response) {
        let count=0;
        for(let i=0;i<response.bikes.length;i++){
           console.log("city1   " + response.bikes[i].stolen_location )
          if(response.bikes[i].stolen_location === city){
            console.log("city1   " + response.bikes[i].stolen_location )
            count++;
          }
        }
        $('#showBikeCount').text(`You are searching in ${city} and there are ${count} stolen bikes.`);
      }else {
        $("#showError").text(`There was an error handling your request.`);
      }
    }
  });
});