// // let odd = function(arr){
// //     let oddArray = [];
// //     for(let i of arr){
// //         if (i % 2 != 0){
// //             oddArray.push(i);
// //         }
// //     }
// //     return oddArray;
// // }

// // console.log(odd([1,2,3,4,5,6]))

// // var abc = (function(arr){
// //     let oddArray = [];
// //     for(let i of arr){
// //         if (i % 2 != 0){
// //             oddArray.push(i);
// //         }
// //     }
// //    console.log(oddArray)
// // })([1,2,3,4,5,6]);

// // var sum = function(inputArr){
// //     let result = 0;
// //     for (let i of inputArr){
// //         result += i;
// //     }
// //     return result;
// // }

// // console.log(sum([1,2,3,4,5]))

// // let result = (function(inputArr){
// //     let result = 0;
// //     for (let i of inputArr){
// //         result += i;
// //     }
// //     return result;
// // })([1,2,3,4,5])

// // console.log(result)

// // let prime = function(array){
// //     let primeArray = []
// //     for (let i of array){
// //         let flag = true;
// //         if (i == 1)
// //         continue;
// //         for (let k = 2; k <= Math.sqrt(i);k++) {
// //             if (i % k === 0) {
// //               flag = false
// //             }
// //           }
// //           if (flag === true){
// //             primeArray.push(i)
// //           }
// //     }
// //     return primeArray;
// // }

// // console.log(prime([1,2,3,4,5,6,7,8,9,10]));

// // let primee = (function(array){
// //     let primeArray = []
// //     for (let i of array){
// //         let flag = true;
// //         if (i == 1)
// //         continue;
// //         for (let k = 2; k <= Math.sqrt(i);k++) {
// //             if (i % k === 0) {
// //               flag = false
// //             }
// //           }
// //           if (flag === true){
// //             primeArray.push(i)
// //           }
// //     }
// //     return primeArray;
// // })([1,2,3,4,5,6,7,8,9,10])

// // console.log(primee)

// // const rotateArray = function(arr,k){
    
// //         k = k % arr.length; 
// //         return arr.slice(k).concat(arr.slice(0, k));
    
// // }
// // console.log(rotateArray([1,2,3,4,5,6],9));

// // let rotatedArray = (function(arr,k){
    
// //     k = k % arr.length; 
// //     return arr.slice(k).concat(arr.slice(0, k));

// // })([1,2,3,4,5,6],2);

// // console.log(rotatedArray);

// // const noDuplicatesArray = function(arr){
// //     const result = [];
// //     for (let i = 0; i < arr.length; i++) {
// //         if (result.indexOf(arr[i]) === -1) {
// //             result.push(arr[i]);
// //         }
// //     }
// //     return result;
// // }

// // console.log(noDuplicatesArray([1,2,3,4,1,2,4,5,3,5,3,5]))

// // //Output : [ 1, 2, 3, 4, 5 ]
// // const output = (function(arr){
// //     const result = [];
// //     for (let i = 0; i < arr.length; i++) {
// //         if (result.indexOf(arr[i]) === -1) {
// //             result.push(arr[i]);
// //         }
// //     }
// //     return result;
// // })([1,2,3,4,1,2,4,5,3,5,3,5]);
// // console.log(output)
// // const findAllPalindromes = (function(arr){
// //     const result = [];
    
// //     for (let i = 0; i < arr.length; i++) {
// //         const item = arr[i];
// //         const reversed = item.split('').reverse().join('');
// //         if (item === reversed) {
// //             result.push(item);
// //         }
// //     }
    
// //     return result;
// // })(["level", "hello","anam mana", "radar", "madam", "malayalam"]);

// // console.log(findAllPalindromes)


// // let titleCaps=(function (arr) {
// // 	arr = arr.toLowerCase().split(' ');
// // 	for (let i = 0; i < arr.length; i++) {
// // 		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// // 	}
// // 	return arr.join(' ');
// // })("hi hello from Guvi team")
// // //let result=titleCaps("hi hello from Guvi team")
// // console.log(titleCaps);

// // let findMedianSortedArrays = (function (arr1, arr2) {
// //     const mergedArray = [];
// //     let i = 0, j = 0;
// //     let arrayLength = arr1.length;


  
// //     while (i < arrayLength) {
// //         if (arr1[i] < arr2[j]) {
// //             mergedArray.push(arr1[i]);
// //             i++;
// //         } else {
// //             mergedArray.push(arr2[j]);
// //             j++;
// //         }
// //     }

// //     while (i < arrayLength) {
// //         mergedArray.push(arr1[i]);
// //         i++;
// //     }

