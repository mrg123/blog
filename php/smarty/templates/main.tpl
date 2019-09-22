<div class="col p-0" id="main">

    <div id="editor" class="row m-0 h-100">
      <div class="col p-0">
      <textarea :value="input" @input="update" id="markdown-edit" class="w-100 h-100"></textarea>
      </div>
      <div v-html="compiledMarkdown" class="col" id="markdown-view"></div>
    </div>

</div>