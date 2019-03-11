// import MuseDatePicker from './src/main';
import MuseDatePicker from '../muse-time-picker/src/DatePicker';

/* istanbul ignore next */
MuseDatePicker.install = function(Vue) {
  Vue.component(MuseDatePicker.name, MuseDatePicker);
};

export default MuseDatePicker;
