import { useSelector } from 'react-redux'
import './style.css'

export const Header = () => {
    const notes = useSelector(state => state.notes);
    
    return (
        <header className='header'>
            <h1 className='title'>Заметки</h1>
            <span className='count'>({notes.length})</span>
        </header>
    )
}