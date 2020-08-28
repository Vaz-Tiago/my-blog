import React from 'react'

// Static query for get data from project
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar';

const Profile = () => {
  const { 
    site: {
      siteMetadata: {title, position, description, author}
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata{
          author
          title
          position
          description
        }
      }
    }
  `)

  return (
    <div className="Profile-wrapper">
      <Avatar />
      <h1>{title}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
      <p>{author}</p>
  </div>
  )
}

// const Profile = () => (
//   <StaticQuery 
//     query={graphql`
//       query MySiteMetada {
//         site {
//           siteMetadata {
//             author
//             description
//             position
//             title
//           }
//         }
//       }
//     `}

//     render={({site: {
//       siteMetadata: {title, position, description, author}
//     }}) => (

//     )}
//   />
// )

export default Profile;