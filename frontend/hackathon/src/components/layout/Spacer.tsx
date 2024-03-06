import styled from 'styled-components';

const Spacer = styled.div<{ width?: number; height?: number }>`
  height: ${(p) => p.height ?? 4}px;
  width: ${(p) => p.width ?? 4}px;
`;

export default Spacer;
