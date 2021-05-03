console.log(" debut du programme");


let phrase = "une phrase lol ou non";
// ----- 
const methodePalindrome = (phraseData) => {
    let data = phraseData.split(' ');
    function verif(){
        data.forEach(element => {
            let palinDrome = element.split("").reverse().join('');
            if(palinDrome == element){
                console.log("palindrome OK : "+element);
            }else{
                console.log("palindrome not OK : "+element);
            }
        });
    }
    verif();
    console.log(data);
}

methodePalindrome(phrase);