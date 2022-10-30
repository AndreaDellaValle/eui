/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { css, keyframes } from '@emotion/react';
import { euiCanAnimate, logicalCSS } from '../../global_styling';
import { COLOR_MODES_STANDARD, shade, tint, UseEuiTheme } from '../../services';

const loadingContentGradient = keyframes`
  0% {
    transform: translateX(-53%);
  }

  100% {
    transform: translateX(0);
  }
`;

export const euiSkeletonStyles = ({
  euiTheme,
  colorMode,
}: UseEuiTheme) => {
  const gradientStartStop =
    colorMode === COLOR_MODES_STANDARD.dark
      ? shade(euiTheme.colors.lightShade, 0.12)
      : tint(euiTheme.colors.lightShade, 0.65);
  const gradientMiddle =
    colorMode === COLOR_MODES_STANDARD.dark
      ? shade(euiTheme.colors.lightShade, 0.24)
      : tint(euiTheme.colors.lightShade, 0.8);

  return {
    euiSkeleton: css`
      display: block;
      background: ${gradientStartStop};
      overflow: hidden;

      &::after {
        content: '';
        display: block;
        ${logicalCSS('width', '220%')}
        ${logicalCSS('height', '100%')}
        background: linear-gradient(
          137deg,
          ${gradientStartStop} 45%,
          ${gradientMiddle} 50%,
          ${gradientStartStop} 55%
        );

        ${euiCanAnimate} {
          animation: ${loadingContentGradient} 1.5s
            ${euiTheme.animation.resistance} infinite;
        }
      }
    `,
    // Sizes
    s: css`
      ${logicalCSS('width', euiTheme.size.l)};
      ${logicalCSS('height', euiTheme.size.l)};
      border-radius: 50%;
    `,
    m: css`
      ${logicalCSS('width', euiTheme.size.xl)};
      ${logicalCSS('height', euiTheme.size.xl)};
      border-radius: 50%;
    `,
    l: css`
      ${logicalCSS('width', euiTheme.size.xxl)};
      ${logicalCSS('height', euiTheme.size.xxl)};
      border-radius: 50%;
    `,
    xl: css`
      ${logicalCSS('width', `calc(${euiTheme.size.base} * 4)`)};
      ${logicalCSS('height', `calc(${euiTheme.size.base} * 4)`)};
      border-radius: 50%;
    `,
  };
};
