console.log("hellow");
let items_title= document.getElementsByClassName('items_title')
const issues_items_main = document.getElementById("issues_items_main")

// toggle stye fiter
let all_filter_btn = document.getElementById('all_filter_btn');
let open_filter_btn = document.getElementById('open_filter_btn');
let close_filter_btn = document.getElementById('close_filter_btn');

// overlay design here 
let overlay_main = document.getElementById('overlay_main')

// close btn here 
let closes_btn = document.getElementById('closes_btn')

// popu section design here 
let poups_section =document.getElementById('poups_section')

function loadItems(){
fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues").then((res)=>res.json()).then((items)=>{
  console.log(items);
  document.getElementById("total_issues").innerText = items.data.length;

  items.data.forEach(item => {
    console.log(item);

    const issues_item = document.createElement('div');
    issues_item.className= "issues_item";
    issues_item.innerHTML= `
    <div class="issues_items_head">
        <img src="./assets/Open-Status.png" alt="">
        <button>${item.priority}</button>
      </div>
      <div class="issues_items_contents">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
      </div>
      <div class="issues_items_btns">
        <button class="bug_btn">BUG</button>
        <button class="help_btn">HElP WANTED</button>
      </div>
      <div class="issues_items_bottom">
        <P># ${item.author}</P>
        <P>${item.createdAt}</P>
      </div>
    `
    issues_items_main.appendChild(issues_item);
  });

}).catch((e) => console.log(e));
}

loadItems();


// toggle stye here 
function toggleStyle(id){
  all_filter_btn.classList.remove('active')
  open_filter_btn.classList.remove('active')
  close_filter_btn.classList.remove('active')

  const selected = document.getElementById(id)
  curentStatus = id
  selected.classList.add('active')}

  // add event litisher here 
  issues_items_main.addEventListener('click', function(event){
    console.log(event)
    overlay_main.classList.remove('hidden');
  })

  // close overlay here 
  function closeBtn(){
    overlay_main.classList.add('hidden');
  }


function login(){

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if(username === "admin" && password === "admin123"){
      window.location.href = "./home.html";
  }else{
      alert("Invalid Login info");
  }

}
