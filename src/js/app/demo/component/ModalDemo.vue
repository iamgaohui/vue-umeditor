<template>
  <div id="J_EditEntityModal" class="modal fade" data-backdrop="static">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
          <h4 class="modal-title">编辑测试</h4>
        </div>
        <div class="modal-body">
          <div class="loading" style="height:100px;" v-if="isLoading"></div>
          <form class="form-horizontal" v-else>

            <div class="form-group form-group-sm has-feedback">
              <div class="col-sm-12">
                <input type="text" class="form-control"
                       v-model="data.title">
                <span class="form-control-feedback input-length-counter">{{ data.title.length }} / 50</span>
              </div>
            </div>

            <div class="form-group form-group-sm">
              <div class="col-sm-12">
                <u-meditor :content="data.content"
                          :config="ue.config"
                          :toolbar="ue.toolbar"
                          ref="ueditor"></u-meditor>
              </div>
            </div>

          </form>
          <div class="alert alert-danger clearfix mb5 mt20" v-if="hasError">
            <div class="pull-left pr5">
              <i class="glyphicon glyphicon-exclamation-sign mr5"></i>错误：
            </div>
            <p class="pull-left alert-message">{{ message }}</p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="save">保存</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import UMeditor from '../../../../../src/component/UMeditor.vue';

  export default {
    components: {
      UMeditor
    },
    data () {
      return {
        data: {
          title: '',
          content: ''
        },
        isLoading: false,
        hasError: false,
        message: '',
        ue: {
          config: { // 配置项
            maximumWords: 200,
            initialFrameHeight: 150
          },
          toolbar: [] // 工具栏设置，非空则完全覆盖默认工具栏
        }
      };
    },
    methods: {
      reset () {
        this.hasError = false;

        Object.assign(this.data, {
          title: '',
          content: ''
        });
      },
      init () {
        let _this = this;

        this.reset();

        $('#J_EditEntityModal').modal('show');

        $.ajax({
          type: 'GET',
          url: '/api/getInfo',
          data: {},
          beforeSend () {
            _this.isLoading = true;
          },
          complete () {
            _this.isLoading = false;
          },
          success (res) {
            if (res.status) {
              Object.assign(_this.data, res.data)
            } else {
              _this.hasError = true;
              _this.message = res.message;
            }
          },
          error (err) {
            _this.hasError = true;
            _this.message = JSON.stringify(err, null, '\t');
          }
        });
      },
      save () {
        let data = JSON.parse(JSON.stringify(this.data));

      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .input-length-counter {
    width: auto !important;
    color: #9f9f9f;
    text-align: right;
  }
</style>
