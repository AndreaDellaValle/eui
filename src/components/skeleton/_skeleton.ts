/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { useEuiI18n } from '../i18n';

export const useLoadingAriaAttributes = () => {
  const defaultLabel = useEuiI18n('euiSkeleton.ariaLabel', 'Loading');

  return {
    'aria-busy': true,
    'aria-label': defaultLabel,
    role: 'progressbar',
  };
};
