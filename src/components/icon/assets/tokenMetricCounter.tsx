/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

// THIS IS A GENERATED FILE. DO NOT MODIFY MANUALLY. @see scripts/compile-icons.js

import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const EuiIconTokenMetricCounter = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11 3a1 1 0 00-1 1v1H9a1 1 0 000 2h1v1a1 1 0 102 0V7h1a1 1 0 100-2h-1V4a1 1 0 00-1-1zM5 7a1 1 0 00-1 1v1H3a1 1 0 000 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2H6V8a1 1 0 00-1-1z" />
  </svg>
);

export const icon = EuiIconTokenMetricCounter;
