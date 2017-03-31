// TODO: style, pagination, navbar, sorting, search,

$(document).ready(function(){
  populatePage();
});

function populatePage(){
  $.get("/data", function(data, status){
    data = JSON.parse(data);
    $.each(data, function(e){
      $('#card-container').append(getGifCard(data[e], e));
      addHoverHandler(e);
    });
  });
};

function getGifCard(data, i){
  var card = `
    <div class="col-3">
      <div class="card">
        <img id="image${i}" class="gif" src="/images/${data.png}" alt="${data.name}" data-over="/images/${data.gif}" data-leave="/images/${data.png}">
        <hr>
        <h3> ${data.name} </h3>
        <div> ${data.date} </div>
        <!-- <hr>
        <div class="card-tags"> <i class="fa fa-tag" style="margin-right: 5px;"></i> ${data.tags} </div> -->
      </div>
    </div>`;
  return card;
};

function addHoverHandler(id){
  $(`#image${id}`).on("mouseover", function(){
    $(this).attr("src", $(this).data("over"));
  });
  $(`#image${id}`).on("mouseleave", function(){
    $(this).attr("src", $(this).data("leave"));
  });
};
