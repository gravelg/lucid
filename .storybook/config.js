import { addParameters, configure } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { create } from '@storybook/theming';
import 'storybook-chromatic';
import { getPropDefs } from './lucid-docs-addon/util';

function loadStories() {
	require('../docs/index.stories.js');
}

const lucidTheme = create({
	base: 'light',

	brandTitle: 'Lucid UI',
	brandUrl: 'https://github.com/appnexus/lucid',
	brandImage: 'logo.svg',
});

addParameters({
	options: {
		theme: lucidTheme,
		showNav: true,
		isToolshown: true,
		showPanel: false,
		panelPosition: 'right',
	},
	docs: {
		container: DocsContainer,
		page: DocsPage,
		getPropDefs,
	},
});

configure(loadStories, module);
