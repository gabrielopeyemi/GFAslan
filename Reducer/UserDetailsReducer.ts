const initialState: any[] = [];

const UserDetailReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        UserDetail: action.payload,
      };
    default:
      return state;
  }
};

export default UserDetailReducer;
