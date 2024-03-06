import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { FaCheckCircle } from 'react-icons/fa';

type WidthType = 'auto' | 'fit-content';

type CardProps = {
  selected?: boolean;
  isHoverable?: boolean;
  onClick?: () => void;
  width?: WidthType;
};

function Card({
  selected,
  isHoverable,
  width,
  onClick,
  children,
}: PropsWithChildren<CardProps>) {
  return (
    <CardWrapper
      isHoverable={isHoverable}
      selected={selected}
      onClick={onClick}
      width={width}
    >
      <ChildWrapper>
        {selected && <FaCheckCircle fill={COLORS.GREEN} />}
        {children}
      </ChildWrapper>
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.div<{
  selected?: boolean;
  isHoverable?: boolean;
  width?: WidthType;
}>`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  padding: 12px 20px;
  border-radius: 12px;
  width: ${(p) => p.width ?? 'auto'};
  ${(p) => (p.selected ? `box-shadow: 0 4px 8px ${COLORS.GREY};` : '')}
  ${(p) =>
    p.isHoverable
      ? `
    border: 1px solid ${COLORS.GREY};
    cursor: pointer;
    &:hover {
      box-shadow: 0 4px 8px ${COLORS.GREY};
    }
    `
      : `box-shadow: 0 4px 8px ${COLORS.GREY};`}
`;

const ChildWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
