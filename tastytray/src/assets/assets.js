// UI Icons & Images
import basket_icon from './basket_icon.png';
import logo from './logo.png';
import header_img from './header_img.png';
import header_img1 from './header_img1.png'; 
import header_img2 from './header_img2.png';

import search_icon from './search_icon.png';

import add_icon_white from './add_icon_white.png';
import add_icon_green from './add_icon_green.png';
import remove_icon_red from './remove_icon_red.png';

import app_store from './app_store.png';
import play_store from './play_store.png';

import linkedin_icon from './linkedin_icon.png';
import facebook_icon from './facebook_icon.png';
import twitter_icon from './twitter_icon.png';

import cross_icon from './cross_icon.png';
import selector_icon from './selector_icon.png';
import rating_starts from './rating_starts.png';
import profile_icon from './profile_icon.png';
import bag_icon from './bag_icon.png';
import logout_icon from './logout_icon.png';
import parcel_icon from './parcel_icon.png';
import about from './about.png';

// Menu images
import menu_1 from './menu_1.png';
import menu_2 from './menu_2.png';
import menu_3 from './menu_3.png';
import menu_4 from './menu_4.png';
import menu_5 from './menu_5.png';
import menu_6 from './menu_6.png';
import menu_7 from './menu_7.png';
import menu_8 from './menu_8.png';

// Food images
import food_1 from './food_1.png';
import food_2 from './food_2.png';
import food_3 from './food_3.png';
import food_4 from './food_4.png';
import food_5 from './food_5.png';
import food_6 from './food_6.png';
import food_7 from './food_7.png';
import food_8 from './food_8.png';
import food_9 from './food_9.png';
import food_10 from './food_10.png';
import food_11 from './food_11.png';
import food_12 from './food_12.png';
import food_13 from './food_13.png';
import food_14 from './food_14.png';
import food_15 from './food_15.png';
import food_16 from './food_16.png';
import food_17 from './food_17.png';
import food_18 from './food_18.png';
import food_19 from './food_19.png';
import food_20 from './food_20.png';
import food_21 from './food_21.png';
import food_22 from './food_22.png';
import food_23 from './food_23.png';
import food_24 from './food_24.png';
import food_25 from './food_25.png';
import food_26 from './food_26.png';
import food_27 from './food_27.png';
import food_28 from './food_28.png';
import food_29 from './food_29.png';
import food_30 from './food_30.png';
import food_31 from './food_31.png';
import food_32 from './food_32.png';

// Export all UI assets
export const assets = {
  logo,
  basket_icon,
  header_img,
  header_img1,
  search_icon,
  rating_starts,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  app_store,
  play_store,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  profile_icon,
  logout_icon,
  bag_icon,
  parcel_icon,
  about,
  header_img2,
};

// Menu categories
export const menu_list = [
  { menu_name: 'Salad', menu_image: menu_1 },
  { menu_name: 'Rolls', menu_image: menu_2 },
  { menu_name: 'Deserts', menu_image: menu_3 },
  { menu_name: 'Sandwich', menu_image: menu_4 },
  { menu_name: 'Cake', menu_image: menu_5 },
  { menu_name: 'Pure Veg', menu_image: menu_6 },
  { menu_name: 'Pasta', menu_image: menu_7 },
  { menu_name: 'Noodles', menu_image: menu_8 },
];

