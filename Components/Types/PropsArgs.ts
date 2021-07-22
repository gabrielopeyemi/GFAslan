export interface PropsArgs {
  navigation: {
    replace?: any;
    push?: any;
    pop?: any;
    popToTop?: any;
    goBack?: any;
    navigate?: any;
    reset?: any;
    setParams?: any;
    dispatch?: any;
    isFocused?: any;
    canGoBack?: any;
    dangerouslyGetParent?: any;
    dangerouslyGetState?: any;
    addListener?: any;
    removeListener?: any;
  }
  route: {
    key?: string;
    name?: string;
    params: {
      data?: string;
      location?: any;
    };
  };
}