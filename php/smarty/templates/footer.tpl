  <div class="col p-0" id="main">

    <div id="editor" class="row m-0 h-100 position-relative">
      <div class="col p-0" id="editor-code">
        <textarea :value="input" @input="updateEditor" id="markdown-edit" class="w-100 h-100"></textarea>
      </div>
      <div v-html="compiledMarkdown" class="col" id="markdown-view"></div>
      <div class="position-absolute" id="editor-operation">
        <span class="iconfont" :class="{ 'icon-circle':isCircle,'icon-circle-inner':isCircleInner}" @click="changeCircle"></span>
        <span class="iconfont" :class="{ 'icon-code':isCode,'icon-code3':isCode3}" @click="changeCode"></span>
      </div>
    </div>

  </div>


  </div>
  </div>
  <div id="footer" class="container-fluid bg-dark fixed-bottom">
    <div class="row">

      <div class="col-md-6">
        <p class="m-0 text-white">
          ©2012-{$year}

          <a href="" class="text-white" title="Readme.md" data-toggle="tooltip" data-placement="top">mrg123.com</a>
          All rights reserved.
        </p>
      </div>
      <div class="col-md-4 offset-md-2 text-right">
        <p class="m-0 text-white" id="cookies-right">This website uses cookies.
          <a href="" class="text-white" data-toggle="tooltip" data-placement="top"
            title="More details of cookies">Details</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button class="btn m-0 rounded-0 btn-primary btn-sm border-0" id="use-cookies">Okay</button>
        </p>
      </div>




    </div>
  </div>

  <script src="/theme/one/jquery/common.js"></script>
  <script>
  Vue.config.devtools = true;
    var vm = new Vue({
      el: '#editor',
      data: {
        input: '{$data}',
        isCircle: true,
        isCode:true
      },
      computed: {
        compiledMarkdown: function () {
          /** 
          TODO 使用DOMPurify
          var config = { KEEP_TEXT: true}; 
          var clean = DOMPurify.sanitize(this.input);
          console.log(this.input);
          console.log(clean);
          */

          return marked(this.input);
        },
        isCircleInner: function(){
          return !this.isCircle;
        },
        isCode3:function(){
          return !this.isCode;
        }
      },
      methods: {
        updateEditor: _.debounce(function (e) {
          this.input = e.target.value
        }, 300),
        changeCircle: function(){
          this.isCircle = !this.isCircle;
        },
        changeCode: function(){
          this.isCode = !this.isCode;
          $('#editor-code').toggle();
        }
        
      }
    });


   
  </script>

  </body>

  </html>