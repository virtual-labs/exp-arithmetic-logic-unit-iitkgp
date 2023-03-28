/*Lab:exp_10_Part1_Arithmetic Logic Unit (logic function)
	File name: circuit_exp10p1.js
    Author:Prakriti Dhang */
    
    
    var decimal;
    var dec_valueAinp=0,dec_valueBinp=0;
    var inpS03;
    var A0=0,A1=0, A2=0,A3=0;
    var B0=0,B1=0, B2=0,B3=0;
    var S0,S1, S2,S3;
    var m;
    var cn;
    var binpA;
    var binpB;
    var dec_sum;
    var dec_sumc;
    var binaryStrF03;
    var F0,F1,F2,F3;
    var notA30;
    var notB30;
    var dec_valuenotAinp=0;
    var dec_valuenotBinp=0;
    var  s0,s1,s2,s3;
    var vcc, gnd;
   var eqalul;
   // alert("insert into function ledchng");

function ledchng(){

  //  alert("inserted into function ledchng");

    var b0 = document.getElementById('b1'); /* B0 */
      var a0 = document.getElementById('b2'); /* A0 */
   var  s3 = document.getElementById('b3'); /* S3 */
   var s2 = document.getElementById('b4'); /* S2 */
    var s1 = document.getElementById('b5'); /* S1 */
     var s0 = document.getElementById('b6'); /* S0 */
     cn = document.getElementById('b7'); /* Cn */
      m = document.getElementById('b8'); /* M */
    var  a1 = document.getElementById('b9');  /* A1 */
    var b1 = document.getElementById('b10'); /* B1 */
     var a2 = document.getElementById('b11'); /* A2 */
    var b2 = document.getElementById('b12');/* B2 */
    var  a3 = document.getElementById('b13'); /* A3 */
    var b3 = document.getElementById('b14'); /* B3 */
     vcc = document.getElementById('b15');  /* VCC */
    gnd = document.getElementById('b16'); /* GND */
    
       

  if ((s0.src.match("red")) &&  (s1.src.match("red")) && (s2.src.match("red")) && (s3.src.match("red")) && (vcc.src.match("green") ) && (m.src.match("green") ) && (cn.src.match("red"))){
   



    decimal ="0";
     inpS03="0000".split("");
     mmcn ="1 0 0".split(" ") ;
     eqalul = "A\u0305";
     document.getElementById('add').style.visibility='visible';
     document.getElementById('eqalu').innerHTML = "Equation for Logic Function: <span id=addbar> A </span>   ";
     generate4bitbinaryalu();
     not_decA();
  }
   


   else if ((s0.src.match("green")) &&  (s1.src.match("red")) && (s2.src.match("red")) && (s3.src.match("red")) && (vcc.src.match("green") ) && (m.src.match("green") )&& (cn.src.match("red"))){
       
       decimal ="1";
        inpS03="0001".split("");
        mmcn ="1 0 0".split(" ") ;
        eqalul = "<span id=addbar> A + B</span>";
        document.getElementById('add').style.visibility='visible';
        document.getElementById('eqalu').innerHTML = "Equation for Logic Function: <span id=addbar> A + B</span>  ";
    //cn="1";
       // alert("cn" +cn);
       generate4bitbinaryalu();
       decA_or_decB_bar();
        
    }
    else if ((s0.src.match("red")) &&  (s1.src.match("green")) && (s2.src.match("red")) && (s3.src.match("red")) && (vcc.src.match("green") ) && (m.src.match("green") )&& (cn.src.match("red"))){
        
        decimal ="2";
         inpS03="0010".split("");
         mmcn ="1 0 0".split(" ") ;
         eqalul = "A\u0305B";
         document.getElementById('add').style.visibility='visible';
         document.getElementById('eqalu').innerHTML = "Equation for Logic Function: A\u0305B   ";
     //cn="1";
        // alert("cn" +cn);
        generate4bitbinaryalu();
         decAbar_decB();
     }


    else if ((s0.src.match("green")) &&  (s1.src.match("green")) && (s2.src.match("red")) && (s3.src.match("red")) && (vcc.src.match("green") ) && (m.src.match("green") )&& (cn.src.match("red"))){
        
         decimal ="3";
          inpS03="0011".split("");
          mmcn ="1 0 0".split(" ") ;
          eqalul="Logic 0";
          document.getElementById('add').style.visibility='visible';
          document.getElementById('eqalu').innerHTML = "Equation for Logic Function: Logic 0   ";
      //cn="1";
         // alert("cn" +cn);
         generate4bitbinaryalu();
          logic0();
      }
      else if ((s0.src.match("red")) &&  (s1.src.match("red")) && (s2.src.match("green")) && (s3.src.match("red")) && (vcc.src.match("green") ) && (m.src.match("green") )&& (cn.src.match("red"))){
        
        decimal ="4";
         inpS03="0100".split("");
         mmcn ="1 0 0".split(" ") ;
         eqalul="A\u0305B\u0305";
         document.getElementById('add').style.visibility='visible';
         document.getElementById('eqalu').innerHTML = "Equation for Logic Function: A\u0305B\u0305 ";
     //cn="1";
        // alert("cn" +cn);
        generate4bitbinaryalu();
         decAB_bar();
     }

     else if ((s0.src.match("green")) &&  (s1.src.match("red")) && (s2.src.match("green")) && (s3.src.match("red")) && (vcc.src.match("green") ) && (m.src.match("green") )&& (cn.src.match("red"))){
        
        decimal ="5";
         inpS03="0101".split("");
         mmcn ="1 0 0".split(" ") ;
         eqalul="B\u0305";
         document.getElementById('add').style.visibility='visible';
         document.getElementById('eqalu').innerHTML = "Equation for Logic Function: B\u0305 ";
         
     //cn="1";
        // alert("cn" +cn);
        generate4bitbinaryalu();
         decB_bar();
     }

     else if ((s0.src.match("red")) &&  (s1.src.match("green")) && (s2.src.match("green")) && (s3.src.match("red")) && (vcc.src.match("green") ) && (m.src.match("green") )&& (cn.src.match("red"))){
        
        decimal ="6";
         inpS03="0110".split("");
         mmcn ="1 0 0".split(" ") ;
         eqalul="A xor B";
         document.getElementById('add').style.visibility='visible';
         document.getElementById('eqalu').innerHTML = "Equation for Logic Function: A xor B";
     //cn="1";
        // alert("cn" +cn);
        generate4bitbinaryalu();
         decA_xor_decB();
     }


     else if ((s0.src.match("green")) &&  (s1.src.match("green")) && (s2.src.match("green")) && (s3.src.match("red")) && (vcc.src.match("green") ) && (m.src.match("green") )&& (cn.src.match("red"))){
        
        decimal ="7";
         inpS03="0111".split("");
         mmcn ="1 0 0".split(" ") ;
         eqalul="AB\u0305";
         document.getElementById('add').style.visibility='visible';
         document.getElementById('eqalu').innerHTML = "Equation for Logic Function: AB\u0305 ";
     //cn="1";
        // alert("cn" +cn);
        generate4bitbinaryalu();
        decAB_bar();
         
     }
     else if ((s0.src.match("red")) &&  (s1.src.match("red")) && (s2.src.match("red")) && (s3.src.match("green")) && (vcc.src.match("green") ) && (m.src.match("green") )&& (cn.src.match("red"))){
        
        decimal ="8";
         inpS03="1000".split("");
         mmcn ="1 0 0".split(" ") ;
         eqalul="A\u0305+B";
         document.getElementById('add').style.visibility='visible';
         document.getElementById('eqalu').innerHTML = "Equation for Logic Function: A\u0305+B ";
     //cn="1";
        // alert("cn" +cn);
        generate4bitbinaryalu();
        decAbar_or_decB();
        
     }
     else if ((s0.src.match("green")) &&  (s1.src.match("red")) && (s2.src.match("red")) && (s3.src.match("green")) && (vcc.src.match("green") ) && (m.src.match("green") )&& (cn.src.match("red"))){
        
        decimal ="9";
         inpS03="1001".split("");
         mmcn ="1 0 0".split(" ") ;
         eqalul="A\u0305 xor B\u0305";
         document.getElementById('add').style.visibility='visible';
         document.getElementById('eqalu').innerHTML = "Equation for Logic Function: A\u0305 xor B\u0305 ";
     //cn="1";
        // alert("cn" +cn);
        generate4bitbinaryalu();
        decAbar_xor_decBbar();
     }

     else if ((s0.src.match("red")) &&  (s1.src.match("green")) && (s2.src.match("red")) && (s3.src.match("green")) && (vcc.src.match("green") ) && (m.src.match("green") ) && (cn.src.match("red"))){
        
        decimal ="10";
         inpS03="1010".split("");
         mmcn ="1 0 0".split(" ") ;
         eqalul="B";
         document.getElementById('add').style.visibility='visible';
         document.getElementById('eqalu').innerHTML = "Equation for Logic Function: B ";
     //cn="1";
        // alert("cn" +cn);
        generate4bitbinaryalu();
        decB();
     }

     else if ((s0.src.match("green")) &&  (s1.src.match("green")) && (s2.src.match("red")) && (s3.src.match("green")) && (vcc.src.match("green") ) && (m.src.match("green") )&& (cn.src.match("red"))){
        
        decimal ="11";
         inpS03="1011".split("");
         mmcn ="1 0 0".split(" ") ;
         eqalul="AB";
         document.getElementById('add').style.visibility='visible';
         document.getElementById('eqalu').innerHTML = "Equation for Logic Function: AB ";
     //cn="1";
        // alert("cn" +cn);
        generate4bitbinaryalu();
        decAB();
     }

     else if ((s0.src.match("red")) &&  (s1.src.match("red")) && (s2.src.match("green")) && (s3.src.match("green")) && (vcc.src.match("green") ) && (m.src.match("green") )&& (cn.src.match("red"))){
        
        decimal ="12";
         inpS03="1100".split("");
         mmcn ="1 0 0".split(" ") ;
         eqalul="Logic 1";
         document.getElementById('add').style.visibility='visible';
         document.getElementById('eqalu').innerHTML = "Equation for Logic Function: Logic 1 ";
     //cn="1";
        // alert("cn" +cn);
        generate4bitbinaryalu();
        logic1();
        
     }
     else if ((s0.src.match("green")) &&  (s1.src.match("red")) && (s2.src.match("green")) && (s3.src.match("green")) && (vcc.src.match("green") ) && (m.src.match("green") )&& (cn.src.match("red"))){
        
        decimal ="13";
         inpS03="1101".split("");
         mmcn ="1 0 1".split(" ") ;
         eqalul="A+ B\u0305";
         document.getElementById('add').style.visibility='visible';
         document.getElementById('eqalu').innerHTML = "Equation for Logic Function: A+ B\u0305 ";
     //cn="1";
        // alert("cn" +cn);
        generate4bitbinaryalu();
        decA_or_decBbar();
     }

     else if ((s0.src.match("red")) &&  (s1.src.match("green")) && (s2.src.match("green")) && (s3.src.match("green")) && (vcc.src.match("green") ) && (m.src.match("green") )&& (cn.src.match("red"))){
        
        decimal ="14";
         inpS03="1110".split("");
         mmcn ="1 0 0".split(" ") ;
         eqalul="A+B";
         document.getElementById('add').style.visibility='visible';
         document.getElementById('eqalu').innerHTML = "Equation for Logic Function: A+B ";
     //cn="1";
        // alert("cn" +cn);
        generate4bitbinaryalu();
        decA_or_decB();
     }
     else if ((s0.src.match("green")) &&  (s1.src.match("green")) && (s2.src.match("green")) && (s3.src.match("green")) && (vcc.src.match("green") ) && (m.src.match("green") )&& (cn.src.match("red"))){
        
        decimal ="15";
         inpS03="1111".split("");
         mmcn ="1 0 0".split(" ") ;
         eqalul="A";
         document.getElementById('add').style.visibility='visible';
         document.getElementById('eqalu').innerHTML = "Equation for Logic Function: A ";
     //cn="1";
        // alert("cn" +cn);
        generate4bitbinaryalu();
        decA();
        
     }

    


    else{
        document.getElementById('add').style.visibility='hidden';
    }
    

    if ((m.src.match("red")) && (cn.src.match("red")) ){
        var imported = document.createElement('script');
        imported.src = 'arithmeticnote2_exp10p1.js';
        document.head.appendChild(imported);
        
        var image = document.getElementById('b15');		
        if (image.src.match("green")) 
    {
        image.src = "red.JPG";
        document.getElementById('b15r').style.display="block";
        document.getElementById('b15g').style.display="none";
        
        } 

   }
   if ((m.src.match("green")) && (cn.src.match("green")) ){
    var imported = document.createElement('script');
    imported.src = 'arithmeticnote2_exp10p1.js';
    document.head.appendChild(imported);
    
    var image = document.getElementById('b15');		
    if (image.src.match("green")) 
{
    image.src = "red.JPG";
    document.getElementById('b15r').style.display="block";
    document.getElementById('b15g').style.display="none";
    
    } 

}

/* VCC connection */

 
if((vcc.src.match("red"))  ){
    document.getElementById('showalt').style.visibility='visible';
    document.getElementById('v').style.visibility='visible';
    document.getElementById('gnd').style.visibility='hidden';

    

    document.getElementById("lon1").style.visibility="hidden";
    document.getElementById("lon2").style.visibility="hidden";
    document.getElementById("lon3").style.visibility="hidden";
    document.getElementById("lon4").style.visibility="hidden";
    document.getElementById("lon5").style.visibility="hidden";
    document.getElementById("lon6").style.visibility="hidden";
    document.getElementById("lon7").style.visibility="hidden";
    document.getElementById("lon8").style.visibility="hidden";

    document.getElementById("loff1").style.visibility="visible";
    document.getElementById("loff2").style.visibility="visible";
    document.getElementById("loff3").style.visibility="visible";
    document.getElementById("loff4").style.visibility="visible";
    document.getElementById("loff5").style.visibility="visible";
    document.getElementById("loff6").style.visibility="visible";
    document.getElementById("loff7").style.visibility="visible";
    document.getElementById("loff8").style.visibility="visible";

}

else{
    document.getElementById('showalt').style.visibility='hidden';
    document.getElementById('v').style.visibility='hidden';
    document.getElementById('gnd').style.visibility='hidden';
}
/* check GND connection and VCC */
  if(vcc.src.match("red") && gnd.src.match("green")){
    document.getElementById('gnd').style.visibility='visible';
    document.getElementById('showalt').style.visibility='visible';
    document.getElementById('v').style.visibility='visible';
    
}
else if (vcc.src.match("green") && gnd.src.match("red")){
    document.getElementById('gnd').style.visibility='hidden';
    document.getElementById('showalt').style.visibility='hidden';
    document.getElementById('v').style.visibility='hidden';
   
}

else if(vcc.src.match("red") && gnd.src.match("red")){
    document.getElementById('gnd').style.visibility='hidden';
    document.getElementById('showalt').style.visibility='visible';
    document.getElementById('v').style.visibility='visible';
    
}
else if(vcc.src.match("green") && gnd.src.match("green")){
    document.getElementById('gnd').style.visibility='visible';
    document.getElementById('showalt').style.visibility='visible';
    document.getElementById('v').style.visibility='hidden';
    
}
else{
    document.getElementById('gnd').style.visibility='hidden';
    document.getElementById('showalt').style.visibility='hidden';
    document.getElementById('v').style.visibility='hidden';
}



/* check GND connection */
 if(gnd.src.match("green")){
    document.getElementById('gnd').style.visibility='visible';
    document.getElementById('showalt').style.visibility='visible';
    document.getElementById("lon1").style.visibility="hidden";
    document.getElementById("lon2").style.visibility="hidden";
    document.getElementById("lon3").style.visibility="hidden";
    document.getElementById("lon4").style.visibility="hidden";
    document.getElementById("lon5").style.visibility="hidden";
    document.getElementById("lon6").style.visibility="hidden";
    document.getElementById("lon7").style.visibility="hidden";
    document.getElementById("lon8").style.visibility="hidden";

    document.getElementById("loff1").style.visibility="visible";
    document.getElementById("loff2").style.visibility="visible";
    document.getElementById("loff3").style.visibility="visible";
    document.getElementById("loff4").style.visibility="visible";
    document.getElementById("loff5").style.visibility="visible";
    document.getElementById("loff6").style.visibility="visible";
    document.getElementById("loff7").style.visibility="visible";
    document.getElementById("loff8").style.visibility="visible";

      
}
else {
    document.getElementById('gnd').style.visibility='hidden';
 
}


}


