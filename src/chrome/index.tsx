export const checkDevtoolsHeath = (): any => {
  if (window.__EAC_DEV_TOOLS__) {
    return window.__EAC_DEV_TOOLS__;
  }
  return null;
};
