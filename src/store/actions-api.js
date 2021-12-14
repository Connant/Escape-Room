import { Redirect } from 'react-router-dom';
import { AppRoute, APIRoute, ToastMessage } from "const";
import { toast } from 'react-toastify';
import {
  loadQuest,
  loadQuests,
  redirectToRoute,
} from './actions';

export const fetchAllQuests = () =>
  async (dispatch, _getStore, api) => {
    try {
      const { data } = await api.get(APIRoute.QUESTS);
      dispatch(loadQuests(data));
    } catch {
      return  <Redirect to={AppRoute.Error} />;
    }
  };


export const fetchQuest = (questId) =>
  async (dispatch, _getStore, api) => {
    try {
      const { data } = await api.get(APIRoute.QUEST.replace(':id', `${questId}`));
      dispatch(loadQuest(data));
    } catch {
      dispatch(redirectToRoute(APIRoute.NOT_FOUND));
    }
  };

export const sendRequest = (postData) =>
  async (_dispatch, _getStore, api) => {
    try {
      await api.post(APIRoute.ORDERS, postData);
      toast.info(ToastMessage.SUCCESS);
    } catch {
      toast.error(ToastMessage.ERROR);
    }
  };

