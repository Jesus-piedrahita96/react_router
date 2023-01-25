import React from "react";
import { BlogLink } from "./BlogLink";
import { Outlet } from "react-router-dom";
import { useDataJson } from "./auth";

function Page() {
  const datos = useDataJson()

  return (
    <>
      <h2>Blog Page</h2>
      <ul>
        {datos.data.map((aux, index) => (
          <BlogLink key={index} post={aux} />
        ))}
      </ul>
      <Outlet />
    </>
  )
}

export { Page }