// Food items list
export const food_list = [
  {
    _id: '1',
    name: 'Greek salad',
    images: [food_1],
    price: 120,
    description: 'Food provides essential nutrients for overall health and well-being',
    category: 'Salad',
    bestseller: true,
  },
  {
    _id: '2',
    name: 'Veg salad',
    images: [food_2],
    price: 180,
    description: 'Food provides essential nutrients for overall health and well-being',
    category: 'Salad',
  },
  {
    _id: '3',
    name: 'Clover Salad',
    images: [food_3],
    price: 160,
    description: 'Food provides essential nutrients for overall health and well-being',
    category: 'Salad',
  },
  {
    _id: '4',
    name: 'Chicken Salad',
    images: [food_4],
    price: 240,
    description: 'Food provides essential nutrients for overall health and well-being',
    category: 'Salad',
    bestseller: true,
  },
  {
    _id: '5',
    name: 'Lasagna Rolls',
    images: [food_5],
    price: 140,
    description: 'Food provides essential nutrients for overall health and well-being',
    category: 'Rolls',
  },
  {
    _id: '6',
    name: 'Peri Peri Rolls',
    images: [food_6],
    price: 120,
    description: 'Food provides essential nutrients for overall health and well-being',
    category: 'Rolls',
    bestseller: true,
  },
  {
    _id: '7',
    name: 'Chicken Rolls',
    images: [food_7],
    price: 200,
    description: 'Food provides essential nutrients for overall health and well-being',
    category: 'Rolls',
  },
  {
    _id: '8',
    name: 'Veg Rolls',
    images: [food_8],
    price: 150,
    description: 'Food provides essential nutrients for overall health and well-being',
    category: 'Rolls',
  },
  {
    _id: '9',
    name: 'Ripple Ice Cream',
    images: [food_9],
    price: 140,
    description: 'Food provides essential nutrients for overall health and well-being',
    category: 'Deserts',
    bestseller: true,
  },
  {
    _id: '10',
    name: 'Fruit Ice Cream',
    images: [food_10],
    price: 220,
    description: 'Food provides essential nutrients for overall health and well-being',
    category: 'Deserts',
  },
  {
    _id: '11',
    name: 'Choco Lava Cake',
    images: [food_11],
    price: 190,
    description: 'A warm chocolate cake with a gooey molten center.',
    category: 'Deserts',
  },
  {
    _id: '12',
    name: 'Vanilla Sandwich',
    images: [food_12],
    price: 150,
    description: 'Classic vanilla ice cream between two soft cookies.',
    category: 'Sandwich',
  },
  {
    _id: '13',
    name: 'Cream Sandwich',
    images: [food_13],
    price: 170,
    description: 'Smooth whipped cream sandwich.',
    category: 'Sandwich',
  },
  {
    _id: '14',
    name: 'Cheese Sandwich',
    images: [food_14],
    price: 200,
    description: 'Grilled cheese sandwich with herbs.',
    category: 'Sandwich',
  },
  {
    _id: '15',
    name: 'Ice Cream Sandwich',
    images: [food_15],
    price: 160,
    description: 'Cookies and ice cream combo.',
    category: 'Sandwich',
  },
  {
    _id: '16',
    name: 'Choco Cake',
    images: [food_16],
    price: 300,
    description: 'Chocolate flavored cake with frosting.',
    category: 'Cake',
  },
  {
    _id: '17',
    name: 'Chocolate Cake',
    images: [food_17],
    price: 320,
    description: 'Rich chocolate layered cake.',
    category: 'Cake',
  },
  {
    _id: '18',
    name: 'Black Forest Cake',
    images: [food_18],
    price: 350,
    description: 'German chocolate cake with cherries.',
    category: 'Cake',
  },
  {
    _id: '19',
    name: 'Coconut Cake',
    images: [food_19],
    price: 280,
    description: 'Soft cake infused with coconut flavor.',
    category: 'Cake',
  },
  {
    _id: '20',
    name: 'Veg Mix',
    images: [food_20],
    price: 210,
    description: 'Assorted seasonal vegetables stir-fried.',
    category: 'Pure Veg',
  },
  {
    _id: '21',
    name: 'Veg Curry',
    images: [food_21],
    price: 250,
    description: 'Spicy vegetable curry with Indian spices.',
    category: 'Pure Veg',
  },
  {
    _id: '22',
    name: 'Aloo Tikki',
    images: [food_22],
    price: 100,
    description: 'Fried mashed potato patties.',
    category: 'Pure Veg',
  },
  {
    _id: '23',
    name: 'Mix Veg',
    images: [food_23],
    price: 220,
    description: 'Vegetable curry with gravy.',
    category: 'Pure Veg',
  },
  {
    _id: '24',
    name: 'Red Sauce Pasta',
    images: [food_24],
    price: 260,
    description: 'Pasta tossed in red tomato sauce.',
    category: 'Pasta',
    bestseller: true,
  },
  {
    _id: '25',
    name: 'White Sauce Pasta',
    images: [food_25],
    price: 270,
    description: 'Creamy white sauce penne pasta.',
    category: 'Pasta',
  },
  {
    _id: '26',
    name: 'Pesto Pasta',
    images: [food_26],
    price: 290,
    description: 'Italian pasta in basil pesto sauce.',
    category: 'Pasta',
  },
  {
    _id: '27',
    name: 'Fried Noodles',
    images: [food_27],
    price: 200,
    description: 'Crispy fried Hakka noodles.',
    category: 'Noodles',
  },
  {
    _id: '28',
    name: 'Chow Mein',
    images: [food_28],
    price: 220,
    description: 'Stir-fried noodles with vegetables.',
    category: 'Noodles',
    bestseller: true,
  },
  {
    _id: '29',
    name: 'Schezwan Noodles',
    images: [food_29],
    price: 240,
    description: 'Spicy Indo-Chinese noodles.',
    category: 'Noodles',
  },
  {
    _id: '30',
    name: 'Garlic Noodles',
    images: [food_30],
    price: 230,
    description: 'Noodles sautéed with garlic and soy sauce.',
    category: 'Noodles',
  },
  {
    _id: '31',
    name: 'Spring Roll',
    images: [food_31],
    price: 190,
    description: 'Crispy rolls filled with veggies.',
    category: 'Rolls',
  },
  {
    _id: '32',
    name: 'Paneer Tikka Roll',
    images: [food_32],
    price: 260,
    description: 'Indian paneer rolled in naan bread.',
    category: 'Rolls',
  },
];
