// .storybook/preview.js

import React from "react";
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../src/utils/themes';
import { GlobalStyles } from '../src/components';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
		default: 'light',
		values: [
		{
			name: 'Light',
			value: '#ffffff',
		},
		{
			name: 'Dark',
			value: '#272727',
		},
		],
	},
  layout: ["fullscreen"],
	options: {
		storySort: {
			order: ['Introduction', ['Intro', 'ReleaseNotes'], 'Styles', ['Colors', 'Typography'], 'Atoms', 'Molecules', 'Layout', 'Wrappers'],
		},
	},
}