// //     while (j < arrayLength) {
// //         mergedArray.push(arr2[j]);
// //         j++;
// //     }

// //     // Calculate median
// //     const mid = Math.floor(mergedArray.length / 2);
// //     if (mergedArray.length % 2 === 0) {
// //         return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
// //     } else {
// //         return mergedArray[mid];
// //     }
// // })([1, 3, 5],[2, 4, 6]);

// // console.log(findMedianSortedArrays);

// // let odd = (arr) =>{
// //     let oddArray = [];
// //     for(let i of arr){
// //         if (i % 2 != 0){
// //             oddArray.push(i);
// //         }
// //     }
// //     return oddArray;
// // }

// // console.log(odd([1,2,3,4,5,6]))

// // let titleCaps= (arr)=> {
// //     arr = arr.toLowerCase().split(' ');
// //     for (let i = 0; i < arr.length; i++) {
// //         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// //     }
// //     return arr.join(' ');
// // }

// // console.log(titleCaps("hello from canada"))

// // var sum = (inputArr)=>{
// //     let result = 0;
// //     for (let i of inputArr){
// //         result += i;
// //     }
// //     return result;
// // }

// // console.log(sum([1,2,3,4,5]))

// // let prime = (array)=>{
// //     let primeArray = []
// //     for (let i of array){
// //         let flag = true;
// //         if (i == 1)
// //         continue;
// //         for (let k = 2; k <= Math.sqrt(i);k++) {
// //             if (i % k === 0) {
// //               flag = false
// //             }
// //           }
// //           if (flag === true){
// //             primeArray.push(i)
// //           }
// //     }
// //     return primeArray;
// // }

// // console.log(prime([1,2,3,4,5,6,7,8,9,10]));

// // const findAllPalindromes = (arr)=>{
// //     const result = [];
    
// //     for (let i = 0; i < arr.length; i++) {
// //         const item = arr[i];
// //         const reversed = item.split('').reverse().join('');
// //         if (item === reversed) {
// //             result.push(item);
// //         }
// //     }
    
// //     return result;
// // }

// // console.log(findAllPalindromes(["level", "hello", "madam", "guvi", "malayalam"]))

// // let resume = {
// //     "name": "REMYA KAMBIL VENGARATH",
// //     "location": "Kitchener, Ontario",
// //     "email": "remya.vengarath@gmail.com",
// //     "phone": "(416) - 831-8400",
// //     "linkedin": "https://www.linkedin.com/in/remya-kv/",
// //     "work_experience": [
// //       {
// //         "company": "Aftia Solutions, Canada",
// //         "position": "System Analyst",
// //         "dates": "Dec 2021 – Aug 2022",
// //       },
// //       {
// //         "company": "Lowe’s Services India Pvt Ltd, India",
// //         "position": "Senior AEM Software Engineer",
// //         "dates": "Mar 2016 – Sep 2021",
// //       },
// //       {
// //         "company": "Cognizant Technology Solutions, India",
// //         "position": "AEM Associate Developer",
// //         "dates": "Mar 2013 – Mar 2016",
        
// //       },
// //       {
// //         "company": "ARS Traffic & Transport Technology (ARS T&TT), India",
// //         "position": "Software Developer JAVA",
// //         "dates": "Jul 2010– Feb 2013",
        
// //       }
// //     ],
// //     "education": [
// //       {
// //         "institution": "Calicut University, India",
// //         "degree": "Bachelor of Technology: Information Technology",
// //         "dates": "Aug 2005 – Jun 2009"
// //       }
// //     ],
// //     "skills_and_certifications": {
// //       "technical_skills": [
// //         "Java",
// //         "Apache Sling",
// //         "OSGI Framework",
// //         "HTL",
// //         "HTML5",
// //         "CSS",
// //         "JS",
// //         "Maven",
// //         "JIRA",
// //         "Github"
// //       ],
// //       "soft_skills": [
// //         "Adaptability",
// //         "Problem Solving",
// //         "Leadership",
// //         "Collaboration",
// //         "Adaptation to Agile Practices"
// //       ],
// //       "certifications": [
// //         "Certified Adobe Experience Manager Sites Developer Professional (AD0-E123)",
// //         "Pursuing Full Stack Development Bootcamp Certification program from GUVI | Accredited by Google for Education Partner- Completion Date: [Feb 2024]"
// //       ]
// //     },
// //     "additional_information": {
// //       "languages": ["English", "Hindi", "Malayalam"]
// //     }
// //   }

// //   let technical_skills = resume.skills_and_certifications.technical_skills;
// //   for (let i=0; i<technical_skills.length;i++){
// //     console.log(technical_skills[i]);
// //   }

