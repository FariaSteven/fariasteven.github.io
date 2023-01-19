import React from 'react';

import "./banner.css"

const Banner = ({children}: any) => {
  return (
    <div className="bannerContainer">
      {children}
    </div>
  )
}

export default Banner