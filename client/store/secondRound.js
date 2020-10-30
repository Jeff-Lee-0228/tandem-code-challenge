//ACTION TYPE
export const SUBMITTED_SECOND_ROUND = 'SUBMITTED_SECOND_ROUND';
//ACTION CREATOR
export const submittedSecondRound = (secondRound) => ({
  type: SUBMITTED_SECOND_ROUND,
  secondRound,
});
//THUNK CREATOR
export const submitSecondRound = (secondRound) => (dispatch) => {
  dispatch(submittedSecondRound(secondRound));
};
//INITIAL STATE
const initialState = {};
//REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case SUBMITTED_SECOND_ROUND:
      return action.secondRound;
    default:
      return state;
  }
}
