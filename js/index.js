/* 변수 생성 */
const fr = document.querySelector("section");
const lists = fr.querySelectorAll("article");
const deg = 45;
const leng = lists.length-1;
let i = 0;

/* 회전 시키고 거리두기 */
for(let list of lists) {
    list.style.transform = `rotate(${deg* i}deg) translateY(-100vh)`;
    i++;
}

/* 변수 생성 */
const previous = document.querySelector(".lb");
const next = document.querySelector(".rb");
let num = 0;
let active = 0;

/* 클릭했을 때 회전시키기 & 내부 반복할 수 있도록 코드 생성 */
next.addEventListener("click", ()=>{
    num++;
    fr.style.transform = `rotate(${deg* num}deg)`;    

    (active == 0 ) ? active = leng : active--;
});

/* 클릭했을 때 회전시키기 & 내부 반복할 수 있도록 코드 생성 */
previous.addEventListener("click", ()=>{
    num--;   
    fr.style.transform = `rotate(${deg* num}deg)`;   

    (active == leng ) ? active = 0 : active++;
});

