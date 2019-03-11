import { createTest, destroyVM } from '../util';
import MuseTimePicker from 'packages/muse-time-picker';

describe('MuseTimePicker', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(MuseTimePicker, true);
    expect(vm.$el).to.exist;
  });
});