/* toggle button on and off for connection */


function a1() {
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
ledchng();

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
    ledchng();
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
    ledchng();
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
    ledchng();
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
    ledchng();
    
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
    ledchng();
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
    ledchng();
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
    ledchng();
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
    ledchng();
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
    ledchng();
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
    ledchng();
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
    ledchng();
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
    ledchng();
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
    ledchng();
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
    ledchng();
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
    ledchng();
}

function generate4bitbinaryalu(){
  
   var A=[];
    var B=[];

     A.push(A3,A2,A1,A0);
     B.push(B3,B2,B1,B0);
    
      binpA= A.join("");
      binpB= B.join("");
     
     //alert("A30: " +binpA);
    // alert("B30: " +binpB);
    
     binarytodecimal_Ainp();
     binarytodecimal_Binp();
     Ainp_to_notAinp();
     Binp_to_notBinp();
     binary_todec_notA();
     binary_todec_notB();
    
    
}

/* Binary to decimal inp A */
function binarytodecimal_Ainp(){
	var bstrAinp=binpA;
	function bin_to_dec(bstrAinp) { 
    return parseInt((bstrAinp + '')
	.replace(/[^01]/gi, ''), 2);	
	}
	dec_valueAinp=bin_to_dec(bstrAinp);
	//alert("A decimal " +dec_valueAinp);
	
}



