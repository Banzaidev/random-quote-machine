import { createAction, createReducer } from "@reduxjs/toolkit";


export const setAuthor = createAction('setAuthor');
export const setQuote = createAction('setQuote');

const initialState = {
    author : '',
    quote : ''
}


export const quoteReducer = createReducer(initialState,(builder) => {
    builder.addCase(setAuthor, (state, action) => {state.author = action.payload})
    builder.addCase(setQuote, (state, action) => {state.quote = action.payload})
})


export const mapStateToProps = (state) => {
    return ({
        author: state.author,
        quote: state.quote
    })
}

export const mapDispatchToProps = (dispatch) => {
    return({
        setAuthor: (author) => {return dispatch(setAuthor(author))},
        setQuote: (quote) =>  {return dispatch(setQuote(quote))}
    })
}