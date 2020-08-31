import React from 'react'

import * as S from './styled'

const PostItem = () => (
  <S.PostItemLink to='/slug'>
    <S.PostItemWrapper>
      <S.PostItemTag background='#47650b'>Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>31/08/2020 • 5 min Read</S.PostItemDate>
        <S.PostItemTitle>
          Say no to Medium: Have your own platform
        </S.PostItemTitle>
        <S.PostItemDescription>
          Some reasons to you have your own platform:
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem