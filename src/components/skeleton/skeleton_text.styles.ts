/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { css } from '@emotion/react';
import { euiCanAnimate, logicalCSS } from '../../global_styling';
import { euiAnimSkeletonGradient } from '../../global_styling/utility/animations';
import { COLOR_MODES_STANDARD, shade, tint, UseEuiTheme } from '../../services';

export const euiSkeletonCommonStyles = ({
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
    euiSkeleton__text: css`
      display: block;
      ${logicalCSS('width', '100%')}
      ${logicalCSS('height', euiTheme.size.base)}
      border-radius: ${euiTheme.border.radius.medium};
      background: ${gradientStartStop};
      overflow: hidden;

      &:not(:last-child) {
        ${logicalCSS('margin-bottom', euiTheme.size.s)}
      }

      &:last-child:not(:only-child) {
        ${logicalCSS('width', '75%')}
      }

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
          animation: ${euiAnimSkeletonGradient} 1.5s
            ${euiTheme.animation.resistance} infinite;
        }
      }
    `,
  };
};
