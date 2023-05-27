async function krData(brand_item, type_item) {
    brand_item = document.getElementById('marka').value
    type_item = document.getElementById('product').value
    
    try{
      console.log('Fetch MakeUp started...')
      const response = await fetch(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand_item}&product_type=${type_item}`
        )
      const data = await response.json()
      console.log('Data:', getValue(data))
    } catch (err) {
      console.error(err);
    }
  }
  
  function getValue(array) {
    const spisok = []
    for (let i = 0; i < array.length; i++) {
        spisok[i] = {
        brand: array[i].brand,
        name: array[i].name,
        description: array[i].description,
        image_link: array[i].image_link,
        price: array[i].price,
      }
    }
    if (array.length >= 1) {
      return spisok
    } else {
      return 'Sorry, but this cosmetic product is not available.'
    }
  }