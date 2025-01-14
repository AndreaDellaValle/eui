/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { fireEvent } from '@testing-library/react';
import { waitForEuiToolTipVisible } from '../../../test/rtl';
import { shouldRenderCustomStyles } from '../../../test/internal';

import { EuiSuperUpdateButton } from './super_update_button';
import { EuiButton, EuiButtonProps } from '../../button';

const noop = () => {};

describe('EuiSuperUpdateButton', () => {
  shouldRenderCustomStyles(<EuiSuperUpdateButton onClick={noop} />);
  shouldRenderCustomStyles(
    <EuiSuperUpdateButton
      onClick={noop}
      data-test-subj="trigger"
      showTooltip
      needsUpdate
      toolTipProps={{ children: <>Test</>, delay: 'regular', position: 'top' }} // React throws a `Failed prop type` error without this
    />,
    {
      childProps: ['toolTipProps'],
      skipParentTest: true,
      renderCallback: async ({ getByTestSubject }) => {
        fireEvent.mouseOver(getByTestSubject('trigger'));
        await waitForEuiToolTipVisible();
      },
    }
  );

  test('is rendered', () => {
    const component = shallow(<EuiSuperUpdateButton onClick={noop} />);

    expect(component).toMatchSnapshot();
  });

  test('needsUpdate', () => {
    const component = shallow(
      <EuiSuperUpdateButton needsUpdate onClick={noop} />
    );

    expect(component).toMatchSnapshot();
  });

  test('isDisabled', () => {
    const component = shallow(
      <EuiSuperUpdateButton isDisabled onClick={noop} />
    );

    expect(component).toMatchSnapshot();
  });

  test('isLoading', () => {
    const component = shallow(
      <EuiSuperUpdateButton isLoading onClick={noop} />
    );

    expect(component).toMatchSnapshot();
  });

  test('iconOnly', () => {
    const component = shallow(<EuiSuperUpdateButton iconOnly onClick={noop} />);

    expect(component).toMatchSnapshot();
  });

  test('showTooltip', () => {
    const component = shallow(
      <EuiSuperUpdateButton showTooltip onClick={noop} />
    );

    expect(component).toMatchSnapshot();
  });

  test('responsive can be all', () => {
    const component = shallow(
      <EuiSuperUpdateButton
        responsive={['xs', 's', 'm', 'l', 'xl']}
        onClick={noop}
      />
    );

    expect(component).toMatchSnapshot();
  });

  test('responsive can be false', () => {
    const component = shallow(
      <EuiSuperUpdateButton responsive={false} onClick={noop} />
    );

    expect(component).toMatchSnapshot();
  });

  test('forwards props to EuiButton', () => {
    const speciallyHandledProps = {
      className: 'testClass',
      textProps: {
        className: 'textPropsTestClass',
        id: 'test',
      },
    };
    const extraProps: Partial<EuiButtonProps> = {
      fill: false,
      size: 's',
      contentProps: { id: 'contentSpan' },
    };

    const component = mount(
      <EuiSuperUpdateButton
        onClick={() => {}}
        {...speciallyHandledProps}
        {...extraProps}
      />
    );

    const {
      // props not passed through
      isDisabled,
      isLoading,
      onClick,

      // props with special handling
      className,
      textProps,

      ...forwardedProps
    } = component.find(EuiButton).props();

    expect(className).toBe('euiSuperUpdateButton testClass');
    expect(textProps).toEqual({
      className: 'textPropsTestClass',
      id: 'test',
    });
    expect(forwardedProps).toMatchObject(extraProps);
  });
});
