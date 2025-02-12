let productDatas = JSON.parse(localStorage.getItem('productDatas'));
console.log(productDatas);
console.log("ddsdaasdasdasd");

productDatas.slice(0, 3).forEach(function (products) {
  let str = `
  <div class="product col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
  <a class="product-item" href="cart.html">
            <img src="${products.shImage}" class="img-fluid product-thumbnail">
            <h3 class="product-title">${products.shName}</h3>
            <strong class="product-price">$${products.shPrice}</strong>
            
            <span class="icon-cross">
              <img src="images/cross.svg" class="img-fluid">
            </span>
          </a>
          </div>`;
  let target = document.querySelector("div.product-section");
  target.insertAdjacentHTML('beforeend', str);
}); // end of forEach
