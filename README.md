Pie Felicia!

Usability through React, Design through SCSS

Pie-shop catering app idea focused on MVP features:
1) category selection
  a) pies
  b) coffees
  c) extras
    .) whipped cream
    .) coffee cream
    .) ice cream
  d) supplies
    .) tables
    .) chairs
    .) napkins
    .) silverware
2) product selection
3) cart view

database
shop {
  pies: {
    filters: [
      fruit,
      cheese,
      meat,
      pasta,
      veggie
    ],
    items: [
      {
        name: apple-pie,
        image: path/to/image,
        description: some description of the product,
        rating: 2,
        sizes: [
          6",
          8",
          10",
          12"
        ],
        prices: [
          small price,
          medium price,
          large price,
          extra large price
        ] 
      }
    ] 
  }
}




cart data
cart [
  apple-pie: {
    type: pies,
    order: [
      6": 10,
      8": 5,
      10": 4,
      12": 2
    ]
  },
  americano: {
    type: coffees,
    order: [
      1lb: 3,
      5lbs: 2,
      7lbs: 7,
      10lbs: 9
    ]
  },
  whipped-cream: {
    type: extras,
    order: 10 (cans)
  },
  table: {
    type: supplies,
    order: 10
  }
]

routes
/pies
/pies/:product
/coffees
/coffees/:product
/extras
/extras/:product
/supplies
/supplies/:product
/cart