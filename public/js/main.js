// TODO: style, pagination, navbar, sorting, search,
// Types: character, item, effect, environment
// Actions: Play, enlarge
$(document).ready(function(){
  populatePage();
});

function populatePage(){
  $.get("/data", function(data, status){
    data = JSON.parse(data);
    $.each(data, function(e){
      $('#card-container').append(getGifCard(data[e], e));
      // Can either play gif or enlarge on hover
      if(data[e].action == "play"){
          addPlayHandler(e);
      } else if(data[e].action == "enlarge"){
          addEnlargeHandler(e);
      } else {
        console.log(`Action not recognized for ${e}`);
      }
    });
  });
};

function getGifCard(data, i){
  var card = `
    <div class="col-3">
      <div class="card">
        <img id="image${i}" class="gif" src="/images/${data.png}" alt="${data.name}" data-over="/images/${data.gif}" data-leave="/images/${data.png}">
        <h3> ${data.name} </h3>
        <div> ${data.date} </div>
      </div>
    </div>`;
  return card;
};

function addPlayHandler(id){
  // Change png to a gif on hover
  $(`#image${id}`).on("mouseover", function(){
    $(this).attr("src", $(this).data("over"));
  });
  $(`#image${id}`).on("mouseleave", function(){
    $(this).attr("src", $(this).data("leave"));
  });
};

function addEnlargeHandler(id){
  // Open a larger window for large images
  console.log(`addEnlargeHandler ${id}`);
};
