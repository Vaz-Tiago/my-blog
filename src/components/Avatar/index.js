import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: {eq: "avatar.jpg"}) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return <Img fixed={avatarImage.childImageSharp.fixed} />
}

// Para usar imagens onde os tamanhos são relativos, usar o fluid.
// unica diferença é: onde está fixed coloca fluid e a definição de tamanho
// é por maxWidth e maxHeight, porém, ela ainda assim se adapta ao tamnho do
// container pai, ou seja, a imagem terá 60px, mas se a div for maior a img vai estourar

export default Avatar