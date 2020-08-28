import React from 'react'

// Static query for get data from project
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
import * as S from './styled'

const Profile = () => {
  const { 
    site: {
      siteMetadata: {position, description, title}
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata{
          title
          position
          description
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>

      <S.ProfileDescription>{description}</S.ProfileDescription>
  </S.ProfileWrapper>
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