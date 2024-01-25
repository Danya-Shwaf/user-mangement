import { FC } from 'react';
import { Outlet } from 'react-router-dom';
interface AppProps {}
const App: FC<AppProps> = ({}) => {
	
	return (
		<>
			<Outlet></Outlet>
		</>
	);
};
export default App;
