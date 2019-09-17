  </div>
</div>
<div id="footer" class="container-fluid bg-dark fixed-bottom">
    <div class="row">

    <div class="col-md-6">
            <p class="m-0 text-white">
            ©2012-{$year}  
            
            <a href="" class="text-white" title="Readme.md" data-toggle="tooltip" data-placement="top" >mrg123.com</a>
            All rights reserved. 
            </p>
        </div>
     <div class="col-md-4 offset-md-2 text-right">
            <p class="m-0 text-white" id="cookies-right">This website uses cookies.
                <a href="" class="text-white" data-toggle="tooltip" data-placement="top" title="More details of cookies">Details</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button class="btn m-0 rounded-0 btn-primary btn-sm border-0" id="use-cookies">Okay</button>
            </p>
        </div>
        

       

    </div>
</div>

<script src="/theme/one/jquery/common.js"></script>
<script>
      new Vue({
        el: '#editor',
        data: {
          input: '# hello'
        },
        computed: {
          compiledMarkdown: function () {
            return marked(this.input, { sanitize: true })
          }
        },
        methods: {
          update: _.debounce(function (e) {
            this.input = e.target.value
          }, 300)
        }
      })
</script>

</body>
</html>