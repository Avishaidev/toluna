import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {questionReducer}  from './questionRedeucer';
import {updateLocalStorageData} from './questionAPI';

export const store = configureStore({
    reducer: questionReducer
});

store.subscribe(() => {
    const state = store.getState();

    if (state.status === 'loaded' && state.data.question) {
        updateLocalStorageData(state.data);
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
