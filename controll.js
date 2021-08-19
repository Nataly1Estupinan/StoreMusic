var context= new AudioContext();

function api (){


const xhr = new XMLHttpRequest(),  //Se inicializa
$banner = document.getElementById("banner"),
$instruments = document.getElementById("instruments"),
$services = document.getElementById("services");


xhr.addEventListener("readystatechange", (e)=>{  //Se llama
    if(xhr.readyState!=4){
        return;
    }else{
        console.log(xhr)
    }
    
if(xhr.status>=200){
    console.log("exito")

    let json = JSON.parse(xhr.responseText)
    console.log(json)
    console.log(json.data)

    const datos= json.data.map(data=>data.images.downsized.url)
    console.log(datos)

    $banner.style.backgroundImage=`url(${datos[1]})`
    $instruments.style.backgroundImage=`url(${datos[0]})`
    $services.style.backgroundImage=`url(${datos[2]})`
    console.log
}
else{
    console.log("error")
}


})


xhr.open("GET", "https://api.giphy.com/v1/gifs?api_key=miaqaX0G89zRwvZ1RdyWcJLXXvdBefZx&ids=E7T0Zqg9JNwJ1MGZNs+%2C+xTk9ZwzuWiyJ8n5Vzq+%2Cl0ExlfFjuR4NMnEfm" )

xhr.send(); //Se envía
 }

api();

 
function jsNota(frecuencia){
        var o= context.createOscillator();
        g=context.createGain();
        o.connect(g);
        o.type="sawtooth";
        o.frequency.value=frecuencia;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
    }

    (function () {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
      
              form.classList.add('was-validated')
            }, false)
          })
      })()

  //teclado//

  $body=document.getElementById("body")

  $body.addEventListener('keydown', (e) =>{ //jeydown detecta cuando hay una tecla presionada
      if(e.key=="a"){
          console.log("do")
          jsNota(261.626);

      }
      if(e.key=="w"){
          console.log("do#")
          jsNota(277.183)
      }
      if(e.key=="s"){
        console.log("re")
        jsNota(293.665)
    }
    if(e.key=="e"){
        console.log("re#")
        jsNota(293.665)
    }
    if(e.key=="e"){
        console.log("re#")
        jsNota(293.665)
    }
    if(e.key=="d"){
        console.log("mi")
        jsNota(293.665)
    }
    if(e.key=="e"){
        console.log("re#")
        jsNota(293.665)
    }

  })

   
     