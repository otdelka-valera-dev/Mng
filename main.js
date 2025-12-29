    const k = document.getElementById('nn');
    const e = document.getElementById('mm');
    const l = document.getElementById('lone');
    const ll = document.getElementById('ltwo');
    let search = document.getElementById('contact');
    let home = document.getElementById('one');
    let chat = document.getElementById('two');
    let info = document.getElementById('three');
    l.addEventListener('touchstart', ()=>{alert('Вы не являйтесь участником MIRAGE, или ваш запрос пока не одобрили');});
    ll.addEventListener('touchstart', ()=>{alert('Для добавления контактов, необходимо быть участником MIRAGE');});
    k.addEventListener('touchstart', kn);
    let i = true;
    function kn(){
      if(i){
      e.style.right = '0px';
      home.style.right = '2vw';
chat.style.right = '2vw';
info.style.right = '2vw';
        i = false;
      }
      else{
        e.style.right = '-50vw';
home.style.right = '-45vw';        
chat.style.right = '-45vw';   
info.style.right = '-45vw';
        i = true;
      }
      }
      let a = false;
search.addEventListener('touchstart', ()=>{ if(a == false){a = true; ac();}});
function ac(){
  setTimeout(()=>{
    search.textContent = '';},200)
}
document.addEventListener('touchstart', ()=>{
    if(event.target.id !== 'contact'&&event.target.id !== 'sccs'){
        search.textContent = "Поиск контактов"; a = false;
    }
});
let c = 1;
    let pages = {
      home: `
      <title>главная</title>
      <style>
  .mi{
    width: 70vw;
    height: 50vw;
    position: absolute;
    top: 10vh;
    right: 5vw;
  }
  .dp{
    position: absolute;
    top: 70vw;
    right: 5vw;
    color:#42424c;
    font-size: 5vw;
   border-right: 2px solid #363640;
   border-left: 2px solid #363640;
  }
  .vn{
    position: absolute;
    width: 100vw;
    background: #212123;
    top: 50rem;
    height: 30vw;
  }</style>
    <img src="mirage.png" class="mi">
    <p class="dp">добро пожаловать в<br> сообщество MIRAGE.<br> Этот сайт предназначен <br>для общения между<br> фанатами, сотрудниками<br> организации MIRAGE.</p>
    <div class="vn"></div>`,
    chat: `
    <title>чат</title>
<style>
  .sc{
    width: 70vw;
    height: 100vw;
    position: absolute;
    background: white;
    top: 10vh;
    right: 5vw;
    display: flex ;
    justify-content: flex-start;
  }
  .scs{
    width: 70vw;
    height: 15vw;
    background: #464444;
    position: absolute;
    top: 85vw;
    right: 0vw;
    display: flex;
    align-items: center;
  }
  .sccs{
    position: absolute;
    width: 15vw;
    height: 15vw;
    background: #292929;
    border-radius: 50%;
    right: 0vw;
  }
  .cssc{
    position: absolute;
    width: 50vw;
    height: 9vw;
    background: white;
    overflow: hidden;
    left: 1vw;
  }
  .dp{
    position: absolute;
    top: 10vw;
    left: 1vw;
    color:rgba(2,2,200,0.4);
    font-size: 3.9vw;
  }
  .pd{
   position: absolute;
    top: 25vw;
    left: 1vw;
    color:rgba(60,2,200,0.4);
    font-size: 3.9vw;
  }
  .npc{
    position: absolute;
    top: 15vw;
    left: 1vw;
    color:black;
    font-size: 3.9vw;
  }
  .cpn{
    position: absolute;
    top: 30vw;
    left: 1vw;
    color:black;
    font-size: 3.9vw;
  }
  .new{
    background: rgba(2,2,2,0.4);
    width: 15vw;
    height:10vw;
    position: absolute;
    top: 1vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10%;
  }
  .now{
    color: white;
  }
</style>
    <div class="sc">
    <p class="dp">user_name5</p>
    <p class="pd">user_name17</p>
    <div class="new"><p class="now">новое</p></div>
    <p class="npc">слушай, ну прикольно тогда</p>
    <p class="cpn">удачи mirage в продвижении</p>
      <div class="scs">
        <div class="cssc" contenteditable="true" id="cssc"></div>
        <div class="sccs" id="sccs"></div>
      </div>
    </div>
    `,
    info: `
    <title>о нас</title>
    <style>
    .vid{
    background: white;
    position: absolute;
    right: 10px;
    top: 70px;
    width: 100px;
    height: 60px;
    display: flex;
    align-content:center;
    }
    .kg{
    font-size:1rem;
    position:absolute;
    right:10px;
    top:20px;
    }
    .gk{
    font-size:0.5rem;
    position:absolute;
    right:10px;
    }
    </style>
    <div class="vid"><h1 class="kg">2нгн5</h1>
    <p class="gk">4лприлг 6 ашикгр 3 плпон 11 оргл5 +%×-</p></div>
    
    `
    };
    let g = 1;
    home.addEventListener('touchstart', ()=>{ c = 1; gh();});
    chat.addEventListener('touchstart', ()=>{ c = 2; gh();});
    info.addEventListener('touchstart', ()=>{ c = 3; gh();});
    function gh(){
      if(c == 1){
        document.getElementById('body').innerHTML = pages.home;
        g = 1;
      }
      else if(c == 2){
        document.getElementById('body').innerHTML = pages.chat;
        g = 2;
        ini();
      }
      else if(c == 3){
        document.getElementById('body').innerHTML = pages.info;
        g = 3;
      }
e.style.right = '-50vw';
home.style.right = '-45vw';        
chat.style.right = '-45vw';        
info.style.right = '-45vw';
    }
//сьптная
// 7 7 -2 -16 -7
// -4 -6 -9 -10 16 1 -31
// 6 -6 4 -9 -2 1 -8 и о н и с т
// 8 2 10 -21 -7 2 -2 н ы й
// 11 4 -11 -16 14 10 -23
// 8 -9 2 -29 6 -4 -17 ы й
    gh();
let start = Date.now();
let page = document.title;
setInterval(()=>{
if(page != document.title){
let sec = Math.round((Date.now()-start)/1000);
let old = JSON.parse(localStorage.times||'{}');
old[page]=(old[page]||0) + sec;
localStorage.times=JSON.stringify(old);
console.log(localStorage.times);
page = document.title;
start = Date.now();
}
},1000);
/*https://(чел.челчелчелчелчелче
-
англо:  
50 46 55 38 44 42 46 46 47
).github.io/(
чел.челчелчелчелчелче
-
англо:
46 51 40 49 58-40 52 40 58-56 52 59 46 45 38
)/
*/