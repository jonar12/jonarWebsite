import styled from 'styled-components';

const NavbarWrapper = styled.div`
	border: 1px solid black;
	padding: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const Link = styled.a`
	color: hsl(208, 100%, 97%);
	margin-left: 16px;
`;

const Links = styled.div`
	border: 1px solid red;
`;

function Navbar({ links }) {
	return (
		<NavbarWrapper>
			<span>😀 Jonathan Arredondo</span>
			<Links>
				{links.map(link => (
					<Link href={link.href}>{link.title}</Link>
				))}
			</Links>
		</NavbarWrapper>
	);
}

function Drawer({ links }) {
	return null;
}

export function Navigation({ links }) {
	return (
		<>
			<Navbar links={links} />
			<Drawer links={links} />
		</>
	);
}
