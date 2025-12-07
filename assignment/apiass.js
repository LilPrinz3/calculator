// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

async function getProducts(){
    try{
        const response = await fetch("https://dummyjson.com/products");
        console.log(response);

        if (response.ok){
            const data = await response.json();
            displayProducts(data.products)
        } else{
            console.log("HTTP-Error: " + reponse.status )
        }
        
    } catch (error){
        console.log(error);
     }  
}

function displayProducts(products) {
    let show = document.getElementById('display') 
        products.forEach((item, i) => {
          display.innerHTML += `
                <div>
                    <h1>${item.title}</h1>
                    <img src=${item.images} alt="" width="100"/>
                    <h3>Price: $${item.price}</h3>
                    <p>${item.description}</p>
                    <p>${item.brand}</p>
                    <p>${item.rating}</p>
                    
                </div>
            `;
        });
        
      }
getProducts();