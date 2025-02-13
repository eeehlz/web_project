function addCart(data) {
  // let cart = {
  //   "id": data,
  //   "shName": "dd",
  //   "shImage": "ddd",
  //   "shPrice" : "",
  // }
  let _productData = JSON.parse(localStorage.getItem("productData"));
  _productData.forEach("");

  localStorage.addCart("cartData", )
  console.log(data);
}

function init2() {
  let productDatas = JSON.parse(localStorage.getItem('productDatas'));
  console.log(productDatas);

  productDatas.forEach(function (products) {
    let str = `
      <div class="product col-12 col-md-3 col-lg-3 mb-5 mb-md-0">
      <a class="product-item" onclick="addCart('${products.shCode}')">
                <img src="${products.shImage}" class="img-fluid product-thumbnail">
                <h3 class="product-title">${products.shName}</h3>
                <strong class="product-price">$${products.shPrice}</strong>
                
                <span class="icon-cross">
                  <img src="images/cross.svg" class="img-fluid">
                </span>
              </a>
              </div>`;
    let target = document.getElementById("ctner1");
    target.insertAdjacentHTML('beforeend', str);
  }); // end of forEach
}

document.addEventListener("DOMContentLoaded", () => {
  init2();
});