export function setState(thisObj, jsonObj) {
  return new Promise((resolve, reject) => {
    try {
      thisObj.setState(jsonObj);
      resolve();
    } catch (err) {
      reject(err.message);
    }
  });
}
