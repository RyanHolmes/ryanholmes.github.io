$(document).ready(function(){
  populatePage();
  $.each($(".gif"), function(){
    $(this).on("mouseover", function(){
      $(this).attr("src", "/images/2017-03-29-blob-idle.gif");
    });
    $(this).on("mouseleave", function(){
      $(this).attr("src", "/images/2017-03-29-blob-idle.png");
    });
  });
});

function populatePage(){
  $.get("/data", function(data, status){
    data = JSON.parse(data);
    $.each(data, function(e){
      console.log(data[e]);
    });
  });
};

function getGifCard(data){

};
