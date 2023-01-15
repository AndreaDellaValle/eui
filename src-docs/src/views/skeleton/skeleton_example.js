import React from 'react';

import { GuideSectionTypes } from '../../components';
import {
  EuiCode,
  EuiText,
  EuiSkeletonHeading,
  EuiSkeletonText,
  EuiSkeletonItem,
  EuiSkeletonCircle,
} from '../../../../src/components';

import { skeletonConfig } from './playground';

import SkeletonCircle from './skeleton_circle';
const skeletonCircleSource = require('!!raw-loader!./skeleton_circle');

import SkeletonText from './skeleton_text';
const skeletonTextSource = require('!!raw-loader!./skeleton_text');

import SkeletonHeading from './skeleton_heading';
const skeletonHeadingSource = require('!!raw-loader!./skeleton_heading');

import SkeletonItem from './skeleton_item';
const skeletonItemSource = require('!!raw-loader!./skeleton_item');

const skeletonCircleSnippet = '<EuiSkeletonCircle size="m" />';
const skeletonTextSnippet = '<EuiSkeletonText lines={3} />';
const skeletonHeadingSnippet = '<EuiSkeletonHeading size="h2" />';
const skeletonItemSnippet = '<EuiSkeletonItem width="200px" height="20px" radius="m" />';

export const SkeletonExample = {
  title: 'Skeleton',
  intro: (
    <EuiText>
      <p>
        The <strong>EuiSkeleton</strong> it's a placeholder component for content which hasn't yet loaded,
        in order to provide a meaningful preview and avoid layout content shifts.
      </p>
    </EuiText>
  ),
  sections: [
    {
      title: 'Circle',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: skeletonCircleSource,
        },
      ],
      text: (
        <EuiText>
          <p>
            Use the <strong>EuiSkeletonCircle</strong> to display a circular preview mainly for avatars.
          </p>
        </EuiText>
      ),
      props: { EuiSkeletonCircle },
      snippet: skeletonCircleSnippet,
      demo: (
        <div className="guideDemo__highlightSkeleton__circle">
          <SkeletonCircle />
        </div>
      ),
    },
    {
      title: 'Text',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: skeletonTextSource,
        },
      ],
      text: (
        <EuiText>
          <p>
            Use the <strong>EuiSkeletonText</strong> to display a placeholder for multiple lines of text.
          </p>
        </EuiText>
      ),
      props: { EuiSkeletonText },
      snippet: skeletonTextSnippet,
      demo: (
        <div className="guideDemo__highlightSkeleton__text">
          <SkeletonText />
        </div>
      ),
    },
    {
      title: 'Heading',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: skeletonHeadingSource,
        },
      ],
      text: (
        <EuiText>
          <p>
            Use <strong>EuiSkeletonTitle</strong> to display a placeholder for heading texts.
          </p>
        </EuiText>
      ),
      props: { EuiSkeletonHeading },
      snippet: skeletonHeadingSnippet,
      demo: (
        <div className="guideDemo__highlightSkeleton__heading">
          <SkeletonHeading />
        </div>
      ),
    },
    {
      title: 'Item',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: skeletonItemSource,
        },
      ],
      text: (
        <EuiText>
          <p>
            The <strong>Item</strong> type let you free to define whatever shape you want to mock with a skeleton by defining <EuiCode>width</EuiCode> <EuiCode>height</EuiCode> and <EuiCode>radius</EuiCode>.
          </p>
        </EuiText>
      ),
      props: { EuiSkeletonItem },
      snippet: skeletonItemSnippet,
      demo: (
        <div className="guideDemo__highlightSkeleton__item">
          <SkeletonItem />
        </div>
      ),
    },
  ],
};
