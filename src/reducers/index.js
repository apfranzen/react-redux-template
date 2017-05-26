function reducer(state=0, action) {
  console.log(action)
  if (action.type === 'INCREMENT') {
    return ++state;
  }
  if (action.type === 'DECREMENT') {
    return --state;
  }
  return state;
}

export default reducer;