console.log("안녕하세요");
const titleElement = document.getElementById("title");
title.textContent = "JS로 제목을 변경합니다!";


let age = 20; //변수
console.log(age);
age = 30;
console.log(age);


const user_name= '홍길동'; //상수
console.log(user_name);


let num = -39;
if (num >= 0) {
  console.log("양수");
} else {
  console.log("음수");
}


for (let i = 1; i <= 10; i++) {
  console.log(i);
}


function rect_area() {
  let width = 10;
  let height = 20;
  let area = width * height;
  console.log(area);
}
rect_area();


function rect_area(width, height) { 
  let area = width * height;
  console.log(area);
}
rect_area(10, 20); 
rect_area(15, 25); 