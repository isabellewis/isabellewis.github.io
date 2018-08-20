import React from 'react';
import styled from 'styled-components';

import { SectionHeading, ShortCopy } from '../../elements';

const CVWrapper = styled.div`
  min-height: 100%;
  padding: 30px 0;
`;

export const CVPanel = () => (
  <CVWrapper id="cvPanel">
    <SectionHeading title="CV" />
    <ShortCopy shortCopyText="I have much experience" />
  </CVWrapper>
);
