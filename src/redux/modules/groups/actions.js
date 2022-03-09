export const postGroup = (payload) => {
  return {
    type: '@group/POST',
    payload: { ...payload },
  };
};

export const postGroupSuccess = (payload) => {
  return {
    type: '@group/POST_SUCCESS',
    payload: { ...payload },
  };
};

export const postGroupFailed = (payload) => {
  return {
    type: '@group/POST_FAILED',
    payload: { ...payload },
  };
};

const groupsActions = {
  postGroup,
  postGroupSuccess,
  postGroupFailed,
};

export default groupsActions;
