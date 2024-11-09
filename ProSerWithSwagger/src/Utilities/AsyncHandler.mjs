const asyncHandler = (handler) => {
  return (req, res, next) => {
    Promise.resolve(handler).catch((err) => next(err));
  };
};

export { asyncHandler };
