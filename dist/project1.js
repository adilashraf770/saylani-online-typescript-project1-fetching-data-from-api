"use strict";
fetch('https://dummyjson.com/products/')
    .then(res => res.json())
    .then((data) => {
    var _a;
    console.log(data.products);
    let table = "";
    data.products.map((product) => {
        table += `<tr >
        <td>${product.id}</td>
        <td>${product.brand}</td>
        <td>${product.price}</td>
        <td>${product.category}</td>
        <td>${product.rating}</td>
        <td>${product.description}</td>
    </tr>
    `;
    });
    (_a = document.getElementById("table-body")) === null || _a === void 0 ? void 0 : _a.innerHTML = table;
});
//# sourceMappingURL=project1.js.map