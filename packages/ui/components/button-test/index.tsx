import * as S from './style'
// import { IButton } from '@shared/utils/types'

interface IProps {
  label?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  appearance?: 'primary' | 'secondary';
}

export const ButtonTest: React.FC<IProps> = ({
  label,
  onClick,
  isDisabled,
  isFullWidth = true,
  appearance = 'primary',
  ...props
}) => {
  return (
    <S.Container
      as='button'
      onClick={onClick}
      disabled={isDisabled}
      isfullwidth={isFullWidth}
      $appearance={appearance}
      {...props}
    >
      <S.Label as="span">
        {label}
      </S.Label>
    </S.Container>
  )
}
