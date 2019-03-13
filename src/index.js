import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import App from './App'
import reducers from './reducers'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import ru from 'react-intl/locale-data/ru'
import ka from 'react-intl/locale-data/ka'
import fr from 'react-intl/locale-data/fr'
import de from 'react-intl/locale-data/de'
import zh from 'react-intl/locale-data/zh'

addLocaleData(en)
addLocaleData(ru)
addLocaleData(ka)
addLocaleData(fr)
addLocaleData(de)
addLocaleData(zh)

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
