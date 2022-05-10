import {createSlice} from "@reduxjs/toolkit";

const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        answerState: null,
        activeQuestion: 0,
        quiz: [
            {
                id: 1,
                question:
                  "Какое поколение машин позволяет нескольким пользователям работать с одной ЭВМ?",
                rightAnswerId: 3,
                answers: [
                    {id: 1, text: "Первое"},
                    {id: 2, text: "Второе"},
                    {id: 3, text: "Третье"},
                    {id: 4, text: "Четвёртое"},
                    {id: 5, text: "Пятое"},
                ],
            },
            {
                id: 2,
                question: "Первый президент Казахстана",
                rightAnswerId: 1,
                answers: [
                    {id: 1, text: "Нурсултан Назарбаев"},
                    {id: 2, text: "Владимир Путин"},
                    {id: 3, text: "Касым-Жомарт Токаев"},
                    {id: 4, text: "Дональд Трамп"},
                    {id: 5, text: "Пётр Порошенко"},
                ],
            },
        ],
        isFinishedQuiz: false,
        results: {},
    },
    reducers: {
        onAnswerClickHandler(state, {type, payload}) {
            if (state.answerState) {
                const key = Object.keys(state.answerState)[0];
                if (state.answerState[key] === "success") {
                    return;
                }
            }
            const question = state.quiz[state.activeQuestion];
            const results = state.results;

            function isFinishedQuiz() {
                return state.quiz.length === state.activeQuestion + 1;
            }

            if (question.rightAnswerId === payload.id) {
                if (!results[question.id]) {
                    results[question.id] = "success";
                }
                state.results = results;
                state.answerState = {[payload.id]: "success"};
                if (isFinishedQuiz()) {
                    state.isFinishedQuiz = true;
                } else {
                    state.activeQuestion = state.activeQuestion + 1;
                    state.answerState = null;
                }
            } else {
                results[question.id] = "error";
                state.results = results;
                state.answerState = {[payload.id]: "error"};
            }
        },
    },
});

export const {onAnswerClickHandler} = quizSlice.actions;
export default quizSlice.reducer;
