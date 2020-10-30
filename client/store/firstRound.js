//ACTION TYPE
export const SUBMITTED_FIRST_ROUND = 'SUBMITTED_FIRST_ROUND';
//ACTION CREATOR
export const submittedFirstRound = (firstRound) => ({
  type: SUBMITTED_FIRST_ROUND,
  firstRound,
});
//THUNK CREATOR
export const submitFirstRound = (firstRound) => (dispatch) => {
  dispatch(submittedFirstRound(firstRound));
};
//INITIAL STATE
const initialState = {};
//REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case SUBMITTED_FIRST_ROUND:
      return action.firstRound;
    default:
      return state;
  }
}
