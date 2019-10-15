<nav class="navbar navbar-expand-sm navbar-dark fixed-top" id="home-nav">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link pl-1" target="_blank" title="Be a useful web" data-toggle="tooltip">Rudderless</a>
    </li>
    <li class="nav-tiem">
      <a class="nav-link active" target="_blank" id="slide-nav-toggle">
        <span class="iconfont icon-caidan"></span>
      </a>
    </li>

  </ul>
</nav>


<div class="container-fluid h-100" style="padding-top:56px;padding-bottom: 24px;">
  <div class="row justify-content-center h-100">
    <div class="col-sm-2 px-1 bg-dark" id="slide-nav" style="display:none;">
      <div class="py-2 sticky-top flex-grow-1">
        <div class="nav flex-sm-column">

        {foreach from=$menus item=arr key=key}
          {if !is_array($arr)}
          <a href="/{$arr}" class="nav-link">{$arr}</a>
          {else}
            <a target="_blank" class="a-one">{$key}
                <span class="iconfont icondown-trangle1"></span>
            </a>
              <ul class="navbar-nav hide second-nav">
            {foreach from=$arr item=child key=key2}
                <li class="nav-item"><a class="nav-link" href="/{$key}/{$child}">{$child}</a></li>
            {/foreach}
              </ul>
          {/if}
        {/foreach}
        </div>
      </div>
    </div>
