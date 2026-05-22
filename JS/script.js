
    // CASE STUDY PROJECT:
    // E-COMMERCE SALES ANALYSIS SYSTEM

    console.log("E-COMMERCE SALES SYSTEM");

    // CONST + ARRAY + JS OBJECTS


    const products = [
      {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 850,
        quantity: 4
      },
      {
        id: 2,
        name: "Phone",
        category: "Electronics",
        price: 500,
        quantity: 7
      },
      {
        id: 3,
        name: "Headphones",
        category: "Accessories",
        price: 120,
        quantity: 10
      },
      {
        id: 4,
        name: "Chair",
        category: "Furniture",
        price: 300,
        quantity: 2
      }
    ];

    console.log("Available Products:", products);

    // LET + JS SCOPE

    function companyInfo() {

      let company = "NovaTech Store";

      if (true) {
        let branch = "Lagos Branch";
        console.log("Inside Block Scope:", branch);
      }

      console.log("Inside Function Scope:", company);

      // branch cannot be accessed here
      // console.log(branch); // ERROR
    }

    companyInfo();

    // ARROW FUNCTION + FOREACH
    // Display product names

    console.log("PRODUCT LIST");

    products.forEach(product => {
      console.log(product.name);
    });


    // MAP
    // Create new array of product names


    const productNames = products.map(product => product.name);

    console.log("Mapped Product Names:", productNames);


    // FILTER
    // Find expensive products

    const expensiveProducts = products.filter(product => product.price > 400);

    console.log("Expensive Products:", expensiveProducts);

  
    // REDUCE
    // Calculate total sales value

    const totalSales = products.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);

    console.log("Total Sales Value:", totalSales);

 
    // TEMPLATE LITERALS (ES6)

    console.log("SALES REPORT");

    products.forEach(product => {

      let revenue = product.price * product.quantity;

      console.log(
        `${product.name} generated $${revenue} revenue`
      );
    });


    // DESTRUCTURING (ES6)

    const { name, price } = products[0];

    console.log("Destructured Product Data:");
    console.log("Product Name:", name);
    console.log("Product Price:", price);


    // SPREAD OPERATOR (ES6)

    const newProduct = {
      id: 5,
      name: "Smart Watch",
      category: "Electronics",
      price: 250,
      quantity: 5
    };

    const updatedProducts = [...products, newProduct];

    console.log("Updated Product List:", updatedProducts);

  
    // ARROW FUNCTION FOR TAX CALCULATION

    const calculateTax = amount => amount * 0.075;

    console.log("Tax on Total Sales:", calculateTax(totalSales));


    // FINAL SUMMARY

    console.log("FINAL SUMMARY");

    console.log(`Total Products: ${products.length}`);
    console.log(`Total Sales: $${totalSales}`);
    console.log(`Expensive Products Count: ${expensiveProducts.length}`);