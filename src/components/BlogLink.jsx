import React from "react";
import { NavLink } from "react-router-dom";

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
    </li>
  )
}

export {BlogLink}