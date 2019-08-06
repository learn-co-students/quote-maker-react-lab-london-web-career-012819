export default (state = [], action) => {

  let index
  let quote

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      let newState = state.filter(quote => quote.id !== action.quoteId);
      return newState

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      quote.votes += 1;
      return [...state.slice(0, index), quote, ...state.slice(index+1)];

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      quote.votes > 0 ? quote.votes -= 1 : quote.votes = 0;
      return [...state.slice(0, index), quote, ...state.slice(index+1)];

    default:
      return state
  }

}
