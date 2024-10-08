import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

export default function Button(props) {
     const className = [props.className];
     if (props.isPrimary) className.push("btn-primary");
     if (props.isLarge) className.push("btn-lg");
     if (props.isSmall) className.push("btn-sm");
     if (props.isBlock) className.push("btn-block");
     if (props.isShadow) className.push("btn.shadow");

     //Untuk menghendel onclick
     const onClick = () => {
          if (props.onclick) props.onclick();
     }

     if(props.isDisabled || props.isLoading) {
          if(props.isDisabled) className.push("disabled")
     
          return(
          <span className={className.join(" ")} style={props.style}>
               {
                    props.isLoading ? <>
                    <span className="spinner-border spinner-border-sm mx-5"></span>
                    <span className="sr-only">Loading ...</span>
                    </> : (props.children)
               }
          </span>,
          <span className={className.join(" ")} style={props.style}>
               {
                    props.isLoading ? <>
                    <span className='spinner-border spinner-border-sm mx-5'></span>
                    <span className='sr-only'>Loading ...</span>
                    </> : (props.children)
               }
          </span>,
          <span className={className.join(" ")} style={props.style}>
               {
                    props.isLoading ? <>
                    <span className='spinner-grow spinner-grow-sm mx-5'></span>
                    <span className='sr-only'>Loading ...</span>
                    </> : (props.children)
               }
          </span>
          );}

     if(props.type === "link") {
          if(props.isExternal) {
               return(
                    <a href={props.href} className={className.join(" ")} style={props.style} target={props.target === "_blank" ? "noopener noreferrer":undefined} rel={props.target === "_blank" ?"_blank":undefined}>{props.children}</a>
               )
          } else {
               return (
                    <link to={props.href} className={className.join(" ")} style={props.style} onClick={onClick} target={props.target === "_blank" ? "noopener noreferrer":undefined} rel={props.target === "_blank" ?"_blank":undefined}>
                         {props.children}
                    </link>
               )
          }
     }

     return <Button className={className.join(" ")} style={props.style} onclick={onClick}>
          {props.children}
     </Button>

}

Button.propTypes = {
     type: propTypes.oneOf(["button", "link"]),
     onclick: propTypes.func,
     href: propTypes.string,
     target: propTypes.string,
     className: propTypes.string,
     isExternal: propTypes.bool,
     isDisabled: propTypes.bool,
     isLoading: propTypes.bool,
     isSmall: propTypes.bool,
     isLarge: propTypes.bool,
     isBlock: propTypes.bool,
     isExternal: propTypes.bool,
     hasShadow: propTypes.bool,
     isPrimary: propTypes.bool,
}
