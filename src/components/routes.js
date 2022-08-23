import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/constants';
import Chat from './Chat';
import Login from './Login';

export const publicRoutes = [{ path: LOGIN_ROUTE, element: <Login /> }];
export const privateRoutes = [{ path: CHAT_ROUTE, element: <Chat /> }];
