import faker from 'faker';


const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
  }

  el.innerHTML = products
}

// Context/Situation #1
// We are running this file in development in isolation
// We are using local index.html
// It definately has an element with dev-products
// We want to immediately render our app into that element
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products')

  // Assuming our container does not have this element with id dev-products
  if (el) {
    // We are probably running in isolation
    mount(el)
  }
}

// Context/Situation #2
// We are runin gthis file in development or production
// We are running in container app
// We dont know for sure if there is an element with this id
// Therefore we don't want to immediately render app
export { mount }