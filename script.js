const text_input = document.getElementById("text-input");
const button_input = document.getElementById("check-btn");
const result_frame = document.getElementById("result");
const result_text = document.getElementById("result_text");

const text_is_palindrome = `<i class="fa-solid fa-check big-icon"></i>${text_input.value} is a palindrome.`;
const text_is_not_palindrome = `<i class="fa-solid fa-xmark big-icon"></i>${text_input.value} is not palindrome.`;

//Test if user typed something into input field.
const is_empty = ()=>{
    if(!text_input.value){
        alert("Please input a value");
        return true;
    }
}

//Test if user input is a palindrome.
const is_palindrome = ()=>{

    //A single character is a palindrome by nature.
    if(text_input.value.length === 1){
        result_text.innerHTML = `<i class="fa-solid fa-check big-icon"></i>${text_input.value} is a palindrome.`;
       
    //Use string and array buit-in method to test if user input is a palindrome.
    //.split() convert string into an array of character; 
    //.revere() reverse an array;
    //.joint() return a string from an array.
    //when Chained these three methods return a reverted string.    
    }else if(text_input.value === text_input.value.split("").reverse().join("")){
        result_text.innerHTML = `<i class="fa-solid fa-check big-icon"></i>${text_input.value} is a palindrome.`;
        
    
    }else{
        result_text.innerHTML = `<i class="fa-solid fa-xmark big-icon"></i>${text_input.value} is not palindrome.`;
    }
    
}

const all_test = () =>{
    if (is_empty()){

    }else{
        is_palindrome();
    }
}

button_input.addEventListener("click",all_test);

//button_input.addEventListener("click",()=>{alert(text_input.value)});

