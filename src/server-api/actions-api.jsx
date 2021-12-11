import { api } from "./api";


export async function fetchAllQuests(setValue) {
  try {
    const response = await api.get('/quests');
    setValue(response.data);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchQuest(questId, setValue) {
  try {
    const response = await api.get(`/quests/${questId}`);
    setValue(response.data);
  } catch (error) {
    console.error(error);
  }
}