/* Binary to decimal b inp*/
function binarytodecimal_Binp(){
	var bstrBinp=binpB;
	function bin_to_dec(bstrBinp) { 
    return parseInt((bstrBinp + '')
	.replace(/[^01]/gi, ''), 2);	
	}
	dec_valueBinp=bin_to_dec(bstrBinp);
	//alert("B decimal  " +dec_valueBinp);
	
}

/* not A */
 function Ainp_to_notAinp(){
    
      var notA =[];
     var   a= binpA.split("");
       
       

       notA3= a[0];
       notA2= a[1];
       notA1= a[2];
       notA0= a[3];
      

       if (notA3 ==0){
           notA3=1;
       }
       else {
        notA3=0;
       }
       
       if (notA2 ==0){
        notA2=1;
    }
    else {
     notA2=0;
    }
    
    if (notA1 ==0){
        notA1=1;
    }
    else {
     notA1=0;
    }
    
    if (notA0 ==0){
        notA0=1;
    }
    else {
     notA0=0;
    }
  

    notA.push(notA3,notA2,notA1,notA0);
      notA30 =notA.join(""); // notA3 notA2 notA1 notA0
    //alert("notA30 " +notA30);
    

 }



 /* not B */
 function Binp_to_notBinp(){
    var notB =[];
    var   b= binpB.split("");
      
      notB3= b[0];
      notB2= b[1];
      notB1= b[2];
      notB0= b[3];
     

      if (notB3 ==0){
          notB3=1;
      }
      else {
       notB3=0;
      }
      
      if (notB2 ==0){
       notB2=1;
   }
   else {
    notB2=0;
   }
   
   if (notB1 ==0){
       notB1=1;
   }
   else {
    notB1=0;
   }
   
   if (notB0 ==0){
       notB0=1;
   }
   else {
    notB0=0;
   }
   

   notB.push(notB3,notB2,notB1,notB0);
     notB30 =notB.join(""); // notB3 notB2 notB1 notB0
    //alert("notB30 " +notB30);
    

}

