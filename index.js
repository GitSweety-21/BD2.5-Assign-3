const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

//app.use(express.static('static'));
let cors = require('cors');

app.use(cors());

let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];

function sortbyPopularity(rating1, rating2) {
  return rating2.rating - rating1.rating;
}
app.get('/products/sort/popularity', (req, res) => {
  let productCopy = products.slice();
  productCopy.sort(sortbyPopularity);
  res.json({ products: productCopy });
});

function sortHightolowprice(price1, price2) {
  return price2.price - price1.price;
}

app.get('/products/sort/price-high-to-low', (req, res) => {
  let productCopy = products.slice();
  productCopy.sort(sortHightolowprice);
  res.json({ products: productCopy });
});

function sortLowtoHighprice(price1, price2) {
  return price1.price - price2.price;
}

app.get('/products/sort/price-low-to-high', (req, res) => {
  let productCopy = products.slice();
  productCopy.sort(sortLowtoHighprice);
  res.json({ products: productCopy });
});

function filterbasedaOnRam(product1, ram) {
  return product1.ram === ram;
}

app.get('/products/filter/ram/', (req, res) => {
  let ram = parseFloat(req.query.ram);
  let result = products.filter((product1) => filterbasedaOnRam(product1, ram));
  res.json(result);
});

function filterbasedOnRom(product1, rom) {
  return product1.rom === rom;
}
app.get('/products/filter/rom/', (req, res) => {
  let rom = parseFloat(req.query.rom);
  let result = products.filter((product1) => filterbasedOnRom(product1, rom));
  res.json({ products: result });
});

function filterproductbasedonBrand(product1, brand1) {
  return product1.brand.toLowerCase() === brand1.toLowerCase();
}

app.get('/products/filter/brand/', (req, res) => {
  let brand1 = req.query.brand;
  let result = products.filter((product1) =>
    filterproductbasedonBrand(product1, brand1)
  );
  res.json({ products: result });
});

function filterproductsbasedos(product1, os1) {
  return product1.os.toLowerCase() === os1.toLowerCase();
}

app.get('/products/filter/os/', (req, res) => {
  let os1 = req.query.os;
  let result = products.filter((product1) =>
    filterproductsbasedos(product1, os1)
  );
  res.json({ products: result });
});

function filterproductprice(product1, price1) {
  return product1.price <= price1;
}

app.get('/products/filter/price/', (req, res) => {
  let prices1 = parseFloat(req.query.price);
  let result = products.filter((product1) =>
    filterproductprice(product1, prices1)
  );
  res.json({ products: result });
});

app.get('/products', (req, res) => {
  res.json({ products: products });
});
app.listen(port, () =>
  console.log(`Server is running on http://localhost:  ${port}`)
);
