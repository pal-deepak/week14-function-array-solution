const productdetail={
    name:"Apple 2020 macbook air laptop",
    price:82000,
    color:"gray",
    harddixk:"250GB",
}
for (let keys of Object.keys(productdetail)) {
    console.log(`${keys} : ${productdetail[keys]}`);
  }