const button = document.getElementById('header-button');
const firstRow = document.getElementById('first-row');
const secondRow = document.getElementById('second-row');
const thirdRow = document.getElementById('third-row');
const contuctHeader = document.getElementById('contact-us-header');
const numberWrapper = document.getElementById('number-wrapper');


button.addEventListener('click', function(){
    if(secondRow.style.display == "none"){
        secondRow.style.display = ""
        secondRow.style.transition = "all 1s"
        firstRow.style.transform = "rotate(0deg)"
        firstRow.style.top = ""
        firstRow.style.transition = "all 0.3s"
        thirdRow.style.transform = "rotate(0deg)"
        thirdRow.style.top = ""
        thirdRow.style.transition = "all 0.3s"
    }
    else{
        secondRow.style.display = "none"
    firstRow.style.transform = "rotate(45deg)"
    firstRow.style.top = "12px"
    firstRow.style.transition = "all 0.3s"
    thirdRow.style.transform = "rotate(-45deg)"
    thirdRow.style.top = "12px"
    thirdRow.style.transition = "all 0.3s"
    }
    
    
})
contuctHeader.addEventListener('click', function(event){
    event.preventDefault();
    if(numberWrapper.style.top == "70px"){
        numberWrapper.style.top = "0px"
    numberWrapper.style.transition = "all 0.4s"
    }
    else{
        numberWrapper.style.top = "70px"
        numberWrapper.style.transition = "all 0.4s" 
    }

})
