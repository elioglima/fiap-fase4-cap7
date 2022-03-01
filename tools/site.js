function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

$(document).ready(function () {
  $("#menuGeral").html(`<div class="menuBackground" id="menuBackground">
    <div class="menuBackgroundBase">       

        <div class="line mb-30">
            <div class='ico'>
                <img src="assets/searchWhite.svg">
            </div>
            <div class='content'>
                <input type="text" class='search' placeholder='Pesquise aqui'>
            </div>
        </div>

        <div class="lineHover">
            <div class="line" id="menuRegister">
                <div class='ico'>
                    <img src="assets/icoRegister.svg">
                </div>
                <div class='content'>Cadastro</div>
            </div>
        </div>

        <div class="lineHover">
            <div class="line" id="menuEvents">
                <div class='ico'>
                    <img src="assets/icoEvents.svg">
                </div>
                <div class='content'>Eventos</div>
            </div>
        </div>

        <div class="lineHover">
            <div class="line" id="menuEvolution">
                <div class='ico'>
                    <img src="assets/mapPin.svg">
                </div>
                <div class='content'>Evolução</div>
            </div>
        </div>

        <div class="lineHover">
            <div class="line" id="menuServices">
                <div class='ico'>
                    <img src="assets/shop.svg">
                </div>
                <div class='content'>Serviços</div>
            </div>
        </div>

        <div class="lineHover">
            <div class="line" id="menuClose">
                <div class='contentClose'>Fianlizar</div>
            </div>
        </div>

       
    </div>
    <div class='menuButtonRight' id="menuButtonRight"></div>
</div>`);

  $("#logo").click(function () {
    $(location).prop("href", "home.html");
  });

  $("#menuRegister").click(function () {
    $(location).prop("href", "register.html");
  });

  $("#menuEvents").click(function () {
    $(location).prop("href", "events.html");
  });

  $("#menuEvolution").click(function () {
    $(location).prop("href", "evolutions.html");
  });

  $("#menuServices").click(function () {
    $(location).prop("href", "services.html");
  });

  $("#menuClose").click(function () {
    $(location).prop("href", "index.html");
  });

  $("#frequencyId").click(function () {
    $(location).prop("href", "frequency.html");
  });

  $("#icoMenu").click(function () {
    $("#menuBackground").css("display", "flex");
  });
  $("#menuButtonRight").click(function () {
    $("#menuBackground").css("display", "none");
  });
});
