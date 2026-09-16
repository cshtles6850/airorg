document.querySelectorAll('[data-roundtrip]').forEach(toggle=>{
  toggle.addEventListener('change',e=>{
    document.querySelectorAll('[data-return-fields]').forEach(x=>x.hidden=!e.target.checked)
  })
})
