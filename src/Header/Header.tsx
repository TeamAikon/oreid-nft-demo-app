import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import { OreIdProfileButton } from "oreid-profile";

import style from "./Header.module.scss";
import { useOreId } from "oreid-react";

export const Header: React.FC = () => {
	const oreId = useOreId();
	console.log(oreId.auth.accountName)
	return (
		<header className={style.Header}>
			<div className={style.content}>
				<a href="https://developer.oreid.io/">
					<Logo />
				</a>
				<div>
					<OreIdProfileButton
						align="right"
						oreId={oreId}
						style={{
							backgroundColor: "#151F44",
							linkColor: "#0AB7E7",
							textColor: "#fff",
						}}
					/>
				</div>
			</div>
		</header>
	);
};
