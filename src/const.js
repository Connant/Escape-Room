import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

export const containerStyle = {
  width: '649px',
  height: '336px'
};

export const center = {
  lat:  59.9681958,
  lng: 30.3159353
};

export const SCALE = 17;

export const AppRoute = {
  Main: '/',
  Quest: '/detailed-quest/:id',
  Contacts: '/contacts',
  Error: '/404',
}

export const APIRoute = {
  QUESTS: '/quests',
  QUEST: '/quests/:id',
  ORDERS: '/orders',
  NOT_FOUND: '/404',
};

export const ActionType = {
  LOAD_QUESTS: 'data/loadQuests',
  LOAD_QUEST: 'data/loadQuest',
  CHANGE_GENRE: 'app/changeGenre',
  FILTER_QUESTS: 'app/filterQuests',
  REDIRECT: 'app/redirect',
};

export const icons = [
  IconAllQuests,
  IconAdventures,
  IconHorrors,
  IconMystic,
  IconDetective,
  IconScifi,
];

export const tabTypes = [
  'Все квесты',
  'Приключения',
  'Ужасы',
  'Мистика',
  'Детектив',
  'Sci-fi',
];

export const QuestType = {
  ALL: 'all',
  ADVENTURES: 'adventures',
  HORROR: 'horror',
  MYSTIC: 'mystic',
  DETECTIVE: 'detective',
  SCI_FI: 'sci-fi',
}

export const QuestTypeAdapt = {
  ADVENTURES: 'приключения',
  HORROR: 'ужасы',
  MYSTIC: 'мистика',
  DETECTIVE: 'детектив',
  SCI_FI: 'sci-fi',
}

export const LevelOfDifficultyAdapt = {
  HARD: 'сложный',
  MEDIUM: 'средний',
  EASY: 'простой',
};

export const ToastMessage = {
  ERROR: 'Sorry, the server is not available at the moment. Please try again later.',
  SUCCESS: 'Fine! Your application has been accepted for processing',
  PHONE: 'Sorry, phone number must be digits and must be at least 10 characters',
  PEOPLE_COUNT: 'The number of participants cannot be equal to 0',
};

