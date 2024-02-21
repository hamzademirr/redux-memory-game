import { nanoid } from "@reduxjs/toolkit";

const arr = [
  'abra',
  'articuno',
  'bulbasaur',
  'celebi',
  'charmander',
  'cubon',
  'eevee',
  'espeon',
  'flareon',
  'hooh',
  'jolteon',
  'mew',
  'mewtwo',
  'moltres',
  'pikachu',

  'abra',
  'articuno',
  'bulbasaur',
  'celebi',
  'charmander',
  'cubon',
  'eevee',
  'espeon',
  'flareon',
  'hooh',
  'jolteon',
  'mew',
  'mewtwo',
  'moltres',
  'pikachu',
];

const list = [];

for (var i = 0; i < arr.length; i++) {
  list.push({
    id: nanoid(),
    name: arr[i],
    isOpen: false,
    isMatch: false,
  });
}

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export const cardList = shuffle([...list]);
