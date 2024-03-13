
const increaseBtn = document.querySelectorAll('.increase-btn')
console.log(increaseBtn)
increaseBtn.forEach(btn => {
    btn.addEventListener('click', (event ) => {
      event.preventDefault()

      let quantityNum = event.target.closest('.quandity').querySelector('.qtyOne')
      let value = quantityNum.innerText;
      quantityNum.innerText = ++value
    })
});


const decreasebtn = document.querySelectorAll('.decrease-btn');

decreasebtn.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
      e.preventDefault()
      let quantityNum = event.target.closest('.quandity').querySelector('.qtyOne')
      let value = quantityNum.innerText;
      if(value>1){
        quantityNum.innerText = --value
      }
   }
   ) }
)