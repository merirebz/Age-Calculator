function cal() {
    const birthdate = document.getElementById ("inp").value;
    const resultElement = document.getElementById("result") ;
    if (birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate) ;
    let ageYears = today.getFullYear() - birthDate.getFullYear ();
    let ageMonths = today.getMonth () - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate ();

    if (ageDays < 0) {
    ageMonths --;
    ageDays += new Date(
    today.getFullYear(),
    today.getMonth() ,
    0
    ).getDate();
    }
    if (ageMonths < 0) {
    ageYears -- ;
 
    ageMonths += 12;
    }
    resultElement.innerText=`Your age is  ${ageYears} years, ${ageMonths} months, and ${ageDays} days`;
  
    }
   else{
    resultElement.innerText="Pls enter your date of birth";
    resultElement.style.color="red"
   }
}