// let h1=document.createElement('h1');
// h1.innerText = 'This is Kiara s favorite flower';
// //h1.setAttribute('id','heading');
// h1.setAttribute('class','heading1');
// document.getElementById('alert').append(h1);

// let img=document.createElement('img');
// img.setAttribute('src','kiara.jpg');


// img.style.cssText +='height:600px; width:700px; background-color: pink';
// h1.style.backgroundColor= 'pink';
// document.body.append(img);




// document.body.appendChild(img);
//console.log(window);
//console.log(window.document);

setTimeout(()=>{
    console.log("Hello");
},5000);


// function startTimer(){
 
//        for(let i =1; i<=10 ;i++){
//         setTimeout(()=>{
//            let p =  document.createElement('h1');
//            p.innerText = i;
//            document.body.append(p);
//             console.log(i);
//            // i++;
//             if(i ==11){
//                 return;
//             }
           
//         },5000)
//        }
// }

// function startTimer(){
// let count = 1;

// const timer = setInterval(() => {

//     document.getElementById('time').innerText = count;
//   console.log(count);
//   count++;
  
//   if (count > 10) {
//     clearInterval(timer); // Stop the timer when count reaches 10
//   }
// }, 1000); 

//}

function startTimer(count) {
    //let count =1;
    console.log(count);
    document.getElementById('time').innerText = count;
    if (count < 10) {
      setTimeout(() => {
        startTimer(count + 1);
      }, 1000); // Interval of 1000 milliseconds (1 second)
    }
  }
  
 // printNumber(1);