/* Binary to decimal notA */
function binary_todec_notA(){
    var bstrnotAinp=notA30;
	function bin_to_dec(bstrnotAinp) { 
    return parseInt((bstrnotAinp + '')
	.replace(/[^01]/gi, ''), 2);	
	}
	dec_valuenotAinp=bin_to_dec(bstrnotAinp);
    //alert("decnotA " +dec_valuenotAinp);
 }

/* Binary to decimal notB */
function binary_todec_notB(){
    var bstrnotBinp=notB30;
	function bin_to_dec(bstrnotBinp) { 
    return parseInt((bstrnotBinp + '')
	.replace(/[^01]/gi, ''), 2);	
	}
	dec_valuenotBinp=bin_to_dec(bstrnotBinp);
    //alert("decnotB " +dec_valuenotBinp);
}


/* 0 A' S3=0 S2=0 S1=0 S0=0 cn=0 M=1*/
function not_decA(){ //A'
	dec_sum= (dec_valuenotAinp);
    //alert("not A " +dec_sum);
    convertToBinary(dec_sum);
    
}

 /* A+B, S3=0 S2=0 S1=0 S0=0 cn=0 M=1*/
/*function decA_add_decB(){ //A'
	dec_sum= (~-dec_valueAinp );
    alert("Sum decimal " +dec_sum);
    convertToBinary(dec_sum);
    
}*/

