
import { render } from 'react-dom'
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store';
import { mapStateToProps, mapDispatchToProps, setAuthor, setQuote } from './reducers';

function firstData(){
    fetch('https://api.quotable.io/quotes/random').then((response) => {
        if(response.ok){
            return response.json()
        }
    }).then(data => {
        store.dispatch(setAuthor(data[0].author))
        store.dispatch(setQuote(data[0].content))
    })
}

firstData()

render(
<div>

    <Provider store={store}>
        <App author={mapStateToProps.author} quote={mapStateToProps.quote} setAuthor={mapDispatchToProps.setAuthor} setQuote={mapDispatchToProps.setQuote}/>
    </Provider>
    
</div>, document.getElementById('root'));

