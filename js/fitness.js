
  var count2=0;




const calculateBMI=()=>
{
  
    
    //Display result
    document.getElementById("result").style.display="inline";
   //Getting Age,Height and Weight from fitness.html
  
  let myHeight=document.getElementById("height").value;
  let myWeight=document.getElementById("weight").value;
 
//  Calculating BMI for adults
 var foot="",inch="",decision=0 ,inch2="";
 

 if(checkValue() % 2 ==0)
 {     
   
    // console.log("Enter the IF");
  for(var count2=0; count2<myHeight.length ; count2++)
  {
     if(myHeight[count2]!="_" && decision==0)
     {
         foot=foot.concat(myHeight[count2])
     }
     else
     {
     decision++;
     inch=inch.concat(myHeight[count2]);
     inch2=inch.substr(1,inch.length);
     
     }

  }
  myHeight=((0.0254*inch2)+(0.3048*foot))*100;

  myWeight=myWeight*0.453592;

}

  
 const BMI= (myWeight/((myHeight*0.01)**2)).toFixed(1);


 document.getElementById("result").innerHTML=`Your BMI is: ${BMI}`;
 //getting IDS of result boxes
 const box1=document.getElementById("box1");
 const box2=document.getElementById("box2");
 const box3=document.getElementById("box3");
 const box4=document.getElementById("box4");
 
 const fadeout=()=>
 {
     document.getElementById("result").style.display="none";
     //reseting the bar
     box1.style.background="red";
     box2.style.background="green";
     box3.style.background="orangered";
     box4.style.background="red";
     box1.style.color="white";
     box2.style.color="white";
     box3.style.color="white";
     box4.style.color="white";
 

    }
 setTimeout(fadeout,5000);





 if(BMI<18.5)
 {
     box2.style.background="white";
     box3.style.background="white";
     box4.style.background="white";
     box1.style.background="red";
   
 }
else if(18.5<BMI && BMI<24.9)
 {
     box1.style.background="green";
     box1.style.color="green";
     box3.style.background="white";
     box4.style.background="white";
     box1.style.color="green";
 }

 else if(24.9<BMI && BMI<29.9)
 {
     box1.style.background="orangered";
     box2.style.background="orangered";
     box4.style.background="white";
     box1.style.color="orangered";
     box2.style.color="orangered";
 }
 else 
 {

     box1.style.background="red";
     box2.style.background="red";
     box3.style.background="red";
     box1.style.color="red";
     box2.style.color="red";
     box3.style.color="red";
     
 }


}



const metricDisplay=()=>
{

    document.getElementById("height").placeholder="Enter your Height(cm)";
    document.getElementById("weight").placeholder="Enter your Weight(kg)";
    //Change of color on pressing the button
    document.getElementById("usUnits").style.background="red";
    document.getElementById("metricUnits").style.background="blue";
    count2=0;
  

}

const usDisplay=()=>
{



   document.getElementById("weight").placeholder="Enter your Weight (Pounds)";
   document.getElementById("height").placeholder="Enter your Height (foot and inches) e.g 5_7";
   //change of color on pressing the button
   document.getElementById("usUnits").style.background="blue";
   document.getElementById("metricUnits").style.background="red";
 
   count2=count2+2;
   

}

const checkValue=()=>
{   
    
    return count2;
  
}