/* A+B +1, S3=0 S2=0 S1=0 S0=0 cn=1 M=0*/
function decA_add_decB_carry(){ //A+B+1
    dec_sum=dec_valueAinp + dec_valuenotBinp+1;
    //alert("Sum decimalc" +dec_sumc);
    convertToBinary(dec_sum);
   // ledf03on();
}

/* 1 A'+B', S3=0 S2=0 S1=0 S0=1 cn=0 M=1*/
function decA_or_decB_bar(){ // (A'+B')
   
    dec_sum=(dec_valuenotAinp | dec_valuenotBinp);
    //alert("Sum decimalbar " +dec_sum);
   convertToBinary(dec_sum);
    //ledf03on();
}

/* 2 A'B, S3=0 S2=0 S1=1 S0=0 cn=0 M=1*/
function decAbar_decB(){ // (A'B)
   
    dec_sum=dec_valuenotAinp & dec_valueBinp;
   // alert("Sum decimalbar " +dec_sum);
   convertToBinary(dec_sum);
   
}

/* 3 Logic 0, S3=0 S2=0 S1=1 S0=1 cn=0 M=1*/
function logic0(){ // logic 0
   
    dec_sum=0;
    //alert("Sum decimalbar " +dec_sum);
   convertToBinary(dec_sum);
   
}

