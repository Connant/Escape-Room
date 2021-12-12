import { api } from "./api";
import { Redirect } from 'react-router-dom';
import { AppRoute } from "const";



export async function fetchAllQuests(setValue) {
  try {
    const response = await api.get('/quests');
    setValue(response.data);
  } catch (error) {
    return  <Redirect to={AppRoute.Error} />;
    // console.error(error);
  }
}

export async function fetchQuest(questId, setValue) {
  try {
    const response = await api.get(`/quests/${questId}`);
    setValue(response.data);
  } catch (error) {
    return setValue(-1);
    // console.error(error);
  }
}

export async function sendRequest(postData) {
  try {
    const response = await api.post('/orders', postData);
    // postData(response.data);
    console.log(response.data)
  } catch (error) {
    // return setValue(-1);
    console.error(error);
  }
}
