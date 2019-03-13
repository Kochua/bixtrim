import { SWITCH_LANG } from './types'

export const changeLang_a = lang => dispatch => {
  dispatch({ type: SWITCH_LANG, payload: lang })
}
