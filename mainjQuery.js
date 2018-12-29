
$(".hedha").css("background-color", "skyblue");
  $(".hedha").css("color", "red");
 
  
  
 $('#g').click(function(){
   var ch=$('#editeur')
   ch.css('font-weight','bold')
   
 })
 
 $('#i').click(function(){
  var ch=$('#editeur')
  ch.css('font-style','italic')
  
})

$('#s').click(function(){
  var ch=$('#editeur')
  ch.css('text-decoration','underline')
  
})
$('#gauche').click(function(){
  var ch=$('#editeur')
  ch.css('text-align','left')
  
})
$('#droite').click(function(){
  var ch=$('#editeur')
  ch.css('text-align','right')
  
})
$('#centrer').click(function(){
  var ch=$('#editeur')
  ch.css("text-align", "center")
  
})
$('#liste').click(function(){
  var ch=$('#editeur')
  ch.css(' list-style-position',' insertunorderedlist')
  
})
$('#num').click(function(){
  var ch=$('#editeur')
  ch.css('font-weight','insertorderedlist')
  
})
$('#lien').click(function(){
  var ch=$('#editeur')
  ch.css('font-weight','createLink')
  
})
$('#image').click(function(){
  var ch=$('#editeur')
  ch.css('font-weight','insertImage')
  
})
 
 
 
 
 
  /* $(function(){
    alert('jQuery est prêt !');
 });*/
 


/*$("#hedha").click(function() {
    if (typeof argument === 'undefined') {
      argument = '';
    }
    switch (nom) {
      case "createLink":
        argument = prompt("Quelle est l'adresse du lien ?");
        break;
      case "insertImage":
        argument = prompt("Quelle est l'adresse de l'image ?");
        break;
    }
    console.log('dqfsdf')
    // Exécuter la commande
    //document.execCommand(nom, false, argument);
  })*/
  
