

const increaseBtn = document.querySelectorAll('.increase-btn')
console.log(increaseBtn)


increaseBtn.forEach((btn) => {
    btn.addEventListener('click', async function (event ) {
      event.preventDefault()
      let quantityNum = event.target.closest('.quandity').querySelector('.qtyOne')
       const id = this.dataset.id
      console.log(id);
      let value = quantityNum.innerText;
      quantityNum.innerText = ++value

      const response= await axios.get(`/cartupdate?id=${id}&value=${value}`)

      if(response.status === 200) {
        window.location.href = '/cart'
      }
      
    })
})


const decreasebtn = document.querySelectorAll('.decrease-btn');

decreasebtn.forEach((btn)=>{
  btn.addEventListener("click",async function (e){
      e.preventDefault()
      let quantityNum = e.target.closest('.quandity').querySelector('.qtyOne')
      const id = this.dataset.id
      console.log(id);
      let value = quantityNum.innerText;
      if(value>1){
        quantityNum.innerText = --value
        console.log(value)
        const response= await axios.get(`/cartupdate?id=${id}&value=${value}`)

        if(response.status === 200) {
          window.location.href ='/cart'
        }

        
}})
    })

