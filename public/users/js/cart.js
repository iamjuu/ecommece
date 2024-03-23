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


// coupon 

document.addEventListener("DOMContentLoaded",()=>{
const applybtn = document.querySelector('.couponbtn')
console.log(applybtn);
if(applybtn){
applybtn.addEventListener("click",async()=>{

  const cDPrice=document.getElementById('cDPrice')
  const couponcode=document.getElementById('couponcode').value
  try {
    const response=await fetch('/applycoupon',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({couponcode})


    })
    if(response.ok){
      const result=await response.json()
      cDPrice.textContent=''
      if(result.success){
        const couponDiscount= parseFloat(result.discount)
        const totalamount =  document.getElementById('tPrice')
        if(totalamount){
          const totalamountprice = parseFloat(totalamount.innerText.replace('₹',''))

          const discountedamount = totalamountprice-totalamountprice*(couponDiscount/100)
          totalamount.textContent=`₹ ${discountedamount.toFixed()}`
          cDPrice.textContent=`${couponDiscount}%`


        }
        
      }
      else{
        cDPrice.textContent=`coupon condition wrong `
      }
    }else{
      cDPrice.textContent = `invalid coupon code`
    }
  } catch (error) {
    
  }
})  
}


})