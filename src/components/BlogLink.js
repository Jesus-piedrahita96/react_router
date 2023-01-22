import React from "react";
import { Link } from "react-router-dom";

function BlogLink(props) {
  return (
    <li>
      <Link
        to={`/blog/${props.post.slug}`}
      >{props.post.title}</Link>
    </li>
  )
}

export {BlogLink}