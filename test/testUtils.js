
/**
* Returns node(s) with given data-test attribute
* @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
* @param {string} val - Value of the data-test attribute for searching the dom
* @returns {ShallowWrapper}
*/
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}
