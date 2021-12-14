import { createAction } from '@reduxjs/toolkit';
import { ActionType } from 'const';

export const loadQuests = createAction(
  ActionType.LOAD_QUESTS,
  (quests) => ({ payload: quests }),
);

export const loadQuest = createAction(
  ActionType.LOAD_QUEST,
  (quest) => ({ payload: quest }),
);

export const changeGenre = createAction(
  ActionType.CHANGE_GENRE,
  (genre) => ({ payload: genre }),
);

export const redirectToRoute = createAction(
  ActionType.REDIRECT,
  (url) => ({ payload: url }),
);
