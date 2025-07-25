
   document.addEventListener('keydown', (e)=>{
    if(e.key == "Enter"){
      myFunction()
    document.getElementById("totalmarks").value = "";
    }
   })
        function myFunction(){
            let marks = document.getElementById("totalmarks").value;
            let result;
            if(marks>=96 ){
                result = "You have Entered " + marks + " marks: " + " Outstanding Your Grade is " + "A+";
                document.getElementById("output").style.background = "green";
            }
            else if(marks>=90 && marks<=95 ){
                result = "You have Entered " + marks + " marks: " + " Outstanding Your Grade is " + "A";
                document.getElementById("output").style.background = "green";
            }
            else if(marks<=89 && marks>=80){
                result ="You have Entered " + marks + " marks: " +  " Excellent Your Grade is " + "B";
                document.getElementById("output").style.background = "orange";
            }
            else if(marks<=79 && marks>=70){
                result = "You have Entered " + marks + " marks: " + " Good Your Grade is " + "C";
                document.getElementById("output").style.background = "brown";
            }
            else if(marks<=69 && marks>=60){
                result ="You have Entered " + marks + " marks: " +  " Your Grade is " + "D";
                document.getElementById("output").style.background = "black";
            }
            else if(marks<=59 && marks>=40){
                result ="You have Entered " + marks + " marks: " +  " Your Grade is " + "E";
                document.getElementById("output").style.background = "gray";
            }
            else {
                result ="You have Entered " + marks + " marks: " +  " Your Grade is F"
                document.getElementById("output").style.background = "red";
            }
            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = result;
 }
