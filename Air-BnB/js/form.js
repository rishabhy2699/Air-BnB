
var button = document.querySelector('#B');

var form = document.querySelector('.DB');

var input

button.addEventListener("click" , run)

function run(){

    input = prompt("Please Confirm Your Submission(YES/NO)");

   if(input === 'YES' || input === 'yes' || input === 'Yes'){

       alert("Thankyou For Confirmation");
   
    }

    else if(input === ""){

        alert("Please Enter (YES/NO)")
        run();
    }

    else if(input === 'NO' || input === 'No' || input === 'no'){

        alert("Ok Fill The Form Again")
        form.reset();
        
    }
   
   else {

       alert("Kindly Type (yes or no) in correct manner ");

   }
  
}

