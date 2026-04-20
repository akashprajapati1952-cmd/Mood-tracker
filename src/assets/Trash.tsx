const moodReducer= (state: State= initialState, action: Action)=>{
  switch (action.type){
    case ("Mood is happy"):
      return {...state, happyMoment: happyReducer(state.happyMoment, action)};
  
    case ("Mood is sad"):
      return {...state, sadMoment: sadReducer(state.sadMoment, action)};
  
    case ("clear"):
      return {...initialState};
   
    default:
      return {...state};
  }
}




const moodReducer= (state: State= initialState, action: Action)=>{
  if(action.type === "clear"){
    return initialState;
  }
  const nextHappy = happyReducer(state.happyMoment, action);
  const nextSad = sadReducer(state.sadMoment, action);
  if (nextHappy === state.happyMoment && nextSad === state.sadMoment) {
    return state;}
  return {
    happyMoment: nextHappy,
    sadMoment: nextSad
  };
  
}