/* 4 (AB)', S3=0 S2=1 S1=0 S0=0 cn=0 M=1*/
function decAB_bar(){ // (AB)'
   
    dec_sum=(dec_valuenotAinp & dec_valuenotBinp);
    //alert("Sum decimalbar " +dec_sum);
   convertToBinary(dec_sum);
   
}

/*5   B', S3=0 S2=1 S1=0 S0=1 cn=0 M=1*/
function decB_bar(){ // B'
   
    dec_sum= dec_valuenotBinp;
    //alert("Sum decimalbar " +dec_sum);
   convertToBinary(dec_sum);
   
}

/* 6  A xor B, S3=0 S2=1 S1=1 S0=0 cn=0 M=1*/
function decA_xor_decB(){ // (A xor B)
   
    dec_sum=(dec_valueAinp ^ dec_valueBinp);
    //alert("Sum decimalbar " +dec_sum);
   convertToBinary(dec_sum);
   
}
/* 7 AB', S3=0 S2=1 S1=1 S0=1 cn=0 M=1*/
function decAB_bar(){ // AB'
   
    dec_sum=(dec_valueAinp & dec_valuenotBinp);
    //alert("Sum decimalbar " +dec_sum);
   convertToBinary(dec_sum);
   
}


/* 8 A'+B, S3=1 S2=0 S1=0 S0=0 cn=0 M=1*/
function decAbar_or_decB(){ // A'+B
   
    dec_sum=(dec_valuenotAinp | dec_valueBinp);
    //alert("Sum decimalbar " +dec_sum);
   convertToBinary(dec_sum);
   
}

