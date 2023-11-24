import './app.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXTwitter} from '@fortawesome/free-brands-svg-icons'

import { mapStateToProps, mapDispatchToProps } from './reducers';
import { connect } from 'react-redux';


function App (props) {

    function getQuote(){
        fetch('https://api.quotable.io/quotes/random').then((response) => {
            if(response.ok){
                return response.json()
            }
        }).then(data => {
            props.setAuthor(data[0].author)
            props.setQuote(data[0].content)
        })
    }
    
    const tweetText = (props.quote).replace(/[' ']+/gm, '%20') + '%0A' + (props.author).replace(/[' ']+/gm, '%20')
    

    return(
        <>
            <h1 id='title'>Random Quote Machine</h1>
            <div id='quote-box'>
                <p className='text-blink' id='text'>{props.quote}</p> 
                <p id='author'> - {props.author}</p> 
                <a href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${tweetText}`} id='tweet-quote'><FontAwesomeIcon icon={faXTwitter} /></a>
                <button onClick={getQuote} id='new-quote'>New Quote</button>
            </div>
            <h5 style={{textAlign: 'center'}}>by banzaidev</h5>
        </> 

    )

}

const connectedApp = connect(mapStateToProps,mapDispatchToProps)(App)

export default connectedApp;