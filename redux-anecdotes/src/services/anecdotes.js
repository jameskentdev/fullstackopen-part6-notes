import axios from 'axios';
import { asObject } from '../reducers/anecdoteReducer';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (anecdote) => {
  const object = asObject(anecdote);
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const voteFor = async (anecdote) => {
  const newAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
  const response = await axios.put(baseUrl + `/${anecdote.id}`, newAnecdote);
  return response.data;
};

const exportedObject = {
  getAll,
  createNew,
  voteFor,
};

export default exportedObject;
