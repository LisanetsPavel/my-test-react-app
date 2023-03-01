import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '@store/Counter';
import { templateFormReducer } from '@store/TemplateForm';
import { postsApi } from '@store/Posts/queries/postsApi';
import { usersApi } from '@store/Users';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    templateForm: templateFormReducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware).concat(usersApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
