import loadable from 'react-loadable';
import LoadingIndicator from '../../components/LoadingIndicator';

export default loadable({
  loader: () => import('./Terms'),
  loading: LoadingIndicator,
});