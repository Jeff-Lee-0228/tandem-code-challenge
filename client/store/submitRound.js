//ACTION TYPE
export const SUBMITTED_ROUND = 'SUBMITTED_ROUND';
export const RESET_ROUND = 'RESET_ROUND';
//ACTION CREATOR
export const submittedRound = (round) => ({
  type: SUBMITTED_ROUND,
  round,
});
export const resetRound = () => ({
  type: RESET_ROUND,
});
//THUNK CREATOR
export const submitRound = (round) => (dispatch) => {
  dispatch(submittedRound(round));
};
export const doResetRound = () => (dispatch) => {
  dispatch(resetRound());
};
//INITIAL STATE
const initialState = [];
//REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case SUBMITTED_ROUND:
      return [...state, action.round];
    case RESET_ROUND:
      return [];
    default:
      return state;
  }
}
