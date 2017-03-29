$(document).ready(function(){
  populatePage();
});

function populatePage(){
  $.get(`http://localhost:3000/data`, function(data, status){
    console.log(data);
    // $.each(data[0].slice(0,9), function(j){
    //   $.getJSON("../data/futureEvents.json", function(json){
    //     $.each(json, function(k, v){
    //       if(v.id == data[0][j]){
    //         getEventCard(v, `c${w}`);
    //         numEvents++;
    //       }
    //     });
    //   });
    // });
  });
};

function getGifCard(){

};
