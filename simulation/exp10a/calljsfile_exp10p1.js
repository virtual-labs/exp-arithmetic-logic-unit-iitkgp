

 var cn;
 var m;

 function ledchngcall(){


    var b0 = document.getElementById('b1'); /* B0 */
    var a0 = document.getElementById('b2'); /* A0 */
 var  s3 = document.getElementById('b3'); /* S3 */
 var s2 = document.getElementById('b4'); /* S2 */
  var s1 = document.getElementById('b5'); /* S1 */
   var s0 = document.getElementById('b6'); /* S0 */
  var  a1 = document.getElementById('b9');  /* A1 */
  var b1 = document.getElementById('b10'); /* B1 */
   var a2 = document.getElementById('b11'); /* A2 */
  var b2 = document.getElementById('b12');/* B2 */
  var  a3 = document.getElementById('b13'); /* A3 */
  var b3 = document.getElementById('b14'); /* B3 */
   vcc = document.getElementById('b15');  /* VCC */
  gnd = document.getElementById('b16'); /* GND */
  
    cn = document.getElementById('b7'); /* Cn */
    m = document.getElementById('b8'); /* M */


     
      if ((m.src.match("green")) && (cn.src.match("red")) ){
         // alert("logic");
         //ledchng();
         calllogic();
         ///loadLib("circuit_exp10p1");
      
        
        //<script type="text/javascript" src="circuit_exp10p1.js"></script>
     }
     
     if ((cn.src.match("green")) && (m.src.match("red"))){

        //ledchngarth();
       // alert("arithmetic");
        callarithmetic();
       // loadLib("arithmeticnote2_exp10p1");
       // <script type="text/javascript" src="arithmeticnote2_exp10p1.js"></script>
   

     }

     

 }


 function a7() {
    var image = document.getElementById('b7');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b7r').style.display="none";
    document.getElementById('b7g').style.display="block";
    //  cn="1"	;	
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b7r').style.display="block";
    document.getElementById('b7g').style.display="none";
    // cn="0";
    }
    ledchngcall();
}


function a8() {
    var image = document.getElementById('b8');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b8r').style.display="none";
    document.getElementById('b8g').style.display="block";
    // m="1"	;	
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b8r').style.display="block";
    document.getElementById('b8g').style.display="none";
    // m="0";
    }
    ledchngcall();
}



/*function a1() {
    var image = document.getElementById('b1');	

    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b1r').style.display="none";
    document.getElementById('b1g').style.display="block";
 B0 =1;
    
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b1r').style.display="block";
    document.getElementById('b1g').style.display="none";
     B0=0;
    }


}
function a2() {
    var image = document.getElementById('b2');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b2r').style.display="none";
    document.getElementById('b2g').style.display="block";
     A0=1	;	
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b2r').style.display="block";
    document.getElementById('b2g').style.display="none";
     A0=0;
    }
    
}
function a3() {
    var image = document.getElementById('b3');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b3r').style.display="none";
    document.getElementById('b3g').style.display="block";
     S3=1	;
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b3r').style.display="block";
    document.getElementById('b3g').style.display="none";
     S3=0	;
    }
    
}
function a4() {
    var image = document.getElementById('b4');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b4r').style.display="none";
    document.getElementById('b4g').style.display="block";
     S2=1	;	
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b4r').style.display="block";
    document.getElementById('b4g').style.display="none";
     S2=0	;
    }
    
}

function a5() {
    var image = document.getElementById('b5');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b5r').style.display="none";
    document.getElementById('b5g').style.display="block";
     S1=1	;
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b5r').style.display="block";
    document.getElementById('b5g').style.display="none";
     S1=0	;
    }
    
    
}
function a6() {
    var image = document.getElementById('b6');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b6r').style.display="none";
    document.getElementById('b6g').style.display="block";
    S0="1"	;	
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b6r').style.display="block";
    document.getElementById('b6g').style.display="none";
     S0="0";
    }
    
}

function a7() {
    var image = document.getElementById('b7');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b7r').style.display="none";
    document.getElementById('b7g').style.display="block";
     cn="1"	;	
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b7r').style.display="block";
    document.getElementById('b7g').style.display="none";
     cn="0";
    }
    
}


function a8() {
    var image = document.getElementById('b8');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b8r').style.display="none";
    document.getElementById('b8g').style.display="block";
     m="1"	;	
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b8r').style.display="block";
    document.getElementById('b8g').style.display="none";
     m="0";
    }
    
}

function a9() {
    var image = document.getElementById('b9');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b9r').style.display="none";
    document.getElementById('b9g').style.display="block";
     A1=1	;	
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b9r').style.display="block";
    document.getElementById('b9g').style.display="none";
     A1=0;
    }
    
}

function a10() {
    var image = document.getElementById('b10');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b10r').style.display="none";
    document.getElementById('b10g').style.display="block";
     B1=1	;	
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b10r').style.display="block";
    document.getElementById('b10g').style.display="none";
     B1=0;
    }
    
}
function a11() {
    var image = document.getElementById('b11');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b11r').style.display="none";
    document.getElementById('b11g').style.display="block";
     A2=1	;	
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b11r').style.display="block";
    document.getElementById('b11g').style.display="none";
     A2=0;
    }
    
}

function a12() {
    var image = document.getElementById('b12');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b12r').style.display="none";
    document.getElementById('b12g').style.display="block";
     B2=1	;	
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b12r').style.display="block";
    document.getElementById('b12g').style.display="none";
     B2=0;
    }
    
}

function a13() {
    var image = document.getElementById('b13');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b13r').style.display="none";
    document.getElementById('b13g').style.display="block";
     A3=1	;	
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b13r').style.display="block";
    document.getElementById('b13g').style.display="none";
     A3=0;
    }
    
}


function a14() {
    var image = document.getElementById('b14');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b14r').style.display="none";
    document.getElementById('b14g').style.display="block";
     B3=1	;	
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b14r').style.display="block";
    document.getElementById('b14g').style.display="none";
     B3=0;
    }
    
}
function a15() {
    var image = document.getElementById('b15');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b15r').style.display="none";
    document.getElementById('b15g').style.display="block";
    
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b15r').style.display="block";
    document.getElementById('b15g').style.display="none";
   
    }
    
}
function a16() {
    var image = document.getElementById('b16');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b16r').style.display="none";
    document.getElementById('b16g').style.display="block";
   
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b16r').style.display="block";
    document.getElementById('b16g').style.display="none";
    
    }
    
}*/



function calllogic(){
    var imported = document.createElement('script');
imported.src = 'circuit_exp10p1.js';
document.head.appendChild(imported);
   // document.writeln('<script type="text/javascript" src="circuit_exp10p1.js" ></script>');

}

function callarithmetic(){

    var imported = document.createElement('script');
imported.src = 'arithmeticnote2_exp10p1.js';
document.head.appendChild(imported);
   // document.writeln('<script type="text/javascript" src="arithmeticnote_exp10p1.js" ></script>');

}