export default store => next => action => {
  const { dispatch, getState } = store;
  const { type, promise, onSuccess, onError, payload } = action;
  if (!promise) {
    return next(action);
  }
  return new Promise((resolve, reject) => {
    return promise().then((res) => {
      if (res.data.code === 200) {
        next({
          type,
          result: res.data,
          ...payload,
        });
        if (onSuccess) {
          onSuccess(res.data, dispatch, getState);
        }
      }
      resolve(res.data);
    }).catch(err => {
      if (onError) {
        onError(err, dispatch, getState);
      }
      reject(err);
    });
  });
};