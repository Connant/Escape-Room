import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadQuests, loadQuest } from './actions';
import { QuestType } from 'const';

const initialState = {
  quests: [],
  isQuestsLoaded: false,
  actualGenre: QuestType.ALL,
  actualQuest: {},
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
      state.isQuestsLoaded = true;
    })
    .addCase(changeGenre, (state, action) => {
      state.actualGenre = action.payload;
    })
    .addCase(loadQuest, (state, action) => {
      state.actualQuest = action.payload;
    });
});
