---
layout: default
description: Full Stack Developer extraordinaire
---

<div id="Content">
  <!-- <h1>&#60;DEV HUD/&#62;</h1> -->
  <h1 title="Dynamic Informative Virtual Assistant">D.I.V.A.</h1>
  <form id="search-form" method="get" action="https://www.google.com/search">

    <div style="height: 37px; margin-bottom: 10px;">
      <div id="search-reminder">Google</div>
    </div>
    
    <input type="text" id="search" name="q" placeholder="Google"/>
    <div id="toolbar" class="row">
      <div class="col-3 col-xs-3">
        <i id="social" class="fas fa-share-alt"></i>
      </div>
      <div class="col-3 col-xs-3">
        <i id="snippets" class="fas fa-code"></i>
      </div>
      <div class="col-3 col-xs-3">
        <i id="tools" class="fas fa-wrench"></i>
      </div>
      <div class="col-3 col-xs-3">
        <i id="apis" class="fas fa-journal-whills"></i>
      </div>
    </div>

    <div id="other-search"></div>

  </form>

  <div id="computer" class="fade-in text-right">
        
    <div id="browser" class="copy"></div>

    <div id="ip-address" class="copy"><?php echo $_SERVER['REMOTE_ADDR']; ?></div>

  </div>

  <div id="date-time" class="fade-in text-right"></div>

  <div id="copyright" class="fade-in text-left">

    <div id="produced">
      <span>Produced by </span>
      <br>
      <a href="https://brentonoliver.com" style="color: #efefef;">
        <img src="images/BO_Icon_lines_white.png" width="15" height="15" alt="Brenton Oliver"/>
        <span>Brenton Oliver</span>
      </a>
    </div>

    <div id="current-year"></div>

  </div>

  <div id="custom-tools" class="fade-in">
    
    <div id="social-share-generator"
      class="cursor"
      onclick="socialShareURL();"
    >Social Share URL</div>
    
    <div id="google-suite"></div>

  </div>

</div>

<div class="diva fade-in">
  <div class="case-container">
    <div class="outter-ring">
      <div class="c1"></div>
      <div class="c2"></div>
      <div class="c3"></div>
      <div class="c4"></div>
      <div class="c5"></div>
      <div class="core"></div>
    </div>
    <ul class="marks">
      <li></li><li></li><li></li><li></li><li></li><li></li>
      <li></li><li></li><li></li><li></li><li></li><li></li>
      <li></li><li></li><li></li><li></li><li></li><li></li>
      <li></li><li></li><li></li><li></li><li></li><li></li>
      <li></li><li></li><li></li><li></li><li></li><li></li>
      <li></li><li></li><li></li><li></li><li></li><li></li>
      <li></li><li></li><li></li><li></li><li></li><li></li>
      <li></li><li></li><li></li><li></li><li></li><li></li>
      <li></li><li></li><li></li><li></li><li></li><li></li>
      <li></li><li></li><li></li><li></li><li></li><li></li>
    </ul>
    <div class="cover"></div>
  </div>
</div>