/* eslint-disable react/prop-types */
import _ from 'lodash';
import React from 'react';
import PropTypes from 'react-peek/prop-types';
import { lucidClassNames } from '../../util/style-helpers';
import {
	FC,
	getFirst,
	omitProps,
	StandardProps,
} from '../../util/component-types';
import LoadingIcon from '../Icon/LoadingIcon/LoadingIcon';

const cx = lucidClassNames.bind('&-LoadingMessage');

const { any, node, string } = PropTypes;

interface ILoadingMessageIconProps extends StandardProps {
	description?: string;
}
const LoadingMessageIcon: FC<ILoadingMessageIconProps> = (): null => null;
LoadingMessageIcon.displayName = 'LoadingMessage.Icon';
LoadingMessageIcon.peek = {
	description: `
		Renders the \`Icon\` element passed in
	`,
};
LoadingMessageIcon.propName = 'Icon';
LoadingMessageIcon.propTypes = {
	description: string,
	children: any,
};

interface ILoadingMessageTitleProps extends StandardProps {
	description?: string;
}
const LoadingMessageTitle: FC<ILoadingMessageTitleProps> = (): null => null;
LoadingMessageTitle.displayName = 'LoadingMessage.Title';
LoadingMessageTitle.peek = {
	description: `
		Renders an \`<h3>\` that represents the title of the
		\`LoadingMessage\`.  Defaults to the string "Loading".
	`,
};
LoadingMessageTitle.propName = 'Title';
LoadingMessageTitle.propTypes = {
	description: string,
	children: any,
};

interface ILoadingMessageBodyProps extends StandardProps {
	description?: string;
}
const LoadingMessageBody: FC<ILoadingMessageBodyProps> = (): null => null;
LoadingMessageBody.displayName = 'LoadingMessage.Body';
LoadingMessageBody.peek = {
	description: `
		Renders an \`<span>\` that represents the body of the
		\`LoadingMessage\`.
	`,
};
LoadingMessageBody.propName = 'Body';
LoadingMessageBody.propTypes = {
	description: string,
	children: any,
};

export interface ILoadingMessageProps
	extends StandardProps,
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		> {
	/** Custom Icon element (alias for `LoadingMessage.Icon`) */
	Icon?: React.ReactNode;

	/** Custom Title element (alias for `LoadingMessage.Title`) */
	Title?: React.ReactNode;

	/** Custom Body element (alias for `LoadingMessage.Body`) */
	Body?: React.ReactNode;
}

export interface ILoadingMessageFC extends FC<ILoadingMessageProps> {
	Icon: FC<ILoadingMessageIconProps>;
	Title: FC<ILoadingMessageTitleProps>;
	Body: FC<ILoadingMessageBodyProps>;
}

export const LoadingMessage: ILoadingMessageFC = (props): React.ReactElement => {
	const { className, ...passThroughs } = props;
	const { Icon, Title, Body } = LoadingMessage;

	const defaultTitle = 'Loading';
	const iconElement = getFirst(props, Icon);
	const iconChildren = _.get(iconElement, 'props.children', <LoadingIcon />);
	const titleElement = getFirst(props, Title);
	const titleChildren = _.get(titleElement, 'props.children');
	const bodyElement = getFirst(props, Body);
	const bodyChildren = _.get(bodyElement, 'props.children', null);

	return (
		<div
			{...omitProps(passThroughs, undefined, _.keys(LoadingMessage.propTypes))}
			className={cx(
				'&',
				{ '&-no-content': _.isNull(titleChildren) && !bodyChildren },
				className
			)}
		>
			{iconChildren}
			{!_.isNull(titleChildren) && (
				<h3 className={cx('&-title')}>{titleChildren || defaultTitle}</h3>
			)}
			{bodyChildren && <span className={cx('&-body')}>{bodyChildren}</span>}
		</div>
	);
};

LoadingMessage.Icon = LoadingMessageIcon;
LoadingMessage.Title = LoadingMessageTitle;
LoadingMessage.Body = LoadingMessageBody;

LoadingMessage._isPrivate = true;
LoadingMessage.displayName = 'LoadingMessage';
LoadingMessage.peek = {
	description: `
		A loading message.
	`,
	categories: ['communication'],
	madeFrom: ['LoadingIcon'],
};
LoadingMessage.propTypes = {
	className: string`
		Class names that are appended to the defaults.
	`,

	children: node`
		Any valid React children.
	`,

	Icon: node`
		Custom Icon element (alias for \`LoadingMessage.Icon\`)
	`,

	Title: node`
		Custom Title element (alias for \`LoadingMessage.Title\`)
	`,

	Body: node`
		Custom Body element (alias for \`LoadingMessage.Body\`)
	`,
};

export default LoadingMessage;
