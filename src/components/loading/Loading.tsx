import './Loading.css';

function Loading() {
    return (
        <div
            className='loading-overlay centralize'
            data-test-id="loading">Carregando...
        </div>
    )
}

export default Loading;