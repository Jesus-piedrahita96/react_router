import React from "react";
import { Link, NavLink } from "react-router-dom";

function BlogLink(props) {
  return (
    <li>
      <NavLink
        to={`/blog/${props.post.slug}`}
        style={({isActive}) => ({
          color: isActive ? 'blue' : 'black'
        })}
      >
        {props.post.title}
      </NavLink>
      {/* <Link
        to={`/blog/${props.post.slug}`}
      >{props.post.title}</Link> */}
    </li>
  )
}

export {BlogLink}