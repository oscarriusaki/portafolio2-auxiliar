import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { logoutUser } from '../../store/auth';

export const Navbar = () => {
  const [active, setActive] = useState(1);
  const { first_name } = useSelector(state => state.auth);
  const { logout, user } = useContext(AuthContext)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleClick = id => {
    setActive(id);
  };
  const onLogout = () =>{
    logout()
    dispatch(logoutUser())
    // navigate('/login',{
    //   replace:true
    // })
  }

  return (
  <>
    <nav className="bg-gray-800 h-18 sticky top-0">
    <ul className="flex justify-start items-center px-3 py-3">
      <div className="block flex">
        <li className='pr-5 font-bold text-3xl text-white'>
          <Link to='/' onClick={() => handleClick(1)} >HeroApp</Link>
        </li>
        <NavLink
          className={`focus:outline-none focus:font-semibold ${active === 1 ? 'text-white pl-3 pr-3 pb-2 pt-2 rounded-lg bg-gray-700' : 'text-white pl-3 pr-3 pb-2 pt-2 rounded-lg '}`}
          onClick={() => handleClick(1)}
          to='/'
          >
          Marvel
        </NavLink>
        <NavLink
          className={`focus:outline-none focus:font-semibold ${active === 2 ? 'text-white pl-3 pr-3 pb-2 pt-2 rounded-lg bg-gray-700' : 'text-white pl-3 pr-3 pb-2 pt-2 rounded-lg '}`}
          onClick={() => handleClick(2)}
          to='/dc'
        >
          Dc
        </NavLink>
        <NavLink
          className={`focus:outline-none focus:font-semibold ${active === 3 ? 'text-white pl-3 pr-3 pb-2 pt-2 rounded-lg bg-gray-700' : 'text-white pl-3 pr-3 pb-2 pt-2 rounded-lg '}`}
          onClick={() => handleClick(3)  }
          to='/search'
          >
          Search
        </NavLink>
        <NavLink 
          className={`focus:outline-none focus:font-semibold ${active === 4 ? 'text-white pl-3 pr-3 pb-2 pt-2 rounded-lg bg-gray-700': 'text-white pl-3 pr-3 pb-2 pt-2 rounded-lg'}`}
          onClick={() => handleClick(4)}
          to='/registerHero'
          >
          Register
        </NavLink>
      </div>
      <div className="flex w-full justify-end">
        <p className='px-2 text-white border-2 pt-1 pb-2  rounded-md'>{first_name}</p>
        <Link className='text-white border-blue-700 border-2 pb-2 pt-1 px-2 rounded-lg bg-blue-500' onClick={onLogout}>Logout</Link>
      </div>
    </ul>
  </nav>
  </>
  )
}
