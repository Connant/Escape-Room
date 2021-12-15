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
  'adventures': 'Приключения',
  'horror': 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'sci-fi': 'Sci-fi',
}

export const LevelOfDifficultyAdapt = {
  HARD: 'Сложный',
  MEDIUM: 'Средний',
  EASY: 'Простой',
};

export const ToastMessage = {
  QUEST: 'Извините, квесты не найдены',
  ERROR: 'Извините, в настоящий момент сервер недоступен, попробуйте позже',
  SUCCESS: 'Отлично! Ваша заявка отправлена!',
  PHONE: 'Телефонный номер должен состоять из цифр и иметь 10 сиволов',
  PEOPLE_COUNT: 'Количество людей не может быть равно 0',
};

