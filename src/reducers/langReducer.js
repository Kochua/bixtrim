import { SWITCH_LANG } from '../actions/types'

export default function locale(state = 'en', action) {
  switch (action.type) {
    case SWITCH_LANG:
      return action.payload
    default:
      return state
  }
}
