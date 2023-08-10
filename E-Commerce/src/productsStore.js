// Coffee: price_1Ndc7BSGpi9u4VtRhEE1EUQN
// Sunglasses: price_1Ndc95SGpi9u4VtRcQENGpgO
// Camera: price_1NdcApSGpi9u4VtRgx7gHynZ

const productsArray = [
    {
        "id": "price_1Ndc7BSGpi9u4VtRhEE1EUQN",
        "title": "RIDE 5 PS5",
        "description": "Rev up your engine and get ready to hit the track with RIDE 5. ",
        "image": "https://gameloot.in/wp-content/uploads/2023/06/RIDE-5-PS5.png",
        "price": 4000,
         
      },
      {
        "id": "price_1Ndc95SGpi9u4VtRcQENGpgO",
        "title": "Marvels Spider-Man 2 PS5",
        "description": "An evolution of the Spider-Man story on Play Station -5",
        "image": "https://gameloot.in/wp-content/uploads/2023/06/Marvels-Spider-Man-2-PS5.jpg",
        "price": 99,
         
      },
      {
        "id": "price_1NdcApSGpi9u4VtRgx7gHynZ",
        "title": "Cricket 24 PS5",
        "description": "ricket 24: Building the most realistic cricket video game ever! ",
        "image": "https://gameloot.in/wp-content/uploads/2023/04/Cricket-24-PS5.jpg",
        "price": 3990,
         
      },
      {
        "id": "price_1NddeDSGpi9u4VtR3Diul2EK",
        "title": "God of War Ragnarok",
        "description": "Embark on a mythic journey for answers and allies before Ragnarök arrives in God of War Ragnarok on PS5.",
        "image": "https://media.gamestop.com/i/gamestop/11206962-11206961?w=352&h=352&fmt=webp",
        "price": 3050,
         
      }
      , {
        "id": "price_1NddfmSGpi9u4VtRZYSGfhUC",
        "title": "BMW Leather Jacket",
        "description": "Buy Bmw Leather Jacket Online In India - Etsy India",
        "image": "https://i.etsystatic.com/34536087/r/il/1674cb/4261004323/il_fullxfull.4261004323_mvqd.jpg",
        "price": 1150,
         
      }
      
      , {
        "id": "price_1NddgrSGpi9u4VtRnja8ndHn",
        "title": "Spider-Man",
        "description": "Spider-Man two Men's Compression Shirt 3D Print T-Shirt",
        "image": "https://images-cdn.ubuy.co.in/633e444054a2d97aee3caf50-spider-man-far-from-home-men-s.jpg",
        "price": 1150,
         
      }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };