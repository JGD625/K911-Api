function makeFoodsArray() {
  return [
    {
      id: 1,
      name: 'food1',
      toxicity: 'First test post!',
      toxic: true,
      toxic_principles: 'blah blah',
      symptoms: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?'
    },
    {
      id: 2,
      name: 'food2',
      toxicity: 'food test post!',
      toxic: true,
      toxic_principles: 'blah blah',
      symptoms: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, exercitationem cupiditate dignissimos est perspiciatis, nobis commodi alias saepe atque facilis labore sequi deleniti. Sint, adipisci facere! Velit temporibus debitis rerum.'
    },
    {
      id: 3,
      name: 'food3',
      toxicity: 'food test post!',
      toxic: false,
      toxic_principles: 'blah blah',
      symptoms: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptate? Necessitatibus, reiciendis? Cupiditate totam laborum esse animi ratione ipsa dignissimos laboriosam eos similique cumque. Est nostrum esse porro id quaerat.'
    },
    {
      id: 4,
      name: 'food4',
      toxicity: 'food test post!',
      toxic: false,
      toxic_principles: 'blah blah',
      symptoms: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae accusamus veniam consectetur tempora, corporis obcaecati ad nisi asperiores tenetur, autem magnam. Iste, architecto obcaecati tenetur quidem voluptatum ipsa quam?'
    },
  ];
}

function makePlantsArray() {
    return [
      {
        id: 1,
        name: 'plant1',
        toxicity: 'First test post!',
        toxic: true,
        toxic_principles: 'blah blah',
        symptoms: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?'
      },
      {
        id: 2,
        name: 'plant2',
        toxicity: 'plant test post!',
        toxic: true,
        toxic_principles: 'blah blah',
        symptoms: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, exercitationem cupiditate dignissimos est perspiciatis, nobis commodi alias saepe atque facilis labore sequi deleniti. Sint, adipisci facere! Velit temporibus debitis rerum.'
      },
      {
        id: 3,
        name: 'plant3',
        toxicity: 'plant test post!',
        toxic: false,
        toxic_principles: 'blah blah',
        symptoms: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptate? Necessitatibus, reiciendis? Cupiditate totam laborum esse animi ratione ipsa dignissimos laboriosam eos similique cumque. Est nostrum esse porro id quaerat.'
      },
      {
        id: 4,
        name: 'plant4',
        toxicity: 'plant test post!',
        toxic: false,
        toxic_principles: 'blah blah',
        symptoms: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae accusamus veniam consectetur tempora, corporis obcaecati ad nisi asperiores tenetur, autem magnam. Iste, architecto obcaecati tenetur quidem voluptatum ipsa quam?'
      },
    ];
  }

  function makeMedicineArray() {
    return [
      {
        id: 1,
        name: 'med1',
        toxicity: 'medicine test post!',
        toxic: true,
        toxic_principles: 'blah blah',
        symptoms: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?'
      },
      {
        id: 2,
        name: 'med2',
        toxicity: 'medicine test post!',
        toxic: true,
        toxic_principles: 'blah blah',
        symptoms: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, exercitationem cupiditate dignissimos est perspiciatis, nobis commodi alias saepe atque facilis labore sequi deleniti. Sint, adipisci facere! Velit temporibus debitis rerum.'
      },
      {
        id: 3,
        name: 'med3',
        toxicity: 'medicine test post!',
        toxic: false,
        toxic_principles: 'blah blah',
        symptoms: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptate? Necessitatibus, reiciendis? Cupiditate totam laborum esse animi ratione ipsa dignissimos laboriosam eos similique cumque. Est nostrum esse porro id quaerat.'
      },
      {
        id: 4,
        name: 'med4',
        toxicity: 'medicine test post!',
        toxic: false,
        toxic_principles: 'blah blah',
        symptoms: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae accusamus veniam consectetur tempora, corporis obcaecati ad nisi asperiores tenetur, autem magnam. Iste, architecto obcaecati tenetur quidem voluptatum ipsa quam?'
      },
    ];
  }

  module.exports = {
    makePlantsArray,
    makeFoodsArray,
    makeMedicineArray
  }