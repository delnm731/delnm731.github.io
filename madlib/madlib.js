var words = {
    word1:"Wednesdays",
    word2:"Pink",
    word3:"Butter",
    word4:"Hair",
    word5:"Toaster Strudel",
 
}

function myfunction() {
        words.word1 = prompt("Please write a day of the week in plural");
        words.word2 = prompt("Please write your favorite color");
        words.word3 = prompt("Please write your favorite food");
        words.word4 = prompt("Please write a body part");
        words.word5 = prompt("Please write the name of a company");
      
    
    if (words.word1 != null) {
        document.getElementById("madlib").innerHTML = 
            "On" + ' ' + words.word1 + ' ' + "we wear" + ' ' + words.word2 + '<br>' + '<br>' + '<img src=karen.gif>' + '<br>' + '<br>' + "Is" + ' ' + words.word3 + ' ' + "a carb?" + '<br>' + '<br>' + '<img src=regina.gif>' + '<br>' + '<br>' + "That's why her" + ' ' + words.word4 + ' ' + "is so big, its full of secrets" + '<br>' + '<br>' + '<img src=damian.gif>' + '<br>' + '<br>' + "And I don't think my father, the inventor of" + ' ' + words.word5 + ' ' + "<br>would be too pleased to hear about this" + '<br>' + '<br>' + '<img src=gretchen.gif>' + '<br>' + '<br>';
    }
}