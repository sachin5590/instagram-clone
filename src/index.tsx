import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import './styles/output.css';
// Using Redux
import store from './app/redux/store';

const Root: React.FC = (): JSX.Element => {
	return <Provider store={store.getStore()}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>;
};

ReactDOM.render(<Root />, document.getElementById('app'));
