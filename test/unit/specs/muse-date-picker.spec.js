import { createTest, destroyVM } from '../util';
import MuseDatePicker from 'packages/muse-date-picker';

describe('MuseDatePicker', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(MuseDatePicker, true);
    expect(vm.$el).to.exist;
  });
});

