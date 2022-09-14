import React,{ useState } from 'react'

function Home(props) {
    const [text, setText] = useState('');

    const toUp = () => {
        const newText = text.toUpperCase();
        setText(newText);
    }

    const toLow = () => {
        const newText = text.toLowerCase();
        setText(newText);
    }

    const copyText = () => {
        const text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to Clipboard','success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const clearText = () => {
        setText('');
    }

    return (
        <>
            <div className='container my-3'>
            <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>Text</h1>
                <div className="mb-3 my-3">
                    <textarea className="form-control" placeholder='Enter your text here' id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="6" style={{background: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}}></textarea>
                    <button type="button" className="btn btn-primary my-3" onClick={toUp}>Convert to Uppercase</button>
                    <button type="button" className="btn btn-primary my-3 mx-3" onClick={toLow}>Convert to Lowercase</button>
                    <button type="button" className="btn btn-primary my-3" onClick={copyText}>Copy Text</button>
                    <button type="button" className="btn btn-primary my-3 mx-3" onClick={clearText}>Clear Text</button>
                </div>
            </div>
        </>
    );
}

export default Home