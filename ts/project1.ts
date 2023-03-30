
fetch('https://dummyjson.com/products/')
.then(res => res.json())
.then((data) => {
    console.log(data.products)
    let table:string | number  = ""
    data.products.map((product:string | number)=>{
        table+= `<tr >
        <td>${product.id}</td>
        <td>${product.brand}</td>
        <td>${product.price}</td>
        <td>${product.category}</td>
        <td>${product.rating}</td>
        <td>${product.description}</td>
    </tr>
    `
    })
    document.getElementById("table-body")?.innerHTML = table
    
})



