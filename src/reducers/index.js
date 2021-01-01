const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCR_EVEN = "INCR_EVEN";
const INCR_ASYNC = "INCR_ASYNC";

const initialLike = 0;

export default function LikeReducer(state = initialLike, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCR_EVEN:
      return state + 1;
    case INCR_ASYNC:
      return state + 1;
    default:
      return state;
  }
}
