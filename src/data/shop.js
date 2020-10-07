/**
 * @const {object} SHOP
 */

const SHOP = {
  pies: {
    category: 'pies',
    filters: [
      'fruit',
      'cheese',
      'meat',
      'pasta',
      'veggie'
    ],
    items: [
      {
        name: 'apple pie',
        image: '',
        description: 'some description of the product',
        rating: 2,
        sizes: [
          '6"',
          '8"',
          '10"',
          '12"'
        ],
        prices: [
          50,
          75,
          100,
          125
        ] 
      }
    ] 
  }
}

export {SHOP as shop};