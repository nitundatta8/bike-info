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
        let list = $("#showList");
        let htmlInfo="";
        for(let i=0;i<response.bikes.length;i++){
          if(response.bikes[i].stolen_location === city){
            count++;  //inputList.append(htmlInfo);
            console.log(response.bikes[i].large_img + " Image");
            // $('#showGiphyImg').attr("src",response.bikes[i].large_img);
             
             
            htmlInfo += '<div style="width: 18rem;">'+
            '<img src="'+response.bikes[i].large_img +'"style="width: 18rem" alt="Card image cap">'+
         '</div>'	
         
          }
        }
        console.log("htmlInfo")
        console.log(htmlInfo)
        list.html(htmlInfo);
        $('#showBikeCount').text(`You are searching in ${city} and there are ${count} stolen bikes.`);
      }else {
        $("#showError").text(`There was an error handling your request.`);
      }
    }
  });
});