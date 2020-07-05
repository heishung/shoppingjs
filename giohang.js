const getListProductMobile = JSON.parse(localStorage.getItem('dataMobile'));
const getListProductLaptop = JSON.parse(localStorage.getItem('dataLaptop'));
const gioHang = JSON.parse(localStorage.getItem('gioHang'));
const allProducts = getListProductMobile.concat(getListProductLaptop);
function setCart() {
    const gioHangStorage = [...JSON.parse(localStorage.getItem('gioHang'))];
    if (gioHangStorage) {
        document.getElementById('listGio').innerHTML = gioHangStorage.length;
    }

}
setCart();




function showProductListCard() {
    let result
    const listProductIncart = allProducts.filter(data => gioHang.find(id => data.id === id));
    const listProducts = document.getElementById('list-product');

    if (Array.isArray(listProductIncart)) {
        if (listProductIncart.length > 0) {
            result = listProductIncart.map(data => {
                return `<div class="item-gio-hang">
                <div class="img">
                  <img
                    src="${data.img}"
                    alt="${data.name}">
                </div>
                <p class="name">${data.name}</p>
                <div class="price">
                  ${data.price}
                </div>
                <input type="number" class="soLuong" value="1">
                <p class="priceSum">${data.priceSale}</p>
                <div class="del">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </div>
              </div>`
            })
        }
    }
    return listProducts.innerHTML = result;
}

showProductListCard()

console.log(result)