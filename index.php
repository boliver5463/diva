<!doctype html>
<html lang="">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>D.I.V.A.</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="shortcut icon" type="image/png" href="favicon.ico"/>
  
  <link rel="stylesheet" href="css/style.css?v=2.5">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet">

  <script src="js/jquery.min.js"></script>
  <script src="https://code.jquery.com/jquery-migrate-1.0.0.js"></script>
  <script src="js/bootstrap.bundle.min.js"></script>

  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-5BW783X');</script>
  <!-- End Google Tag Manager -->

</head>
<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5BW783X"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

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

  <script src="js/social-share.js"></script>

  <div id="particles-js"></div>

  <script src="js/copy.js"></script>

  <script src="js/particles.min.js"></script>
  
  <script src="js/functions.js?v=1.2"></script>
  
</body>
</html>