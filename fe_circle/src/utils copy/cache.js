import { getLocalStorage, setLocalStorage, removeLocalStorage } from './storage'

export const getToken = () => getLocalStorage('$$_token')

export const setTransitionParams = params => setLocalStorage('transitionParams', params)

export const getTransitionParams = () => getLocalStorage('transitionParams')

export const removeTransitionParams = () => removeLocalStorage('transitionParams')
