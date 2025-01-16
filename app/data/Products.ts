export type Product = {
    id: number;
    name: string;
    description: string;
    image: string;
    tags:string[];
    price: number;
    quantity: number;
  };
  
  export const resinProducts: Product[] = [
    {
      id: 100,
      name: 'Resin Shark, Bruce',
      description: 'Hand crafted resin shark. Perfect for your desk or wall.',
      image: '/images/bruce_shark.jpg',
      tags: ['resin', 'art', 'decor'],
      price: 15,
      quantity:2
    },
    {
      id: 102,
      name: 'Mushroom Jars',
      description: 'Cute mushroom jars, made from resin.Perfect to store your small items.',
      image: '/images/mushroom_jar.jpg',
      tags: ['jar', 'resin', 'decor'],
      price: 15,
      quantity:2
    },
    {
      id: 103,
      name: 'Fishing Lure coasters',
      description: 'Show off your enthusiasm for fishing with these fishing lure coasters.Hand crafted with real lures embedded in resin.',
      image: '/images/round_fish_coaster.jpg',
      tags: ['coaster', 'resin', 'decor'],
      price: 15,
      quantity:4
    },
    {
      id: 104,
      name: 'Sun&Moon  coasters',
      description: 'These unique coasters with fun colors will be agreat addition.',
      image: '/images/moon_face_coaster.jpg',
      tags: ['coaster', 'resin', 'decor'],
      price: 35,
      quantity:4
    },
    {
      id: 105,
      name: 'Sailing coasters',
      description: 'Set sail with this set of beautiful coasters. Accented in seablue with sailboat and seagulls.',
      image: '/images/sailing_coaster.jpg',
      tags: ['coaster', 'resin', 'decor'],
      price: 35,
      quantity:4
    },
    {
      id: 106,
      name: 'Sailing tray',
      description: 'Beautiful serving tray.Handcrafted resin.',
      image: '/images/sailing_tray.jpg',
      tags: ['tray', 'resin', 'decor'],
      price: 25,
      quantity:1
    },
    {
      id: 107,
      name: 'Bloom tray',
      description: 'Beautilful bloom tray. You can use this as a trinket tray or display on a shelf.',
      image: '/images/bloom_resin_plate.jpg',
      tags: ['tray', 'resin', 'decor'],
      price: 15,
      quantity:1
    },
    {
      id: 108,
      name: 'Dragonfly artwork',
      description: 'I created a beatiful dragonfly from resin, using color shifting mica-powders. This is attached to am 8X11 wood painted with acrylic paints and sealed with resin.',
      image: '/images/dragonfly_acrylic.jpg',
      tags: ['art', 'resin', 'decor'],
      price: 35,
      quantity:1
    },
    {
      id: 109,
      name: 'Moon fact artwork',
      description: 'I created a beatiful moon face from resin, using color shifting mica-powders. This is attached to am 8X11 wood with galaxy design using acrylic paints and sealed with resin.',
      image: '/images/moon_galaxy.jpg',
      tags: ['art', 'resin', 'decor'],
      price: 35,
      quantity:1
    },
    {
      id: 110,
      name: 'Hemp leaf coaster',
      description: 'Set of coasters with real pressed hemp leaves overlaying a rastafarian color pallete. Great converstaion piece on anyones coffe table.',
      image: '/images/hemp_coaster.jpg',
      tags: ['coaster', 'resin', 'decor'],
      price: 25,
      quantity:4
    },
  ];
  
  export const vinylProducts: Product[] = [
    {
      id: 201,
      name: 'Coffee mug of the day',
      description: 'Coffee mug designed with infusible ink and gold vinyl lettering. Perfect to express yourself while drinking mornign coffee.',
      image: '/images/coffee_mug.jpg',
      tags: [ 'vinyl', 'mug'],
      price: 15,
      quantity:1
    },
    {
      id: 202,
      name: 'Best Friend coffee mug',
      description: 'Let your best friend know how much you appreciate them with this coffee mug.',
      image: '/images/bbf_mug.jpg',
      tags: ['mug', 'vinyl'],
      price: 15,
      quantity:1
    },
    {
      id: 203,
      name: 'Arizona tumblers',
      description: 'Enjoy a cold or hot beverage in these cool Arizona themed tumbers.',
      image: '/images/az_tumbler.jpg',
      tags: ['tumbler', 'vinyl'],
      price: 15,
      quantity:1
    },
    {
      id: 204,
      name: 'Personalized tumbler',
      description: 'Customer tumbers.',
      image: '/images/name_tumbler.jpg',
      tags: ['mug', 'vinyl'],
      price: 15,
      quantity:1
    },
    // More vinyl products...
  ];
  
  export const acrylicProducts: Product[] = [
    {
      id: 301,
      name: 'Galaxy painting',
      description: 'Beautiful galaxy painting with a multitude of acrylyc colors. Perfect accent for any galaxy lover.',
      image: '/images/galaxy_acrylic.jpg',
      tags: ['art', 'acrylic', 'decor'],
      price: 100,
      quantity:1
    },
    {
      id: 302,
      name: 'Beach scene painting',
      description: 'Any beach lover would enjoy this paiting. Sandy beaches and palm trees, relaxing view.',
      image: '/images/beach_acrylic.jpg',
      tags: ['art', 'acrylic', 'decor'],
      price: 60,
      quantity:1
    },
    {
      id: 303,
      name: 'Camping in wild painting',
      description: 'Enjoy the scene of camping near a lake in stary night.',
      image: '/images/camping.jpg',
      tags: ['art', 'acrylic', 'decor'],
      price: 75,
      quantity:1
    },
    {
      id: 304,
      name: 'Mermaid painting',
      description: 'Come find me. Mermaid looking up to the surface, waiting for someone to find her.',
      image: '/images/mermaid.jpg',
      tags: ['art', 'acrylic', 'decor'],
      price: 75,
      quantity:1
    },
    {
      id: 305,
      name: 'Tree pour painting',
      description: 'Unique piece, made from acrylic pour using a dragging technique to create a tree.',
      image: '/images/tree_pour.jpg',
      tags: ['art', 'acrylic', 'decor'],
      price: 50,
      quantity:1
    },
    // More acrylic products...
  ];
  