import React from 'react'
import propTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'

import * as S from './styled'

const Comments = ({url, title}) => {
  const completeURL = `https://dominio.com.br${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentário</S.CommentsTitle>
      <ReactDisqusComments
        shortname="vaztiago" //Login no disqus
        identifier={completeURL} // Algo único para identificação
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  );
}

Comments.prototype = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
}

export default Comments