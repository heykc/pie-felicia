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
        description: 'The classic apple pie your grandmother used to bake.  Relive the nostalgia.',
        rating: 5,
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
      },
      {
        name: 'cherry pie',
        description: 'Just like an apple pie but with cherries. Try this flavor twist for yourself.',
        rating: 5,
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
      'americano',
      'capuccino',
      'frapuccino',
      'latte'
    ],
    items: [
      {
        name: 'caffe americano',
        image: '',
        description: 'Your typical watered-down espresso. Espresso first, then water.',
        rating: 3,
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
      },
      {
        name: 'long black',
        image: '',
        description: 'You typical watered-down espresso. Water first, then espresso',
        rating: 3,
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
        rating: 4,
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
        rating: 1,
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