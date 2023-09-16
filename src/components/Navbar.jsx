import { Link } from "react-router-dom";

function Navbar () {
    return (
        <div className=' border-slate-200 border bg-slate-100 mt-2 mb-5 py-2 rounded-md'>
            <ul className='flex'>
                <li className='mx-3 p-2'>
                    <Link to={'/'}>Home</Link>
                </li>
                <li className='mx-3 p-2'>
                    <Link to={'/about'} state={{ text: 'Hello' }}>About</Link>
                </li>
                <li className='mx-3 p-2'>
                    <Link to={'/contact'}>Contact</Link>
                </li>
                <li className='mx-3 p-2'>
                    <Link to={'/nest'}>Nest</Link>
                </li>
            </ul>
        </div >
    )
}

export default Navbar