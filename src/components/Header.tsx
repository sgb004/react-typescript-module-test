import React, { FC, ReactElement } from 'react';

interface HeaderProps {
	name: string;
	children?: ReactElement;
}

const Header: FC<HeaderProps> = ({ name, children }) => {
	return (
		<header className="header">
			<h1>Hello {name}</h1>
			{children}
		</header>
	);
};

export default Header;
