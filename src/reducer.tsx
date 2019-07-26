import ADDITION from './constants';

const initialState: { result: number } = { result: 0 }

export default (state = initialState, action: {
  type: string, a: number, b: number
}) => {
  if(action.type === ADDITION){
    return {
      result: action.a + action.b
    }
  }
  return state
}

