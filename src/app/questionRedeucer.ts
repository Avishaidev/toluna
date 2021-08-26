import {createAction, createAsyncThunk, createReducer} from '@reduxjs/toolkit';
import {fetchInitData} from './questionAPI';
import {AnswerInterface} from "../types/AnswerInterface";
import {Questions} from "../types/Questions";
import {RootState} from "./store";

export interface QuestionsState {
    data: Questions,
    status: 'init' | 'loading' | 'loaded' | 'error'
}

const initialState = {
    data: {
        question: {
            text: '',
            imageURL: ''
        },
        answers: [],
    },
    status: 'init',
} as QuestionsState

export const appStatus = (state: RootState) => state.status;
export const headerImg = (state: RootState) => state.data.question.imageURL;
export const questionText = (state: RootState) => state.data.question.text;
export const answersData = (state: RootState) => state.data.answers;

export const addAnswer = createAction<AnswerInterface>('answer/add')
export const removeAnswer = createAction<string>('answer/remove')
export const updateQuestion = createAction<string>('question/update')

export const initData = createAsyncThunk('app/fetchData', async () => {
    return await fetchInitData();
})

export const questionReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(initData.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(initData.fulfilled, (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        })
        .addCase(initData.rejected, (state) => {
            state.status = 'error';
        })
        .addCase(updateQuestion, (state, action) => {
            state.data.question.text = action.payload;
        })
        .addCase(addAnswer, (state, action) => {
            state.data.answers.push(action.payload);
        })
        .addCase(removeAnswer, (state, action) => {
            state.data.answers = state.data.answers.filter((answer) => answer.id !== action.payload);
        })
})