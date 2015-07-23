$( document ).ready(function() {
  var anchura = ($( window ).width())
  if (anchura > 481){
    var altura=($( window ).height()-200)
    $('.contenedor').css('height', altura + 'px');
  }else{
    $('.contenedor').css('height', 'auto');
  }
});
