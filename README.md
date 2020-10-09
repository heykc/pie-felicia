Pie Felicia!

Usability through React, Design through SCSS

This is a prototype version of a pie shop catering business app. It therefore has limited functionality. The MVP features are:
1) category selection
  a) pies
    .) apple
    .) cherry
  b) coffees
    .) caffe americano
    .) long black
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

Highly reusable components
1) optional props - props.propName?

Routing

Superior commenting (JSDoc style)

Google Material Icons

JSX over JS file extensions

Hooks







database template
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
        name: apple pie,
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
  },
  coffees: {},
  extras: {},
  supplies: {}
}




cart data template
@product - name of item
@type - helps to find in shop data for getting item prices
@order - mimics all available sizes for easy price array mapping

cart [
  {
    product: apple-pie,
    type: 'pies',
    order: {
      6": 10,
      8": 5,
      10": 4,
      12": 2
    }
  },
  {
    product: americano,
    type: 'coffees',
    order: {
      1lb: 3,
      5lbs: 2,
      7lbs: 7,
      10lbs: 9
    }
  },
  {
    product: whipped-cream,
    type: 'extras',
    order: {
      12oz: 10
    }
  },
  {
    product: table,
    type: 'supplies',
    order: {
      amount: 10
    }
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