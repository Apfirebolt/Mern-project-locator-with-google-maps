import {
    PROJECT_CREATE_REQUEST,
    PROJECT_CREATE_SUCCESS,
    PROJECT_CREATE_FAIL,
    PROJECT_CREATE_RESET,
    PROJECT_DELETE_FAIL,
    PROJECT_DELETE_REQUEST,
    PROJECT_DELETE_SUCCESS,
    PROJECT_LIST_REQUEST,
    PROJECT_LIST_SUCCESS,
    PROJECT_LIST_FAIL,
    PROJECT_DETAILS_REQUEST,
    PROJECT_DETAILS_FAIL,
    PROJECT_DETAILS_SUCCESS,
    PROJECT_DETAILS_RESET,
    PROJECT_UPDATE_REQUEST,
    PROJECT_UPDATE_SUCCESS,
    PROJECT_UPDATE_RESET,
    PROJECT_UPDATE_FAIL,
    PROJECT_LIST_RESET
  } from '../constants/projectConstants'
  
  export const createProjectReducer = (state = {}, action) => {
    switch (action.type) {
      case PROJECT_CREATE_REQUEST:
        return { loading: true }
      case PROJECT_CREATE_SUCCESS:
        return { loading: false, success: true, project: action.payload }
      case PROJECT_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case PROJECT_CREATE_RESET:
        return { success: false }
      default:
        return state
    }
  }
  
  export const updateProjectReducer = (state = {}, action) => {
    switch (action.type) {
      case PROJECT_UPDATE_REQUEST:
        return { loading: true }
      case PROJECT_UPDATE_SUCCESS:
        return { loading: false, success: true, userInfo: action.payload }
      case PROJECT_UPDATE_RESET:
        return { success: false }
      case PROJECT_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const projectDetailsReducer = (state = { project: {} }, action) => {
    switch (action.type) {
      case PROJECT_DETAILS_REQUEST:
        return { ...state, loading: true }
      case PROJECT_DETAILS_SUCCESS:
        return { loading: false, project: action.payload }
      case PROJECT_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      case PROJECT_DETAILS_RESET:
        return { project: {} }
      default:
        return state
    }
  }
  
  export const projectListReducer = (state = { projects: [] }, action) => {
    switch (action.type) {
      case PROJECT_LIST_REQUEST:
        return { loading: true }
      case PROJECT_LIST_SUCCESS:
        return { loading: false, projects: action.payload }
      case PROJECT_LIST_FAIL:
        return { loading: false, error: action.payload }
      case PROJECT_LIST_RESET:
        return { projects: [] }
      default:
        return state
    }
  }
  
  export const projectDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case PROJECT_DELETE_REQUEST:
        return { loading: true }
      case PROJECT_DELETE_SUCCESS:
        return { loading: false, success: true }
      case PROJECT_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  