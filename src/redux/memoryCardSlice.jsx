import { createSlice } from "@reduxjs/toolkit";

import { cardList, shuffle } from './cards';
export const memoryCardSlice = createSlice({
  name: "memoryCard",
  initialState: {
    memoryCards: cardList,
    score: 0,
    selectmemoryCards: [],
    matchedmemoryCards: [],
  },
  reducers: {
    suffled: (state) => {
      state.memoryCards.forEach(card => {
        card.isOpen = false;
        card.isMatch = false;
      });
      state.memoryCards = shuffle(state.memoryCards);
      state.score = 0;
      state.selectmemoryCards = [];
      state.matchedmemoryCards = [];
    },
    selectCard: (state, action) => {
      const { id } = action.payload;
      const updatedMemoryCard = state.memoryCards.find((card) => card.id === id);
      updatedMemoryCard.isOpen = !updatedMemoryCard.isOpen;
      state.selectmemoryCards.push(updatedMemoryCard);
    },
    deSelect: (state, action) => {
      if (state.selectmemoryCards.length === 2) {
        if (state.selectmemoryCards[0].name === state.selectmemoryCards[1].name) {
          state.score += 10;
          const updatedMemoryCard1 = state.memoryCards.find((card) => card.id === state.selectmemoryCards[0].id);
          updatedMemoryCard1.isMatch = true;
          const updatedMemoryCard2 = state.memoryCards.find((card) => card.id === state.selectmemoryCards[1].id);
          updatedMemoryCard2.isMatch = true;
          state.matchedmemoryCards.push(state.selectmemoryCards[0]);
          state.matchedmemoryCards.push(state.selectmemoryCards[1]);
          state.selectmemoryCards = [];
        }
        else {
          state.score -= 5;
          const updatedMemoryCard1 = state.memoryCards.find((card) => card.id === state.selectmemoryCards[0].id);
          updatedMemoryCard1.isOpen = false;
          const updatedMemoryCard2 = state.memoryCards.find((card) => card.id === state.selectmemoryCards[1].id);
          updatedMemoryCard2.isOpen = false;
          state.selectmemoryCards = [];
        }
      }
    },
  },
});

export const SelectmatchedmemoryCards = (state) => state.memoryCard.matchedmemoryCards;
export const SelectselectDisabled = (state) => state.memoryCard.selectDisabled;
export const SelectselectedmemoryCards = (state) => state.memoryCard.selectmemoryCards;
export const SelectmemoryCards = (state) => state.memoryCard.memoryCards;
export const Selectscore = (state) => state.memoryCard.score;
export const { selectCard, deSelect, suffled } = memoryCardSlice.actions;
export default memoryCardSlice.reducer;
