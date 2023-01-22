import React from "react";
import { BlogLink } from "./BlogLink";
import { blogData } from './Data'
import { Outlet } from "react-router-dom";

function Page() {
  return (
    <>
      <h2>Blog Page</h2>
      <ul>
        {blogData.map(aux => (
          <BlogLink key={blogData.indexOf(aux)} post={aux} />
        ))}
      </ul>
      <Outlet />
    </>
  )
}

export { Page }