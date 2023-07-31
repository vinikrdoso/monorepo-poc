"use client"
import * as S from './style'
import { FC } from 'react'

export interface QuickReferenceCardProps {
  title: string
  description: string
}

export const DownloadCard: FC<QuickReferenceCardProps> = ({ title, description }) => (
  <S.Container>
    <S.TitleWrapper>
      <h4>{title}</h4>
    </S.TitleWrapper>
    <p>{description}</p>
    <S.ButtonWrapper>
      <button >oi</button>
    </S.ButtonWrapper>
  </S.Container>
)
