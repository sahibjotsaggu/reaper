/**
 * makeActionCreator
 *
 * This function helps to reduce boilerplate by returning
 * action creator functions.
 *
 * @example
 * const ADD_TODO = 'ADD_TODO';
 * makeActionCreator(ADD_TODO, text);
 *
 * @param {string} type
 * @param {...string} argNames for the action creator function
 * @return {function}
 */

export default (type, ...argNames) => {
  return (...args) => {
    const action = { type };
    for (let i = 0; i < argNames.length; i++) {
      action[argNames[i]] = args[i];
    }
    return action;
  };
};
