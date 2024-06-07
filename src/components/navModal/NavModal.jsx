import styles from './styles.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function NavModal({ setOpen, isO }) {

    const location = useLocation();
    return (
        <div className={styles['modal']} style={
            isO ? { height: '100vh' } : {}
        }>
            <div className={styles['navlinkcontainer']} style={isO ? {} : { display: 'none' }}>
                <Link to='/' className={location.pathname === '/' ? styles.active : ''} onClick={() => {
                    console.log('sapne vs everyone')
                    setOpen(!isO)
                }}><h3>Home</h3></Link>
                <Link to='/contact' className={location.pathname === '/contact' ? styles.active : ''} onClick={() => {
                    setOpen(!isO)
                }} ><h3>Contact</h3></Link>
                <Link to='/about' className={location.pathname === '/about' ? styles.active : ''} onClick={() => {
                    setOpen(!isO)
                }}><h3>About</h3></Link>
            </div>
        </div>
    );
};