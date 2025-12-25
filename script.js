function go(n) {
  document.querySelectorAll('.page')
    .forEach(p => p.classList.remove('active'));
  document.getElementById('page'+n).classList.add('active');
  if(n === 2) initScratch();
}

const people = [
  { name: "Rahul Sharma", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Sneha Patel", img: "https://randomuser.me/api/portraits/women/45.jpg" },
  { name: "Aman Verma", img: "https://randomuser.me/api/portraits/men/75.jpg" },
];

function initScratch() {
  const p = people[Math.floor(Math.random()*people.length)];
  photo.src = p.img;
  name.innerText = p.name;
  budget.innerText = "Budget: ₹" + (500 + Math.floor(Math.random()*1000));
  message.innerText = "Make it magical 🎄✨";

  const c = scratch;
  const ctx = c.getContext("2d");
  c.width = 300;
  c.height = 420;

  ctx.fillStyle = "#bbb";
  ctx.fillRect(0,0,c.width,c.height);
  ctx.globalCompositeOperation = "destination-out";

  let scratched = 0;
  let down = false;

  function draw(x,y) {
    ctx.beginPath();
    ctx.arc(x,y,28,0,Math.PI*2);
    ctx.fill();
    scratched++;
    if(scratched > 120) {
      c.style.opacity = 0;
      setTimeout(()=>go(3),1500);
    }
  }

  c.onmousedown = ()=>down=true;
  c.onmouseup = ()=>down=false;
  c.onmousemove = e => down && draw(e.offsetX,e.offsetY);

  c.ontouchmove = e => {
    e.preventDefault();
    const r = c.getBoundingClientRect();
    draw(e.touches[0].clientX-r.left, e.touches[0].clientY-r.top);
  };
}
