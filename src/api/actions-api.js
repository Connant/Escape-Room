import { APIRoute, ToastMessage } from "const";
import { toast } from 'react-toastify';
import { loadQuest, loadQuests, redirectToRoute} from '../store/actions';

export const fetchAllQuests = () =>
  async (dispatch, _getStore, api) => {
    try {
      const { data } = await api.get(APIRoute.QUESTS);
      dispatch(loadQuests(data));
    } catch {
      dispatch(redirectToRoute(APIRoute.NOT_FOUND));
    }
  };


export const fetchQuest = (questId) =>
  async (dispatch, _getStore, api) => {
    try {
      const { data } = await api.get(APIRoute.QUEST.replace(':id', `${questId}`));
      dispatch(loadQuest(data));
    } catch {
      dispatch(redirectToRoute(APIRoute.NOT_FOUND));
      toast.error(ToastMessage.QUEST, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

export const sendRequest = (postData) =>
  async (_dispatch, _getStore, api) => {
    try {
      await api.post(APIRoute.ORDERS, postData);
    } catch {
      toast.error(ToastMessage.ERROR, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

