<template>
    <header class="ui-header">
      <div class="ui-row-flex">
        <div class="ui-col">
          <a href="http://m.baidu.com">
            首页
          </a>
        </div>
        <div class="ui-col ui-col-4 txt-center">登录</div>
        <div class="ui-col txt-right"><router-link to="register">注册</router-link></div>
      </div>
    </header>
</template>

<style lang='scss'>
  @function toRem($value) {
    @return $value / 37.5px * 1rem
  }
    .ui-header {
      position: fixed;
      width: 100%;
      z-index: 100;
      left: 0;
    }

    .ui-header {
      top: 0;
    }

    .ui-header {
      height: toRem(88px);
      padding: 0 toRem(20px);
      box-sizing: border-box;
      border-bottom: 1px solid #e4e3e8;
      background: #fff;
      line-height: toRem(88px);
      color: #42414f;
      font-size: toRem(42px);
      position: absolute;
    }

    .ui-row-flex {
      webkit-box-sizing: border-box;
      display: -webkit-box;
      width: 100%;
      .ui-col {
        float: none;
        -webkit-box-flex: 1;
        width: 0;
        box-sizing: border-box;
      }
    }
</style>
