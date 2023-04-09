var username = "NickName";
document.querySelector('.login').value = username;
var password = "password"
var passsucces = 2;

 cef.on("parolacorecta", (valoare, incercari) => {
	passsucces = valoare;
		
     if(passsucces === 1) { document.querySelector('.password1').classList.remove('error'), document.getElementById("InvalidEM3").innerHTML = '* Password OK, press continue.'; }
     if(passsucces === 1) 
     { 
       document.getElementById("continue").style = "display: flex; justify-content: center;";
       document.getElementById("go").style = "display: none;"; 
     }
     if(passsucces === 0) { 
       document.querySelector('.password1').classList.add('error'); 
      
       if(incercari !== 0)
        {
          document.getElementById("InvalidEM3").innerHTML = '* Parola incorecta! Incercari ramase: ' + `${incercari}` + '.';
        }
        else if(incercari === 0) 
        {
          document.getElementById("InvalidEM3").innerHTML = '* Deoarece ai epuizat toate incercarile ai primit kick!'; 
        }
     } 
});

cef.on("lastlogin", (valoare) => {
     document.querySelector('.password1').classList.add('error'); 
     document.getElementById("LastOn").innerHTML = 'Ultima data cand te-ai logat: ' + `${valoare}.`;
 }); 
 
	 
$(".go").on("click", function () {
    
    if(passsucces === 0 || passsucces === 2) {
       loginaccount();
    }
    if ($('.password1').val() != "" && passsucces === 1) {
      document.querySelector('.password1').classList.remove('error');
      document.querySelector('#main').classList.remove('slideRight');
      document.querySelector('#main').classList.add('slideBack');
      document.querySelector('#img').classList.remove('slideLeft');
      document.querySelector('#img').classList.add('slideRightBack');
      
      function remove() {
        document.querySelector('#main').style.display = "none";
        document.querySelector('#img').style.display = "none";
      }
      setTimeout(remove, 900);
      function fadein() {
        document.querySelector('.specialMain').style.display = "flex";
        document.querySelector('.specialMain').style.animation = "fadeIn 1s";
      }
      setTimeout(fadein, 1000);
      function fadeout() {
        document.querySelector('.specialMain').style.animation = "fadeOut 1s";
        document.body.style.background = "transparent";
      }
      setTimeout(fadeout, 6000);
      function removetex() {
        document.body.remove()
        
      }
      setTimeout(removetex, 7000);
      cef.emit('log:checkc', 1);
    }
    else if ($('.password1').val() != "" && passsucces === 0) { }
});
$(".continue").on("click", function () {

    if ($('.password1').val() != "" && passsucces === 1) {    
      document.querySelector('.password1').classList.remove('error');
      document.querySelector('#main').classList.remove('slideRight');
      document.querySelector('#main').classList.add('slideBack');
      document.querySelector('#img').classList.remove('slideLeft');
      document.querySelector('#img').classList.add('slideRightBack');
      function remove() {
        document.querySelector('#main').style.display = "none";
        document.querySelector('#img').style.display = "none";
      }
      setTimeout(remove, 900);
      function fadein() {
        document.querySelector('.specialMain').style.display = "flex";
        document.querySelector('.specialMain').style.animation = "fadeIn 1s";
      }
      setTimeout(fadein, 1000);
      function fadeout() {
        document.querySelector('.specialMain').style.animation = "fadeOut 1s";
        document.body.style.background = "transparent";
      }
      setTimeout(fadeout, 6000)
      function removetex() {
        document.body.remove()
        
      }
      setTimeout(removetex, 7000);
    }
});
$(".recovery").on("click", function () {
  // outed
});

  var div = document.createElement('div');
  div.classList.add('inputPass');
  var input = document.createElement('input');
  input.classList.add('password1');
  input.type = "password"; 
  input.name = "password";
  input.required = true;
  input.placeholder = "******"
  var img = document.createElement('img');
  img.src = "cef-login/images/eye-off.png";
  img.classList.add('pass1');
  img.id = "pass1";
  var main = document.querySelector('.login');
  div.append(input, img);
  main.after(div);

document.getElementById('pass1').addEventListener("click", function(){
  if(document.querySelector('.password1').type == "password") {
    document.querySelector('.password1').type = "text";
    document.getElementById('pass1').src = "cef-login/images/eye-on.png";
  }
  else if(document.querySelector('.password1').type == "text") {
    document.querySelector('.password1').type = "password";
    document.getElementById('pass1').src = "cef-login/images/eye-off.png";
  }
});
function loginaccount()
{  
    const passwords = $('input[name="password"]').val();
    cef.emit('log:player', passwords);
}
    cef.on("update_nickname2", (username) => {
    document.querySelector('.login').value = username;
});    
