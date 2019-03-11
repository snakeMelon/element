## MuseTimePicker 'muse时间选择器'

:::demo
```html
<el-form :model="clockForm" label-width="90px">
    <el-form-item label="显示时间：">
         <el-switch v-model="clockForm.display"></el-switch>
    </el-form-item>
    <el-form-item label="横屏显示：">
             <el-switch v-model="clockForm.landscape"></el-switch>
    </el-form-item>
     <el-form-item label="时间类型：">
        <el-radio-group v-model="clockForm.type">
          <el-radio label="ampm"></el-radio>
          <el-radio label="24hr"></el-radio>
        </el-radio-group>
      </el-form-item>
     <el-form-item label="选择模式：">
        <el-radio-group v-model="clockForm.viewType">
          <el-radio label="clock"></el-radio>
          <el-radio label="list"></el-radio>
        </el-radio-group>
      </el-form-item>
</el-form>
<div style="margin:20px 0;">选择的时间：{{selectedTime}}</div>

<el-muse-time-picker :no-display="!clockForm.display" 
                      :view-type="clockForm.viewType" 
                      :time.sync="clockForm.time" 
                      :format="clockForm.type" 
                      :landscape="clockForm.landscape"
                      @change="showTime">
</el-muse-time-picker>



<script>
  export default {
    data() {
      return {
        clockForm:{
            time: undefined,
            landscape: true,
            display: true,
            type: 'ampm',
            viewType: 'clock'
        },
        selectedTime: new Date(),
      };
    },
    methods:{
      showTime(time){
        this.selectedTime = time;
      }
    }
  }
</script>
```
:::


### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| color   | 时间选择器颜色 | String | — | — |
| display-color     | 时间显示区域背景色| string    | — | — |
| time     | 选择的时间，支持.sync修饰符 | Date    | — | new Date() |
| format     | 日期模式 | String    | ampm/24hr | ampm |
| view-type       | 时间选择模式 | String | clock/list | clock |
| no-display     | 是否不存在时间显示部分   | Boolean   | — | false |
| landscape     | 是否横屏显示   | Function   | — | — |


### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当选择日期改变时触发事件 | （time,mode,finished） |
