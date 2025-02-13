const cartData = JSON.parse(localStorage.getItem("cartData"));

const btns = document.querySelectorAll(".product-item");



// for(let btn of btns) {
//   btn.addEventListener("click");
//   console.log(btn);
//   let result = `<tr>
//   <td class="product-thumbnail">
//     <img src="${products.shImage}" alt="Image" class="img-fluid">
//   </td>
//   <td class="product-name">
//     <h2 class="h5 text-black">${products.shName}</h2>
//   </td>
//   <td>${products.shPrice}</td>
//   <td>
//     <div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
//       <div class="input-group-prepend">
//         <button class="btn btn-outline-black decrease" type="button">&minus;</button>
//       </div>
//       <input type="text" class="form-control text-center quantity-amount" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
//       <div class="input-group-append">
//         <button class="btn btn-outline-black increase" type="button">&plus;</button>
//       </div>
//     </div>
  
//   </td>
//   <td>${products.shPrice}</td>
//   <td><a href="#" class="btn btn-black btn-sm">X</a></td>
//   </tr>`
// }

// function handleCartBtn(event){
//   event.preventDefault();
//   showAdded(event);
//   clickCounter();
// }
