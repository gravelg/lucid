import _ from 'lodash';
import React from 'react';
import Icon, { IIconProps, propTypes as iconPropTypes } from '../Icon';
import { lucidClassNames } from '../../../util/style-helpers';
import { omitProps } from '../../../util/component-types';

const cx = lucidClassNames.bind('&-CrownIcon');

interface ICrownIconProps extends IIconProps {}

export const CrownIcon = ({ className, ...passThroughs }: ICrownIconProps) => {
	return (
		<Icon
			{...omitProps(
				passThroughs,
				undefined,
				_.keys(CrownIcon.propTypes),
				false
			)}
			{..._.pick(passThroughs, _.keys(iconPropTypes))}
			className={cx('&', className)}
		>
			<path d='M1.5 14.5h13' />
			<path d='M1.5 11.5h13l1-8-4 2L8 .5l-3.5 5-4-2z' />
		</Icon>
	);
};

CrownIcon.displayName = 'CrownIcon';
CrownIcon.peek = {
	description: `
		A crown icon, used for indicating super or admin users.
	`,
	categories: ['visual design', 'icons'],
	extend: 'Icon',
	madeFrom: ['Icon'],
};
CrownIcon.propTypes = iconPropTypes;
CrownIcon.defaultProps = Icon.defaultProps;

export default CrownIcon;
