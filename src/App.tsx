import { OreId } from "oreid-js";
import { OreidProvider, useIsLoggedIn, useUser } from "oreid-react";
import { WebPopup } from "oreid-webpopup";
import React, { useEffect, useState } from "react";
import "./App.scss";
import { AtomicHub } from "./AtomicHub";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LoginPage } from "./LoginPage";

const REACT_APP_OREID_APP_ID = "t_4683afc074ab444ebdf1bf08ed8d1757";

// * Initialize OreId
const oreId = new OreId({
	appName: "ORE ID Sample App",
	appId: REACT_APP_OREID_APP_ID,
	oreIdUrl: "https://staging.service.oreid.io",
	plugins: {
		popup: WebPopup(),
	},
});

// @ts-ignore
window.oreId = oreId;
// @ts-ignore
window.accessToken =
	"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkM0N0I2NUI4OTNBRTEwN0ExNkE5MTQ0Njk2ODBCMDVEREVGQjFEMjcifQ.eyJpc3MiOiJodHRwczovL29yZWlkLmlvLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA1NzQxNzExNDM3MTYwOTkzOTQxIiwiYXVkIjpbImh0dHBzOi8vc3RhZ2luZy5zZXJ2aWNlLm9yZWlkLmlvIiwiaHR0cHM6Ly9zdGFnaW5nLnNlcnZpY2Uub3JlaWQuaW8vdXNlcmluZm8iLCJodHRwczovL29yZWlkLmFpa29uLmNvbSIsImh0dHBzOi8vYWlrb24uYXV0aDAuY29tL3VzZXJpbmZvIl0sImF6cCI6InRfNDY4M2FmYzA3NGFiNDQ0ZWJkZjFiZjA4ZWQ4ZDE3NTciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIHBob25lIiwiaHR0cHM6Ly9vcmVpZC5haWtvbi5jb20vYXBwSWQiOiJ0XzQ2ODNhZmMwNzRhYjQ0NGViZGYxYmYwOGVkOGQxNzU3IiwiaHR0cHM6Ly9vcmVpZC5haWtvbi5jb20vcHJvdmlkZXIiOiJnb29nbGUiLCJodHRwczovL29yZWlkLmFpa29uLmNvbS9hY2NvdW50Ijoib3JlMXQyc3djNHpuIiwiaHR0cHM6Ly9vcmVpZC5haWtvbi5jb20vYWRtaW5TZXJ2aWNlIjoiYWlrb24tYWRtaW4iLCJpYXQiOjE2NTYzNDE5MzMsImV4cCI6OTk1NjQyODMzM30.GPd7uXVWGy6539KC5Eqq4Db3dOX5pFfvwRHFA4w_gAAyhWAyz1zX0GjGArlPzURtHwBSb4vQgYK4mi_UYlA8jQmKJRuQfkrBmvDvlZJnuEi0gZwGRyMoRm3rQ5HEWfMBdNVbI7SArrgigy2uHa6rI-AdAFHgFxkg7FIvS0fRFNe1ZdARcx1Kqwjjaxiy2WPL4qzke6_SKY7bHwnqS_WtWsgglSKg1kr3hQTIAepnIsxtn0EFNhsQPr5irqER-E5Hs-jnEmYk_C0bH9MJX2-yDLzHlvS62BZyYzGDfZDZHdAJVNv--Z4XJPWvF5mjpOTyO75YLPf5aLqghGzzP9uMEw";
// @ts-ignore
window.accessToken2 =
	"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkM0N0I2NUI4OTNBRTEwN0ExNkE5MTQ0Njk2ODBCMDVEREVGQjFEMjcifQ.eyJpc3MiOiJodHRwczovL29yZWlkLmlvLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA1NzQxNzExNDM3MTYwOTkzOTQxIiwiYXVkIjpbImh0dHBzOi8vc3RhZ2luZy5zZXJ2aWNlLm9yZWlkLmlvIiwiaHR0cHM6Ly9zdGFnaW5nLnNlcnZpY2Uub3JlaWQuaW8vdXNlcmluZm8iLCJodHRwczovL29yZWlkLmFpa29uLmNvbSIsImh0dHBzOi8vYWlrb24uYXV0aDAuY29tL3VzZXJpbmZvIl0sImF6cCI6InRfNDY4M2FmYzA3NGFiNDQ0ZWJkZjFiZjA4ZWQ4ZDE3NTciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIHBob25lIiwiaHR0cHM6Ly9vcmVpZC5haWtvbi5jb20vYXBwSWQiOiJ0XzQ2ODNhZmMwNzRhYjQ0NGViZGYxYmYwOGVkOGQxNzU3IiwiaHR0cHM6Ly9vcmVpZC5haWtvbi5jb20vcHJvdmlkZXIiOiJnb29nbGUiLCJodHRwczovL29yZWlkLmFpa29uLmNvbS9hY2NvdW50Ijoib3JlMXQyc3djNHpuIiwiaHR0cHM6Ly9vcmVpZC5haWtvbi5jb20vYWRtaW5TZXJ2aWNlIjoiYWlrb24tYWRtaW4iLCJpYXQiOjE2NTYzNDE5MzMsImV4cCI6MTY1NjQyODMzM30.kZu5_D5TEGYbLj2scy9X2TlMxpFACR9yvVWujhj4WgvQp3x-eND3LKa41PuJhLZO7H6evz9mv5FO6lezQgGSmdK-01YOWC5ucC8jp1Pb8RIL2eOiblLuxtq4XYBkixGUasWksZ2QCi4LlkiuzP5vNjgDk6Jw0AzRLh47eolVtFwuK3DH63QK-S_W6WEj7ONS5NiY4-i5Dr8icj48fv12epQcxbLWd0jydpeKBj-pBEbqG762vAEdd2Rh6fhFgD4_7Gh77sbPZdLtfnQ__e5WTVyPauKzbHxpdTqsqEbqYcNMrBFWnsGq6GfE-mOrS3kOwKlqnUEXjvbsp4Q6teKpBWKO0ir7VCtX9M9Tgqp-IjLUdHFJM1Vbcsmpsy7nircX31X4pMeO7VuZGWMoVnFCuMoVdZi6FABvEdyQiUkOeRroG0ElqC2YvhWLocnlSvSWSrcsKtu_owsn6n9L0jwG8VlHUQ3VOeceiP9zoeQfGEd7FDuOLhgUkhPHn_EiMpsDa3pR7KMZ335oFRpjvTAsH2tEbQH-dxdAUtIf3mC87houJhoUub_g4dCPQBPjcM2wbXMKQj4s8eyamU_q_nuoh_fTrxYGfQSnLWomuD-LHWRQhpIEVwfQC6UpJHAgf6v69EIATDjXu4AY2QWKJ72f3I4O1IGjAKRfqhn7fLCcb0I";

const LoggedInView: React.FC = () => {
	const user = useUser();
	if (!user) return null;
	return <AtomicHub />;
};

const AppWithProvider: React.FC = () => {
	const isLoggedIn = useIsLoggedIn();
	return (
		<div className="App">
			<Header />
			{isLoggedIn ? <LoggedInView /> : <LoginPage />}
			<Footer />
		</div>
	);
};

export const App: React.FC = () => {
	const [oreidReady, setOreidReady] = useState(false);

	useEffect(() => {
		oreId.init().then(() => {
			setOreidReady(true);
		});
	}, []);

	if (!oreidReady) {
		return <>Loading...</>;
	}

	return (
		<OreidProvider oreId={oreId}>
			<AppWithProvider />
		</OreidProvider>
	);
};
