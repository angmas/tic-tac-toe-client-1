'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onNewGame = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onPlaceX = function (event) {
  event.preventDefault()
  console.log('game/events/onPlaceX ran')
  console.log(data)
  const data = getFormFields(this)
  api.onPlaceX(data)
    .then(ui.placeXSuccess)
    .catch(ui.placeXFailure)
}

const onPlaceY = function (event) {
  event.preventDefault()
  console.log('game/events/onPlaceY ran')
  console.log(data)
  const data = getFormFields(this)
  api.onPlaceY(data)
    .then(ui.placeYSuccess)
    .catch(ui.placeYFailure)
}

const onClearGame = function (event) {
  event.preventDefault()
  console.log('game/events/onClearGame ran')
  api.clearGame()
    .then(ui.clearGameSuccess)
    .catch(ui.clearGameFailure)
}

/*const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran')

const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
*/
const addHandlers = () => {
  $('#new-game').on('click', onNewGame)
  $('#place-X').on('click', onPlaceX)
  $('#place-Y').on('click', onPlaceX)
  $('#clear-game').on('click', onClearGame)
}

module.exports = {
  addHandlers
}