/* 9  A'xor B', S3=1 S2=0 S1=0 S0=1 cn=0 M=1*/
function decAbar_xor_decBbar(){ // A' xor B'
   
    dec_sum=(dec_valuenotAinp ^ dec_valuenotBinp);
    //alert("Sum decimalbar " +dec_sum);
   convertToBinary(dec_sum);
   
}

/* 10  B, S3=1 S2=0 S1=1 S0=0 cn=0 M=1*/
function decB(){ // B
   
    dec_sum= dec_valueBinp;
    //alert("Sum decimalbar " +dec_sum);
   convertToBinary(dec_sum);
   
}
   
/* 11  AB, S3=1 S2=0 S1=1 S0=1 cn=0 M=1*/
function decAB(){ // AB
   
    dec_sum=(dec_valueAinp & dec_valueBinp);
    //alert("Sum decimalbar " +dec_sum);
   convertToBinary(dec_sum);
   
}     
/* 12 Logic 1, S3=1 S2=1 S1=0 S0=1 cn=0 M=1*/
function logic1(){ // logic 1
   
    dec_sum=1;
    //alert("Sum decimalbar " +dec_sum);
   convertToBinary(dec_sum);
   
}

/* 13 A+B', S3=1 S2=1 S1=0 S0=1 cn=0 M=1*/
function decA_or_decBbar(){ // A+B'
   
    dec_sum=(dec_valueAinp | dec_valuenotBinp);
   // alert("Sum decimalbar " +dec_sum);
   convertToBinary(dec_sum);
   
}

/* 14 A+B, S3=1 S2=1 S1=1 S0=0 cn=0 M=1*/
function decA_or_decB(){ // A+B
   
    dec_sum=(dec_valueAinp | dec_valueBinp);
   // alert("Sum decimalbar " +dec_sum);
   convertToBinary(dec_sum);
   
}

/*  15 A, S3=1 S2=1 S1=1 S0=1 cn=0 M=1*/
function decA(){ // A
   
    dec_sum=dec_valueAinp ;
    //alert("Sum decimalbar " +dec_sum);
   convertToBinary(dec_sum);
   
}

function convertToBinary(dec_sum) {
   
      
           var binary = "";
           for(i=0;i<4;i++)
           { 
            var remainder = dec_sum % 2;
               
               if(remainder == 0)
               { 
                   binary = binary + "0";
                   
               }
               else 
               {
                   binary = binary + "1";
                   
               }
              
              dec_sum = Math.trunc(dec_sum/2);
              //alert("decsum " +dec_sum);
           }
          
          var binaryStr1 = binary.split("");  //F0,F1,F2,F3
          var binaryStr2 = binaryStr1.reverse();  //F3,F2,F1,F0
           binaryStrF03 = binaryStr2.join(""); //F3F2F1F0
           //alert("F30c " +binaryStr2);
          // alert("F30 logic " +binaryStrF03);
  
           F3=binaryStr2[0];
           F2=binaryStr2[1];
           F1=binaryStr2[2];
           F0=binaryStr2[3];
          
          
           if (F3==0){
            document.getElementById("lon8").style.visibility="hidden";
            document.getElementById("loff8").style.visibility="visible";

               
           }else{
            document.getElementById("lon8").style.visibility="visible";
            document.getElementById("loff8").style.visibility="hidden";

           }

           if (F2==0){
            document.getElementById("lon3").style.visibility="hidden";
            document.getElementById("loff3").style.visibility="visible";
               
           }else{
            document.getElementById("lon3").style.visibility="visible";
            document.getElementById("loff3").style.visibility="hidden";

           }
         
           if (F1==0){
            document.getElementById("lon2").style.visibility="hidden";
            document.getElementById("loff2").style.visibility="visible";
               
           }else{
            document.getElementById("lon2").style.visibility="visible";
            document.getElementById("loff2").style.visibility="hidden";

           }
           if (F0==0){
            document.getElementById("lon1").style.visibility="hidden";
            document.getElementById("loff1").style.visibility="visible";
               
           }else{
            document.getElementById("lon1").style.visibility="visible";
            document.getElementById("loff1").style.visibility="hidden";

           }
           
  
}





/* Note: 

OR = |
AND = &
XOR = ^

*/