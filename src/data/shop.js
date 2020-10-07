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
  },
  coffees: {
    category: 'coffees',
    filters: [
      'americano'
    ],
    items: [
      {
        name: 'americano',
        image: '',
        description: 'some description of the product',
        rating: 2,
        sizes: [
          '1lb',
          '5lbs',
          '7lbs',
          '10lbs'
        ],
        prices: [
          50,
          75,
          100,
          125
        ] 
      }
    ] 
  },
  extras: {
    category: 'extras',
    items: [
      {
        name: 'whipped cream',
        image: '',
        description: 'some description of the product',
        rating: 2,
        sizes: [
          '12oz'
        ],
        prices: [
          5
        ] 
      }
    ] 
  },
  supplies: {
    category: 'supplies',
    items: [
      {
        name: 'plates',
        image: '',
        description: 'some description of the product',
        rating: 2,
        sizes: [
          'single'
        ],
        prices: [
          3
        ] 
      }
    ] 
  }
}

export {SHOP as shop};