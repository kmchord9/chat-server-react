import styled from 'styled-components';

const TextFormStyle = styled.div`
#form { 
    background: rgba(0, 0, 0, 0.15); 
    padding: 0.25rem; display: flex;  
    height: 5rem; 
    backdrop-filter: blur(10px); 
    box-sizing:border-box;
}

#textarea { 
    border: none; 
    padding: 0 1rem; 
    flex-grow: 1; 
    border-radius: 0.5rem; 
    margin: 0.5em 1rem 0.5em 1rem; 
    height: calc( 1.5em *2 ); 
    line-height: 1em; 
    font-size:1.5em;  
    resize: none;
}

#textarea:focus { 
    outline: none; 
}

#username { 
    border: none; 
    padding: 0 1rem; 
    border-radius: 2rem; 
    margin: 0.5em 1rem 0.5em 1rem; 
    height: calc( 4em); 
    width: 6%}

#form > button { 
    background: #333; 
    border: none; 
    padding: 0 1rem; 
    margin: 0.25rem; 
    border-radius: 3px; 
    outline: none; 
    color: #fff; 
}`;

const TextareaForm = () => {
    return (
    <TextFormStyle>
        <div>
            <form id="form" action="">
                <input id="username" placeholder="なまえ" />
                <textarea id="textarea" ></textarea><button>Send</button>
            </form>   
        </div>
    </TextFormStyle>     
    );
};

export default TextareaForm;