$( document ).ready(function() {
  var anchura = ($( window ).width())
  if (anchura > 481){
    var altura=($( window ).height()-200)
    var altura1=$('#s1').height()
    if (altura > altura1){
          $('.contenedor').css('height', altura + 'px');
    }else{
          $('.contenedor').css('height', 'auto');
    }
  }else{
    $('.contenedor').css('height', 'auto');
  }
});
