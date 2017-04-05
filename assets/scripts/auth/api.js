'use strict'

const config = require('../config')
const store = require('../store')

const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up-modal',
    method: 'POST',
    data
    // data: data is same as just plain data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in-modal',
    method: 'POST',
    data
    // data: data is same as just plain data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out-modal/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: data is same as just plain data
  })
}
const changePassword = (data) => {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/change-password-modal/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data is same as just plain data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
