const noBtn = document.getElementById("nobtn");
const yestBtn =document.getElementById("yesbtn");
noBtn.addEventListener("mouseover",()=>{
    const x =Math.random()*200 -100;
    const y =Math.random()*200 -50;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

});
yestBtn.addEventListener("click", ()=>{
    document.body.innerHTML= `<div class="card">
            <h1> 💖 YAY!!!.💖</h1>
            <p> Best Desicion Ever😘🫂</p>
            <img src="https://media.tenor.com/Rb2vC8Cs9O0AAAAM/silvia-emoji-cute-bear.gif">
            <h2> I LOVE UH💓 </h2>
            <h5 >Uh Must Be Greate Full That U Got Mee hehhehehhee😁</h5>
        </div>
    `;
    
});
