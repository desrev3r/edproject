import store from './../store/store';

const listen = () => store.getState();
const reduxStateService = {
  listen,
}

store.subscribe(listen);
export default reduxStateService;
