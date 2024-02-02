import React from 'react';
import "./HomeLayout.css";
import Header from '../../components/Header/Header';


const HomeLayout = ({children}) => {
  return (
<><Header/>
{children}
</>  )
}

export default HomeLayout;
