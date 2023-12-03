import './style.css'

const count = 999

export const Header = () => {
    return (
        <header className='header'>
            <h1 className='title'>Заметки</h1>
            <span className='count'>({count})</span>
        </header>
    )
}