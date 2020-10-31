/* eslint-disable no-duplicate-imports */
/* global describe beforeEach afterEach it */

import { expect } from 'chai';
import {
  submitRound,
  doResetRound,
  submittedRound,
  resetRound,
} from './submitRound';
import submitRoundReducer from './submitRound';
import { createStore, applyMiddleware } from 'redux';
import enforceImmutableState from 'redux-immutable-state-invariant';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

/* TEST ACTION CREATOR  */
describe('action creators in redux store', () => {
  const question = 'Devmynd';
  describe('submittedRound and resetRound', () => {
    it('return properly formatted action for all questions', () => {
      expect(submittedRound(question)).to.be.deep.equal({
        type: 'SUBMITTED_ROUND',
        round: question,
      });
      expect(resetRound()).to.be.deep.equal({
        type: 'RESET_ROUND',
      });
    });
  });
});

describe('reducer', () => {
  /* TEST INITIAL STATE */
  it('the initial state is an empty object', () => {
    const store = createStore(
      submitRoundReducer,
      applyMiddleware(enforceImmutableState())
    );

    expect(store.getState()).to.be.an('array');
    expect(store.getState()).to.be.deep.equal([]);
  });

  let store;

  const initialState = [];

  beforeEach(() => {
    store = mockStore(initialState);
  });

  afterEach(() => {
    store.clearActions();
  });

  /* TEST THUNK CREATOR */
  describe('thunk creators in redux store', () => {
    const question = 'Devmynd';

    /* TEST SUBMITROUND THUNK CREATOR */
    it('submitRound thunk creator dispatches SUBMITTED_ROUND action', async () => {
      await store.dispatch(submitRound(question));
      const actions = store.getActions();

      expect(actions[0].type).to.be.equal('SUBMITTED_ROUND');
      expect(actions[0].round).to.be.deep.equal(question);
    });

    /* TEST DORESETROUND THUNK CREATOR */
    it('doResetRound thunk creator dispatches RESET_ROUND action', async () => {
      await store.dispatch(doResetRound(question));
      const actions = store.getActions();

      expect(actions[0].type).to.be.equal('RESET_ROUND');
    });
  });
});
