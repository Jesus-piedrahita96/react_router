import React from "react";
import { BlogLink } from "./BlogLink";
import { Outlet } from "react-router-dom";
import { useDataJson } from "./auth";

import '../css/page.css'

function Page() {
  const datos = useDataJson()

  return (
    <>
      <div className="container-page">
        <div className="container-page__main">
          <h1>Blog Page</h1>
          <ul>
            {datos.data.map((aux) => (
              <BlogLink key={aux.id} post={aux} />
            ))}
          </ul>
        </div>
        <div className='container-page__sub'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export { Page }