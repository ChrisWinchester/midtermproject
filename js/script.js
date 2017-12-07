// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {

 var persbtn = document.getElementById('specials-tile');
 var egitmbtn = document.getElementById('menu-tile');


 var message;
    
    // listen form personel click..................
persbtn.addEventListener("click", function () {
        // Call server to get the name
       document.getElementById('jumbo').style.display = "none";
       document.getElementById('render').innerHTML = " ";
       
         message = 
            "<div class=\"jumbotro\" >"+
               " <span class=\"put-there\">personel</span>"+
               " <div class=\"row\">" +
                   "<div class=\"col-md-4 col-sm-6 col-xs-12\">"+
                    "<div id=\"uyeler\" onclick=\"getuyeler()\"><span>UYELER</span></div>" +
                 " </div>"+
                 " <div class=\"col-md-4 col-sm-6 col-xs-12\">"+
                    "<div id=\"yardimciler\" onclick=\"getyardimciler()\"><span>YARDIMCI</span></div>"+
                  "</div>"+
                  "<div class=\"col-md-4 col-sm-12 col-xs-12\">"+
                    "<div id=\"teknikler\" onclick=\"getteknikler()\"><span>TEKNIK</span></div>"+
                  "</div>"+
                "</div>"+
                
            "</div>";

            document.getElementById('render').insertAdjacentHTML('afterbegin',message);
           
      });
  egitmbtn.addEventListener("click", function () {
        // Call server to get the name
        document.getElementById('jumbo').style.display = "none";
        document.getElementById('render').innerHTML = " ";
            message = 
            "<div class=\"jumbotro\" >"+
               " <span class=\"put-there\">Education</span>"+
               " <div class=\"row\">" +
                   "<div class=\"col-md-6 col-sm-6 col-xs-12\">"+
                    "<div id=\"lisan\" onclick=\"getdonemforunder()\"><span>UNDERGRADUATE</span></div>" +
                 " </div>"+
                 " <div class=\"col-md-6 col-sm-6 col-xs-12\">"+
                    "<div id=\"yuklisan\" onclick=\"getdonemforgrade()\"><span>GRADUATE</span></div>"+
                  "</div>"+
                "</div>"+
            "</div>";

            document.getElementById('render').insertAdjacentHTML('afterbegin',message);

      });
        // listen for uyeler div and return all the uyeler  
  }
);

 var personelurl = "https://api.myjson.com/bins/b18o7";
    function getuyeler(){
        $ajaxUtils
         .sendGetRequest(personelurl,function(res){
            var i;
            document.getElementById('render').innerHTML = " ";           
          //  console.log(res[0].uyerller[0].name);

            
            for(i=0;i<res[0].uyerller.length;i++){
                message = 
                    "<div class=\"menu-item-tile col-lg-4 col-md-6 col-md-6 col-xs-12\">"+
                    "<div class=\"row\">"+
                      "<div class=\"col-sm-5\">"+
                       "<div class=\"menu-item-photo\">"+
                         " <img class=\"img-responsive\" width=\"250\" height=\"150\" src=\"images/menu/B/B-1.jpg\" alt=\"Item\">"+
                        "</div>"+                       
                      "</div>"+
                      "<div class=\"menu-item-description col-sm-7\">"+
                      "<h5 class=\"menu-item-title\">"+"Name: "+res[0].uyerller[i].name +"</h5>"+
                      "<h5 class=\"menu-item-title\">"+"Education: "+res[0].uyerller[i].edu +"</h5>"+
                      "<h5 class=\"menu-item-title\">"+"Specialization:"+res[0].uyerller[i].field +"</h5>"+
                      "<div class=\"clearfix visible-lg-block visible-md-block\">"+
                        "</div>"+
                    "</div>"+
                    "<hr class=\"visible-xs\">"+
                  "</div>";
                
                document.getElementById('render').insertAdjacentHTML('afterbegin',message);
            }
         });
        }

            // functon to get yardimciler
        function getyardimciler(){
        $ajaxUtils
         .sendGetRequest(personelurl,function(res){
                        var i;
            document.getElementById('render').innerHTML = " ";           
          //  console.log(res[0].uyerller[0].name);
            
            for(i=0;i<res[1].yardimci.length;i++){
                message = 
                    "<div class=\"menu-item-tile col-lg-4 col-md-6 col-md-6 col-xs-12\">"+
                    "<div class=\"row\">"+
                      "<div class=\"col-sm-5\">"+
                       "<div class=\"menu-item-photo\">"+
                         " <img class=\"img-responsive\" width=\"250\" height=\"150\" src=\"images/menu/B/B-1.jpg\" alt=\"Item\">"+
                        "</div>"+                       
                      "</div>"+
                      "<div class=\"menu-item-description col-sm-7\">"+
                      "<h5 class=\"menu-item-title\">"+"Name: "+res[1].yardimci[i].name +"</h5>"+
                      "<h5 class=\"menu-item-title\">"+"Education: "+res[1].yardimci[i].edu +"</h5>"+
                      "<h5 class=\"menu-item-title\">"+"Specialization:"+res[1].yardimci[i].field +"</h5>"+
                      "<div class=\"clearfix visible-lg-block visible-md-block\">"+
                        "</div>"+
                    "</div>"+
                    "<hr class=\"visible-xs\">"+
                  "</div>";
                
                document.getElementById('render').insertAdjacentHTML('afterbegin',message);
            }
         });
        }

        function getteknikler(){
        $ajaxUtils
         .sendGetRequest(personelurl,function(res){
                        var i;
            document.getElementById('render').innerHTML = " ";           
          //  console.log(res[0].uyerller[0].name);
            
            for(i=0;i<res[2].teknik.length;i++){
                message = 
                    "<div class=\"menu-item-tile col-lg-4 col-md-6 col-md-6 col-xs-12\">"+
                    "<div class=\"row\">"+
                      "<div class=\"col-sm-5\">"+
                       "<div class=\"menu-item-photo\">"+
                         " <img class=\"img-responsive\" width=\"250\" height=\"150\" src=\"images/menu/B/B-1.jpg\" alt=\"Item\">"+
                        "</div>"+                       
                      "</div>"+
                      "<div class=\"menu-item-description col-sm-7\">"+
                      "<h5 class=\"menu-item-title\">"+"Name: "+res[2].teknik[i].name +"</h5>"+
                      "<h5 class=\"menu-item-title\">"+"Education: "+res[2].teknik[i].edu +"</h5>"+
                      "<div class=\"clearfix visible-lg-block visible-md-block\">"+
                      "<h5 class=\"menu-item-title\">"+"Specialization:"+res[2].teknik[i].field +"</h5>"+
                      "<div class=\"clearfix visible-sm-block visible-md-block\">"+
                        "</div>"+
                    "</div>"+
                    "<hr class=\"visible-xs\">"+
                  "</div>";
                
                document.getElementById('render').insertAdjacentHTML('afterbegin',message);
            }
         });
        }

        function getdonemforunder(){
            
            document.getElementById('render').innerHTML = " ";

            message = 
            "<div class=\"jumbotro\" >"+
               " <span class=\"put-there\">semester</span>"+
               " <div class=\"row\">" +
                   "<div class=\"col-md-6 col-sm-6 col-xs-12\">"+
                    "<div id=\"lisan\" onclick=\"underfall()\"><span>FALL</span></div>" +
                 " </div>"+
                 " <div class=\"col-md-6 col-sm-6 col-xs-12\">"+
                    "<div id=\"yuklisan\" onclick=\"underautumn()\"><span>AUTUMN</span></div>"+
                  "</div>"+
                "</div>"+
            "</div>";

            document.getElementById('render').insertAdjacentHTML('afterbegin',message);
        }
        function getdonemforgrade(){
            
            document.getElementById('render').innerHTML = " ";

            message = 
            "<div class=\"jumbotro\" >"+
               " <span class=\"put-there\">semester</span>"+
               " <div class=\"row\">" +
                   "<div class=\"col-md-6 col-sm-6 col-xs-12\">"+
                    "<div id=\"lisan\" onclick=\"gradefall()\"><span>FALL</span></div>" +
                 " </div>"+
                 " <div class=\"col-md-6 col-sm-6 col-xs-12\">"+
                    "<div id=\"yuklisan\" onclick=\"gradeautumn()\"><span>AUTUMN</span></div>"+
                  "</div>"+
                "</div>"+
            "</div>";

            document.getElementById('render').insertAdjacentHTML('afterbegin',message);
        }

        function underfall(){
             document.getElementById('render').innerHTML = " ";
            var message = 
            "<div class=\"jumbotro\" >"+
               " <span class=\"put-there\">undergraduate fall</span>"+
               " <div class=\"row\">" +
                   "<div class=\"col-md-6 col-sm-6 col-xs-12\">"+
                    "<div id=\"lisan\"><span>1</span></div>" +
                 " </div>"+
                 " <div class=\"col-md-6 col-sm-6 col-xs-12\">"+
                    "<div id=\"yuklisan\"><span>2</span></div>"+
                  "</div>"+
                  " <div class=\"col-md-6 col-sm-6 col-xs-12\">"+
                    "<div id=\"yuklisan\"><span>3</span></div>"+
                  "</div>"+
                  " <div class=\"col-md-6 col-sm-6 col-xs-12\">"+
                    "<div id=\"yuklisan\"><span>4</span></div>"+
                  "</div>"+
                "</div>"+
            "</div>";
            document.getElementById('render').insertAdjacentHTML('afterbegin',message);

        }
        function underautumn(){
            document.getElementById('render').innerHTML = " ";
            var message = 
            "<div class=\"jumbotro\" >"+
               " <span class=\"put-there\">undergraduate Autumn</span>"+
               " <div class=\"row\">" +
                   "<div class=\"col-md-6 col-sm-6 col-xs-12\">"+
                    "<div id=\"lisan\"><span>1</span></div>" +
                 " </div>"+
                 " <div class=\"col-md-6 col-sm-6 col-xs-12\">"+
                    "<div id=\"yuklisan\"><span>2</span></div>"+
                  "</div>"+
                  " <div class=\"col-md-6 col-sm-6 col-xs-12\">"+
                    "<div id=\"yuklisan\"><span>3</span></div>"+
                  "</div>"+
                  " <div class=\"col-md-6 col-sm-6 col-xs-12\">"+
                    "<div id=\"yuklisan\"><span>4</span></div>"+
                  "</div>"+
                "</div>"+
            "</div>";
            document.getElementById('render').insertAdjacentHTML('afterbegin',message);
        }
        function gradefall(){
            document.getElementById('render').innerHTML = " ";
            var message = 
            "<div class=\"jumbotro\" >"+
               " <span class=\"put-there\">graduate fall</span>"+
               " <div class=\"row\">" +
                   "<div class=\"col-md-6 col-sm-6 col-xs-12\">"+
                    "<div id=\"lisan\"><span>1</span></div>" +
                 " </div>"+
                 " <div class=\"col-md-6 col-sm-6 col-xs-12\">"+
                    "<div id=\"yuklisan\"><span>2</span></div>"+
                  "</div>"+
                "</div>"+
            "</div>";
            document.getElementById('render').insertAdjacentHTML('afterbegin',message);

        }
        function gradeautumn(){
            document.getElementById('render').innerHTML = " ";
            var message = 
            "<div class=\"jumbotro\" >"+
               " <span class=\"put-there\">graduate Autumn</span>"+
               " <div class=\"row\">" +
                   "<div class=\"col-md-6 col-sm-6 col-xs-12\">"+
                    "<div id=\"lisan\"><span>1</span></div>" +
                 " </div>"+
                 " <div class=\"col-md-6 col-sm-6 col-xs-12\">"+
                    "<div id=\"yuklisan\"><span>2</span></div>"+
                  "</div>"+
                "</div>"+
            "</div>";
            document.getElementById('render').insertAdjacentHTML('afterbegin',message);

        }

