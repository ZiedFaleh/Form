function validateForm(){
    var name = document.getElementById('formGroupExampleInput').value ;
    var surname =document.getElementById('formGroupExampleInput2').value ;
    var  mail=document.getElementById('inputEmail4').value ;
    var  password=document.getElementById('inputPassword5').value;
    var  comment= document.getElementById('exampleFormControlTextarea1').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var adress1=document.getElementById('inputAddress').value;
    var adress2=document.getElementById('inputAddress').value;
    var city=document.getElementById('inputCity').value;
    var ZIP=document.getElementById('inputCity').value;
    var conditionacc=document.getElementById('gridCheck').checked;
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    if(name.length===0){
        alert("Please enter your name.")
        return false
    }
    if(surname.length===0){
        alert("Please enter your surname.")
        return false
    }
    if(mail.length===0){
        alert("please enter your mail")
        return false
    }
    if (!filter.test(mail)) {
        alert('Please provide a valid email address');
        mail.focus;
    
        return false;
    }
    if(password.length>=8){
        alert("The password must have less than 8 characters")
        return false
    }
    if (re.test(password) === false)
   {
       alert ("Please provide a valid password")
   }
    if(password.length===0){
        alert("please enter your password")
        return false
    }
    if(adress1.length===0){
        alert("Please enter your first adress")
        return false
    }
    if(adress2.length===0){
        alert("Please enter your second adress")
        return false
    }
    if(city.length===0){
        alert("Please enter your second adress")
        return false
    }
    if(ZIP.length===0){
        alert("Please enter your second adress")
        return false
    }
    if(comment.length===0){
        alert("please enter your comment")
        return false
    }
    if(conditionacc==false){
        alert("you have to accept conditions")
        return false
    }


}