const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCR_EVEN = "INCR_EVEN";
const INCR_ASYNC = "INCR_ASYNC";

export const increase = e => {
    e.preventDefault();
    return {
        type: INCREMENT
    }
}

export const decrease = e => {
    e.preventDefault();
    return {
        type: DECREMENT
    }
}

export const incr_even = e => {
    e.preventDefault();
    return {
        type: INCR_EVEN
    }
}

export const incr_async = e => {
    e.preventDefault();
    return {
        type: INCR_ASYNC
    }
}

