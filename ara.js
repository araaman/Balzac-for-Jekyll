$(document).ready(()=>  {
    var playing = false;


   $('img[usemap]').maphilight()

   // INDIA
    $('#India').mousedown(()=>  {
  
              $('#Adi').toggle();
              $('#Shachi').toggle();
              $('#infoindia').toggle();


    });



    $('#Adi').click(()=>  {
        

        if (playing == false) {
            document.getElementById('player2').play();
            playing = true;
            
            

        } else {
            document.getElementById('player2').pause();
            playing = false;
            
            
        }


    });
    $('#Shachi').click(()=>  {
        

        if (playing == false) {
            document.getElementById('player1').play();
            playing = true;
            
            

        } else {
            document.getElementById('player1').pause();
            playing = false;
            
            
        }



    });

$('#infoindia').click(()=>  {
        $('#Adi').toggle();
        $('#Shachi').toggle();
        $('#infoindia').toggle();
     });


// NEPAL
$('#Nepal').click(()=>  {
        

        if (playing == false) {
            document.getElementById('player').play();
            playing = true;
            

        } else {
            document.getElementById('player').pause();
            playing = false;
            
        }
          $('#Akki').toggle();


    });

$('#Akki').click(()=>  {
        $('#infonepal').toggle();
        
     });



$('#infonepal').click(()=>  {
        $('#Akki').toggle();
        $('#infonepal').toggle();
        
     });

// ARGENTINA




      $('#Argentina').mousedown(()=>  {
  
              $('#Gabo').toggle();
              $('#infoargentina').toggle();


    });



    $('#Gabo').click(()=>  {
        

        if (playing == false) {
            document.getElementById('player3').play();
            playing = true;
            
            

        } else {
            document.getElementById('player3').pause();
            playing = false;
            
            
        }


    });


// PAKISTAN

 $('#Pakistan').mousedown(()=>  {

            
              $('#infopakistan').toggle();




    });



    $('#infopakistan').click(()=>  {
        

        if (playing == false) {
            document.getElementById('sizoayesha').play();
            playing = true;
            
            

        } else {
            document.getElementById('sizoayesha').pause();
            playing = false;
            
            
        }




    });
   
 



// SWAZI

    $('#Swaziland').click(()=>  {
        

        if (playing == false) {
            document.getElementById('player4').play();
            playing = true;
            
            

        } else {
            document.getElementById('player4').pause();
            playing = false;
            
            
        }

     $('#infoswazi').toggle();


    });

// ARMENIA


    $('#Armenia').mousedown(()=>  {
  
              $('#infoarmenia').toggle();


    });
 




});