// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
 var persbtn = document.getElementById('persbtn');
    
      persbtn.addEventListener("click", function () {
        // Call server to get the name
            var message = 
            "<div class=\"personel\">"+
               " <span>personel</span>"+
               " <div class=\"row\">" +
                   "<div class=\"col-md-4 col-sm-6 col-xs-12\">"+
                    "<a href=\"\"><div id=\"menu-tile\"><span>UYELER</span></div></a>" +
                 " </div>"+
                 " <div class=\"col-md-4 col-sm-6 col-xs-12\">"+
                    "<a href=\"\"><div id=\"specials-tile\"><span>YARDIMCI</span></div></a>"+
                  "</div>"+
                  "<div class=\"col-md-4 col-sm-6 col-xs-12\">"+
                    "<a href=\"\"><div id=\"specials-tile\"><span>TEKNIK</span></div></a>"+
                  "</div>"+
                "</div>"+
                
            "</div>";

            document.getElementById('render').insertAdjacentHTML('afterbegin',message);
      });
  }
);



