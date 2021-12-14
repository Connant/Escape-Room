import { QuestType } from "const";

export const validatePhone = (phone) => {
  return /^[0-9]{10}$/.test(phone);
};

export const validatePeopleCount = (peopleCount) => {
  return peopleCount > 0;
};

export const filterQuestsByType = (quests, type) => {
  if (type === QuestType.ALL) {
    return quests;
  }
  return quests.filter((quest) => quest.type === type);
};

