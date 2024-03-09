/* eslint-disable require-yield */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// this startingPlantArray should eventually be removed
const startingPlantArray = [
  { id: 1, name: 'rose' },
  { id: 2, name: 'Tulip' },
  { id: 3, name: 'Oak' },
];

const plantList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return [...state, action.payload];
    default:
      return state;
  }
};

const plantsErrors = (state = null, action) => {
  switch (action.type) {
    case 'ERROR_PLANTS':
      return action.payload;
    default:
      return state;
  }
};

// SAGA function [generator function]
function* watcherSaga() {
  // yield
  yield takeEvery('GET_PLANTS', plantSaga);
  yield takeEvery('POST_PLANTS', postPlantSaga);
}

function* plantSaga(action) {
  console.log('running plant saga', action);
  try {
    const plantsReponse = yield axios({
      method: 'GET',
      url: '/api/plants',
    });
    //dispatch to set plants w/ content from plantsReponse.data
    //cannot use dispatch directly becuase this is not inside a component
    //USE SET FOR ADDING IN A REDUCER, USE GET IN A SAGA (SERVER ASSOCIATION) API CALL GET ROUTE
    yield put({ type: 'ADD_PLANT', payload: plantsReponse.data });
  } catch (error) {
    console.log('ERROR:', error);
    yield put({
      type: 'ERROR_PLANTS',
      payload: 'Something went wrong, please try again later.',
    });
  }
}

function* postPlantSaga(action) {
  try {
    // POST a new element to server
    yield axios({
      method: 'POST',
      url: '/api/plants',
      data: { name: action.payload },
    });
    // dispatch to refresh GET
    yield put({ type: 'GET_PLANTS' });
  } catch (error) {
    // error surface to user
    console.log('ERROR:', error);
    yield put({
      type: 'ERROR_ELEMENTS',
      payload: 'Could not add element at this time.',
    });
  }
}

// SAGA
const sagaMiddleware = createSagaMiddleware();

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// Note that the store is currently not
// configured to utilize redux-saga OR
// redux logger!
const store = createStore(
  combineReducers({ plantList, plantsErrors }),
  applyMiddleware(sagaMiddleware, logger)
);
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
sagaMiddleware.run(watcherSaga);

export default store;
