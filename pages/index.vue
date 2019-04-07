<template>
  <section class="container">
    <div class="container">
      <div class="starter-template">
        <h1>Hiroaki Ninomiya / treby</h1>
        <p class="lead">
          <q>The best way to predict the future is to invent it.</q>
        </p>
        <p><font-awesome-icon icon="map-marker-alt" />&nbsp;Tokyo, Japan</p>
        <p><font-awesome-icon icon="rss" />&nbsp;<a href="http://lineblog.me/treby/" target="_blank">treby's survival blog</a></p>
        <p class="icons">
          <a href="https://github.com/treby" title="@treby"><font-awesome-icon :icon="['fab', 'github-square']" /></a>
          <a href="https://www.facebook.com/Hiroaki.Ninomiya" title="Hiroaki Ninomiya"><font-awesome-icon :icon="['fab', 'facebook-square']" /></a>
          <a href="https://jp.linkedin.com/in/treby" title="treby"><font-awesome-icon :icon="['fab', 'linkedin-square']" /></a>
          <a href="http://www.slideshare.net/treby"><font-awesome-icon :icon="['fab', 'slideshare']" /></a>
          <a href="https://twitter.com/treby006" title="@treby006"><font-awesome-icon :icon="['fab', 'twitter-square']" /></a>
          <a href="http://qiita.com/treby" title="Qiita"><font-awesome-icon icon="square" /></a>
          <a href="https://www.wantedly.com/users/103035" title="Wantedly"><font-awesome-icon icon="square" /></a>
        </p>
        <p>Rails, PHP, JavaScript, AWS, Heroku</p>
      </div>
      <div class="starter-template">
        <h2>Works</h2>
        <ul class="portfolio">
          <li><a href="https://twitter.com/mlborder">@mlborder</a>&nbsp;<a href="https://github.com/mlborder/borderbot-core"><font-awesome-icon :icon="['fab', 'github']" /></a> - Ruby, Twitter, Web Crawling/Scraping, InfluxDB</li>
          <li><a href="http://mlborder.com">mlborder.com</a>&nbsp;<a href="https://github.com/mlborder/borderbot-rails"><font-awesome-icon :icon="['fab', 'github']" /></a> - Rails, PHP(Slim Framework), Heroku</li>
          <li><a href="https://rubygems.org/gems/rubimas">rubimas</a>&nbsp;<a href="https://github.com/imas/rubimas"><font-awesome-icon :icon="['fab', 'github']" /></a> - Rubygems (Ruby library) / hobby use</li>
          <li><a href="https://twitter.com/pronama_bot">@pronama_bot</a>&nbsp;<a href="https://github.com/pronama/pronama-bot"><font-awesome-icon :icon="['fab', 'github']" /></a> - CoffeeScript, Hubot, Heroku</li>
        </ul>
        <h2>Activities</h2>
        <ul class="portfolio">
          <li><a href="https://github.com/shinjukurb/meetups">Shinjuku.rb</a> - Co-organizer (2015.07-)</li>
          <li><a href="http://www.comiket.co.jp/">Comic Market</a> - Staff (2013.12-)</li>
        </ul>
        <h2>Posts</h2>
        <ul class="portfolio">
          <li><a href="http://blog.spacemarket.com/code/google-calendar-relation/">『Googleカレンダー連携機能を実装した際の知見』</a> (2016.05)</li>
          <li><a href="http://www.slideshare.net/treby/believe-my-drembot">『BELIEVE MY DRE@M!!とミリオンボーダーbot』</a> (2016.05)</li>
          <li><a href="https://www.facebook.com/wantedly/posts/1135747266466005">『二年生になりました o(≧▽≦)o』</a> (2016.03)</li>
          <li><a href="http://blog.spacemarket.com/code/improve-reservation-flow-using-uncaptured-charge/">『仮売上の仕組みを使って予約フローを改善した話』</a> (2015.12)</li>
          <li><a href="http://qiita.com/treby/items/0aa377506a47e9135fd3">『アイマスで始めるWebスクレイピング』</a> (2015.12)</li>
          <li><a href="http://www.slideshare.net/treby/enjoy-hrmonybot">『ENJOY H@RMONY!!とボーダーbot』</a> (2015.06)</li>
          <li><a href="http://qiita.com/treby/items/9184251b545d9ebc3198">『現場で使うGitのテクニック』</a> (2014.12)</li>
          <li><a href="http://labs.gree.jp/blog/2014/12/13228/">『『釣り★スタ』チームにおけるエンジニアの生存戦略』</a> (2014.12)</li>
          <li><a href="http://labs.gree.jp/blog/2013/12/10049/">『イケててヤバいGit入門』</a> (2013.12)</li>
        </ul>
        <h2>Books</h2>
        <ul class="portfolio">
          <li><a href="http://www.oreilly.co.jp/books/9784873116242/">『NFC Hacks――プロが教えるテクニック &amp; ツール』</a> (2013.11)</li>
        </ul>
        <h2>Dojin</h2>
        <ul class="portfolio">
          <li><a href="http://www.atelier-nodoka.net/">Atelier NODOKA</a> - Personal blog / fan activities.</li>
        </ul>
      </div>
    </div><!-- /.container -->
  </section>
</template>

<style>
body {
  padding-top: 5rem;
}
q {
  font-style: italic;
}
.starter-template {
  padding: 3rem 1.5rem;
  text-align: center;
}
a {
  color: #455a64;
  text-decoration: underline;
}
.starter-template > .icons > a:link {
  color: #0288d1;
}
.starter-template > .icons > a:visited {
  color: #01579b;
}
.starter-template > .icons > a:hover {
  color: #4fc3f7;
  text-decoration: none;
}
ul.portfolio {
  list-style-type: none;
  padding: 0;
  margin-bottom: 5em;
}
</style>
