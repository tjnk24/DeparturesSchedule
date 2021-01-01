export {};
// export const Context = React.createContext<ContextTypes>({} as ContextTypes);

// export const Provider: FC = (props): JSX.Element => {
//   const [state, dispatch] = useReducer(combinedReducer, initialState);

//   const { user } = state.authUserState;
//   const { children } = props;

//   useEffect(() => {
//     fetchProps(dispatch, api.appProps);

//     const listener = auth.onAuthStateChanged((authUser) => {
//       dispatch(authUserUpdate(authUser));

//       if (authUser) {
//         dispatch(setLoggedIn(true));
//       } else {
//         dispatch(removeState());
//         dispatch(setLoggedIn(false));
//       }
//     });

//     return () => {
//       listener();
//     };
//   }, []);

//   useEffect(() => {
//     user && dispatch(saveState());
//   }, [user]);

//   return (
//     <Context.Provider value={{ state, dispatch }}>
//       { children }
//     </Context.Provider>
//   );
// };
