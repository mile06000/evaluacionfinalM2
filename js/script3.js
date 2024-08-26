$(document).ready(function() {
  $(".text-body-secondary3").click(function() {
    var idBoton = $("#Rio").attr("id");
    $("#detalles" + idBoton).toggle();
  });
$(document).ready(function(){
$(".text-body-secondary1").click(function(){
  var idBoton = $("#Baires").attr("id");
  $("#detalles" + idBoton).toggle();
});
});

$(document).ready(function(){
$(".text-body-secondary2").click(function(){
  var idBoton = $("#MachuPicchu").attr("id");
  $("#detalles" + idBoton).toggle();
});
});


  




  $(".btn-close").click(function() {
      $(".detalles").hide();
  });
});