// //   for (const index in resume.work_experience) {
    
// //     const job =resume.work_experience[index];
// //     console.log(`Company is ${job.company} ,Position is ${job.dates} and dates ${job.dates}` );     
    
// //   }

// //   for (let item of resume.skills_and_certifications.soft_skills){
// //     console.log(item);

// //  }

// //  let certifications = resume.skills_and_certifications.certifications;

// //  certifications.forEach((item)=>{
// //     console.log(item);
// //  })

// // class Movie{
// //     constructor(title,studio,rating="PG"){
// //         this.title = title;
// //         this.studio = studio;
// //         this.rating = rating;
// //     }

// //     getPG(movies){
// //         let pgRatingMovies = [];
// //         for (let movie of movies){
// //             if (movie.rating === "PG"){
// //                 pgRatingMovies.push(movie);
// //             }
// //         }
// //         return pgRatingMovies;

// //     }
// // }

// // casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");

// // movie1 = new Movie("abc","124");
// // movie2 = new Movie("aaa","123","PG1");
// // movie3 = new Movie("bbb","234","PG12");
// // movie4 = new Movie("ccc","345","PG");
// // movie5 = new Movie("ddd","567","PG");

// // movielist = [movie1,movie2,movie3,movie4,movie5]

// // console.log(casinoRoyale.getPG(movielist))

// // class Circle{
   
// //     constructor(radius,color){
// //         this.radius = radius;
// //         this.color = color;
// //     }

// //     getRadius(){
// //         return this.radius;
// //     }

// //     setRadius(radius){
// //         this.radius = radius;
// //     }

// //     getColor(){
// //         return this.color;
// //     }
// //     setColor(color){
// //         this.color = color;
// //     }

// //     toString(){
// //         return `Circle -Radius ${this.radius}, Color ${this.color}`
// //     }

// //     getArea(){
// //         return Math.PI*this.radius*this.radius;
// //     }

// //     getCircumference(){
// //         return Math.PI*2*this.radius
// //     }
// // }

// // sample = new Circle(2,"Pink");

// // console.log(sample.getRadius());
// // console.log(sample.toString())
// // console.log(sample.getCircumference());

// // class Person {
// //     constructor(firstName, lastName, age, email,gender) {
// //       this.firstName = firstName;
// //       this.lastName = lastName;
// //       this.age = age;
// //       this.email = email;
// //       this.gender = gender;
// //       this.friends = [];
// //     }

// //     setFirstName(firstName){
// //         this.firstName = this.firstName;
// //     }

// //     getFirstName(){
// //         return this.firstName;
// //     }

// //     setLastName(lastName){
// //         this.lastName = lastName;
// //     }

// //     getLastName(){
// //         return this.lastName();
// //     }

// //     getFullName(){
// //         return `${this.firstName} ${this.lastName}`;
// //     }

// //     setGender(gender){
// //         this.setGender(gender);
// //     }
// //     getGender(){
// //         return this.gender;
// //     }

// //     setAge(age){
// //         this.setAge(age);
// //     }

// //     getAge(){
// //         return this.getAge;
// //     }

// //     setEmail(email){
// //         this.email = email;
// //     }

// //     getEmail(){
// //         return this.email;
// //     }

// //     addFriend(friend){
// //         this.friends.push(friend);
// //     }

// //     getFriends(){
// //         return this.friends;
// //     }

    
// // }
  

// // person1  =  new Person("John","Baby",30,"johnbaby@gmail.com","male");
// // person1.addFriend("Abraham");
// // person1.addFriend("Julie");
// // person1.addFriend("Cathy");

// // console.log(person1.getFullName)
// // for(let item of person1.friends){
// //     console.log(item);
// // }


// class CabPriceCalculator {
//     constructor(baseFare, costPerKm) {
//       this.baseFare = baseFare;
//       this.costPerKm = costPerKm;
      
//     }
  
//     calculatePrice(distance) {
//       const distanceCost = distance * this.costPerKm;
//       const totalPrice = this.baseFare + distanceCost;
//       return totalPrice;
//     }
//   }
  
//   // Example usage:
//   const calculator = new CabPriceCalculator(2.5, 50); // Example rates
//   const distance = 10; // in kilometers
  
  
//   const totalPrice = calculator.calculatePrice(distance);
//   console.log(`Total price for the ride: Rs ${totalPrice.toFixed(2)}`);

function a(){
  
  for(var i=0;i<=5;i++){
    function close(i){
        setTimeout(function(){
    console.log(i);
  },i*1000);
  }
  close(i);
}

}

a();
console.log("Hello Rems");