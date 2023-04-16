let left = document.getElementById('left');
let right = document.getElementById('right');
var a = [0,0,0,0,0,0,0,0,0,0,0];// =     {0};
//a = a(length).fill(0);
var ans;
var leftNum='1';
var rightNum='2';
left. addEventListener('click', function () {
    a[parseInt(leftNum)-1]= a[parseInt(leftNum)-1]+1;
    if(a[parseInt(leftNum)-1]>=9){
        //ans = number(leftNum);

    //     const ul = document.querySelector(".edit");
    // const exist1 = document.createElement("li");
    // exist1.textContent = " looks like you've found your fav ";
    // exist1.classList.add("edited");
    // ul.appendChild(exist1); 
    setTimeout(function() {
        finish((leftNum));
      }, 0000);
      
    //console.log("your fav is ")
    //setTimeout(finish(),90000,a[parseInt(leftNum)-1]);
        //function to go to next page
        //finish();
   }
rightNum = getImage();
right.setAttribute('src', `img${rightNum}.jpg`)
})
right.addEventListener('click', function () {
    a[parseInt(rightNum)-1]= a[parseInt(rightNum)-1]+1;
    if(a[parseInt(rightNum)-1]>=9){
    //     const ul = document.querySelector(".edit");
    // const exist1 = document.createElement("li");
    // exist1.textContent = " looks like you've found your fav "; 
    // exist1.classList.add("edited");
    // ul.appendChild(exist1);
    setTimeout(function() {
        finish((rightNum));
      },0000);
      

    //setTimeout(finish(),90000,a[parseInt(rightNum)-1]);

        //function to go to next page
        //ans = number(rightNum)
        //finish();
    }
    leftNum = getImage(); // we got the other picture to change
    left.setAttribute('src', `img${leftNum}.jpg`);
})

function getImage(){
let zero = '0';
let number = Math.ceil(Math.random() * 10) ;
//if (number != 10) { // creating the file number by adding zero
//number = zero + number;
//}
if (number != leftNum && number != rightNum) {
// we need different people by each clicking
return number;
}
else if (number== leftNum || number==rightNum){
return getImage(); // if random number is already appearing on the screen, then create a new one.
}
}
function finish(i){
    window.alert("looks like you've found your fav");

     if(i==1)
     window.alert("you fav is aaditya");
         else if(i==2)
        window.alert("you fav is daksh ");
            else if(i==3)
            window.alert("you fav is nathan");
            else if(i==4)
            window.alert("you fav is divyam");
            else if(i==5)
            window.alert("you fav is sarves");

    else if(i==6)
    window.alert("you fav is samyak");
    else if(i==7)
    window.alert("you fav is ayush");
    else if(i==8)
    window.alert("you fav is harsh");
    else if(i==9)
    window.alert("you fav is harshvardhan");    
    else if(i==10)
    window.alert("you fav is owais");
    else if(i==11)
    window.alert("you fav is aryan");

    setTimeout(window.close(), 0000);
    
}
