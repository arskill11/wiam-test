import { StyledModal } from './Modal.styles';
import type { Props } from './types';

export const Modal = ({ firstName, lastName, loanSum, loanTerm }: Props) => {
  return (
    <StyledModal>
      <p>
        Поздравляем, {firstName} {lastName}. Вам одобрена {loanSum}$ на{' '}
        {loanTerm} дней
      </p>
    </StyledModal>
  );
};
