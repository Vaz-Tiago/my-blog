import React from 'react'

// Static query for get data from project
import {StaticQuery, graphql} from 'gatsby'

const Profile = () => (
  <StaticQuery 
    query={graphql`
      query MySiteMetada {
        site {
          siteMetadata {
            author
            description
            position
            title
          }
        }
      }
    `}

    render={({site: {
      siteMetadata: {title, position, description, author}
    }}) => (
      <div className="Profile-wrapper">
        <h1>{title}</h1>
        <h2>{position}</h2>
        <p>{description}</p>
        <p>{author}</p>
      </div>
    )}
  />
)

export default Profile;