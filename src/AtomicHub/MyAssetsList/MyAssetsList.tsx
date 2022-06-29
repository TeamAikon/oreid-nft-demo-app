import React from "react";
import { AtomicHubAssets } from "../AtomicHubTypes";
import { ClaimMyToken } from "../ClaimMyToken";
import { DisplayAssets } from "../DisplayAssets";
import { SellOrCancelButtom } from "../SellOrCancelButtom";

import styles from "./MyAssetsList.module.scss";

interface Props {
	account: string;
	assets: AtomicHubAssets[];
	loadMyAssets: () => void;
}
export const MyAssetsList: React.FC<Props> = ({
	account,
	assets,
	loadMyAssets,
}) => {
	if (assets.length === 0) {
		return <ClaimMyToken loadMyAssets={loadMyAssets} />;
	}
	return (
		<div className={styles.MyAssetsList}>
			<h2>My NFTs on NFT Marketplace</h2>
			<div className={styles.list}>
				{assets.map((asset) => (
					<DisplayAssets
						key={asset.asset_id}
						asset={asset}
						footer={<SellOrCancelButtom asset={asset} />}
					/>
				))}
			</div>
			<div className={styles.SeeOnAtomicHub}>
				<a
					href={`https://wax-test.atomichub.io/profile/${account}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					See on NFT Marketplace
				</a>
			</div>
		</div>
	);
};
