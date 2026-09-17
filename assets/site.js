
(function(){
  const WA_NUMBER="905459320050";
  const directText="Hello, I have a question about a Kayseri Airport transfer.";
  function qs(sel,root=document){return root.querySelector(sel)}
  function qsa(sel,root=document){return [...root.querySelectorAll(sel)]}


  const menuBtn=qs(".menu");
  const navLinks=qs(".navlinks");
  if(menuBtn && navLinks){
    menuBtn.addEventListener("click",()=>{
      navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", navLinks.classList.contains("open") ? "true" : "false");
    });
  }

  qsa(".quick-form").forEach(form=>{
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const data=new FormData(form);
      const p=new URLSearchParams();
      ["direction","destination","date","passengers"].forEach(k=>{ if(data.get(k)) p.set(k,data.get(k)); });
      location.href="/booking/?"+p.toString();
    });
  });

  const full=qs("#full-booking");
  if(full){
    const params=new URLSearchParams(location.search);
    ["direction","destination","date","passengers"].forEach(k=>{
      const el=full.elements[k];
      if(el && params.get(k)) el.value=params.get(k);
    });
    const passengerCount=qs("#passengers",full);
    const passengerWrap=qs("#passenger-fields",full);
    function renderPassengers(){
      let n=Math.max(1,Math.min(16,parseInt(passengerCount.value||"1",10)));
      passengerWrap.innerHTML="";
      for(let i=1;i<=n;i++){
        passengerWrap.insertAdjacentHTML("beforeend",`
          <div class="passenger-block">
            <h3>Passenger ${i}</h3>
            <div class="fields">
              <div class="field"><label>FULL NAME</label><input name="passenger_name_${i}" required></div>
              <div class="field"><label>PASSPORT NUMBER</label><input name="passport_${i}" required></div>
            </div>
          </div>`);
      }
    }
    passengerCount.addEventListener("change",renderPassengers);
    renderPassengers();

    full.addEventListener("submit",e=>{
      e.preventDefault();
      if(!full.reportValidity()) return;
      const d=new FormData(full);
      let text=`Booking request\n\n`;
      text+=`Transfer option: ${d.get("service")}\n`;\n      text+=`Direction: ${d.get("direction")}\n`;
      text+=`Route: Kayseri Airport (ASR) ↔ ${d.get("destination")}\n`;
      text+=`Date: ${d.get("date")}\n`;
      text+=`Flight: ${d.get("flight")}\n`;
      text+=`Hotel: ${d.get("hotel")}\n`;
      text+=`Total Passengers: ${d.get("passengers")}\n\n`;
      for(let i=1;i<=parseInt(d.get("passengers"),10);i++){
        text+=`Passenger ${i}\nName and Surname: ${d.get("passenger_name_"+i)}\nPassport No: ${d.get("passport_"+i)}\n\n`;
      }
      if(d.get("notes")) text+=`Notes: ${d.get("notes")}\n\n`;
      text+=`Please confirm this transfer request.`;
      location.href=`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    });
  }

  qsa("[data-wa]").forEach(a=>a.href=`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(directText)}`);
})();
