<template>
  <section class="container">
    <div class="container">
      <div class="starter-template">
        <h1>Hiroaki Ninomiya / treby</h1>
        <p>二宮啓聡と申します。Repro株式会社でSolution Architectをしています。会社やコミュニティではtreby(とれびぃ)と呼ばれています。</p>
        <p>このページでは、私を知るための情報をなるべく簡潔にまとめます(2019/04現在)</p>
      </div>
      <div class="starter-template">
        <h2>SNSのアカウント</h2>
        <p>ご連絡はメール、もしくはFacebookやTwitterが確実です。</p>
        <ul class="portfolio icons">
          <li><a href="https://lineblog.me/treby">treby's survival blog&nbsp;<font-awesome-icon :icon="['fab', 'line']" /></a> - 現在更新を精力的に行っているブログです。</li>
          <li><a href="https://www.facebook.com/Hiroaki.Ninomiya" title="Hiroaki Ninomiya">Facebook&nbsp;<font-awesome-icon :icon="['fab', 'facebook-square']" /></a></li>
          <li><a href="https://twitter.com/treby006" title="@treby006">Twitter&nbsp;<font-awesome-icon :icon="['fab', 'twitter-square']" /></a></li>
          <li><a href="https://github.com/treby" title="@treby">GitHub&nbsp;<font-awesome-icon :icon="['fab', 'github-square']" /></a></li>
          <li><a href="https://jp.linkedin.com/in/treby" title="treby">LinkedIn&nbsp;<font-awesome-icon :icon="['fab', 'linkedin']" /></a></li>
          <li><a href="http://www.slideshare.net/treby">Slideshare&nbsp;<font-awesome-icon :icon="['fab', 'slideshare']" /></a> - 発表スライドをアップロードするメインのサービスはこちらです。</li>
          <li><a href="https://speakerdeck.com/treby">Speakerdeck&nbsp;<font-awesome-icon :icon="['fab', 'speaker-deck']" /></a> - スペースマーケット時代、会社としての発信のために使っていました。現在は更新していません。</li>
          <li><a href="http://qiita.com/treby" title="Qiita">Qiita</a></li>
          <li><a href="https://www.wantedly.com/users/103035" title="Wantedly">Wantedly</a></li>
          <li><a href="https://job-draft.jp/users/166" title="転職ドラフト">転職ドラフト</a> - 仕事に対する哲学はこちらがわかりやすいかもしれません。</li>
          <li><a href="http://www.atelier-nodoka.net/">Atelier NODOKA</a> - 私の同人活動のためのサークル「アトリエのどか」。過去には技術系同人誌を発行していたこともありましたが、現在は開店休業状態です。</li>
        </ul>
      </div>
      <div class="starter-template">
        <h2>哲学</h2>
        <p>私のキャリアや考え方に強く影響を与えている思想や哲学を紹介します。</p>
        <ul class="portfolio">
          <li>貞観政要 (山本七平『帝王学 「貞観政要」の読み方』)</li>
          <li>アドラー心理学</li>
          <li>夏目漱石</li>
          <li>アイドルマスター</li>
        </ul>
        <h2>職務経歴</h2>
        <p>下記に私の職務上の経験を記します。これまでの業務上の経験により、ソーシャルゲーム開発やBtoB SaaS、Ad Technologyといった領域でのドメイン知識を有していると考えられます。また、技術についてはRails、Vue.js、AWS(ECS、SQS、S3等)を実際に触っています。</p>

        <ul class="portfolio">
          <li>
            グリー株式会社(2013/04〜2015/02)
            <ul>
              <li>GREE Platform 共通課金基盤チーム(PHP)</li>
              <li>釣りスタチーム(PHP)</li>
            </ul>
          </li>
          <li>
            株式会社スペースマーケット(2015/03〜2016/06)
            <ul>
              <li><a href="https://blog.spacemarket.com/news/newcomer_introduction_ninomiya/">3人目のエンジニアとして入社</a>。当時の全社人数は10名程度。</li>
              <li>使用技術はRails。業務上必要に駆られ<a href="https://github.com/elastic/elasticsearch-rails/pull/339">elasticsearch-rails</a>へのパッチを投げました。</li>
            </ul>
          </li>
          <li>
            <a href="https://lineblog.me/treby/archives/5400533.html">フリーランス</a>
            <ul>
              <li>Repro株式会社(2016/05〜2017/01) - フロントエンドエンジニア(Rails - Vue.js)</li>
              <li>LPixel株式会社(2016/05〜2016/10) - IMACELプロジェクトの初期開発(Django)</li>
              <li>※現在もあくまで本業に影響が出ない範囲ではありますが、お仕事をおうけすることがあります。開発フロー・開発プロセスの設計やRailsアプリケーションのコードレビュー、Webバックエンドエンジニア採用の助言という分野に実績があります。</li>
            </ul>
          </li>
          <li>
            Repro株式会社(2017/02〜)
            <ul>
              <li>フリーランスとしてお手伝いしていましたが、<a href="https://lineblog.me/treby/archives/9264806.html">雇用形態を業務委託から正社員に変更</a>しました。</li>
              <li>
                <b>Software Engineer</b>(〜2019/04) - 会社唯一のプロダクト、Reproのエンジニアとして様々な仕事をしてきました。
                <ul>
                  <li><b>開発者</b> - 一メンバーとして、要件を与えられた機能の開発を確実に行いました。また、プロダクトのCoffeeScriptをES2015に置き換えるなど、後の開発効率を向上させるためのリファクタリングも行いました。</li>
                  <li><b>タスクオーナー</b> - プロダクト機能開発の取りまとめに責任を持つメンバーとして、プロダクトマネージャやQA、いわゆるビジネス職を含む社内ステークホルダと協調しながら開発を行いました。</li>
                  <li><b>チームリーダー</b> - 3〜7人のチームのリーダー職として、自身も開発を行いながら、メンバーとの1on1やチーム内のタスクコントロールなどを行うプレイングマネージャを務めました。</li>
                </ul>
              </li>
              <li><b>Solution Architect</b>(2019/04〜) - 組織規模や事業の拡大に伴い、会社にSolution Architectという役割が新たに定義され、その立ち上げに任命されました。プロダクト開発に携わっていた知見を活かすべく日々奔走しています。</li>
            </ul>
          </li>
        </ul>
        <h2>コミュニティ活動</h2>
        <p>私の興味として、組織や人が好きなので原則的に営利が絡まない「場」であるコミュニティには強く関心を寄せています。過去の実績から、特にオーガナイズ、ファシリテーション、巻き込みといった分野に強みを発揮できる傾向があるようです。</p>
        <ul class="portfolio">
          <li><a href="https://sites.google.com/site/fuknfc/">Fukuoka NFC Lab</a>(〜2013/04) - Founder / 学生時代運営していた福岡におけるNFCのコミュニティ。就職に伴う上京まで定期的に勉強会を開催していました。</li>
          <li><a href="https://github.com/shinjukurb/meetups">Shinjuku.rb</a> - Co-organizer (2015.07〜) / 地域Rubyコミュニティの一つであるShinjuku.rbの世話役を務めています。</li>
          <li><a href="https://github.com/imas/hackathon">IM@Study</a> - Founder / アイマス×エンジニアの力でアイドルマスターを盛り上げるためのコミュニティ。</li>
          <li><a href="http://www.comiket.co.jp/">Comic Market</a> - Staff (2013/12〜) / 夏と冬の年二回開催されるコミックマーケット(3〜4日間開催で来場者数50万人程度)の準備会というスタッフ組織に在籍しています。</li>
          <li><a href="https://vuejs-meetup.connpass.com/">Vue.js日本ユーザーグループ</a> - Core Staff / Vue.jsが日本でより普及するための活動を行っています。</li>
          <li><a href="https://anchor.fm/kinokoru">kinokoru.fm (きのこるエフエム)</a> - Founder / <a href="https://connpass.com/event/116938/">The Art of Senior Engineering</a>の流れを受け、エンジニア個々人の生き様や悩みを深掘りしていきます。</li>
        </ul>

        <h2>登壇歴</h2>
        <ul class="portfolio">
          <li>2011/12&nbsp;<a href="https://dic.nicovideo.jp/a/%E7%AC%AC1%E5%9B%9E%E3%83%8B%E3%82%B3%E3%83%8B%E3%82%B3%E5%AD%A6%E4%BC%9A%CE%B2%E3%82%B7%E3%83%B3%E3%83%9D%E3%82%B8%E3%82%A6%E3%83%A0">第1回ニコニコ学会βシンポジウム</a> 研究してみたマッドネス(まどろみはじめ名義)</li>
          <li>2016/08&nbsp;<a href="https://www.slideshare.net/treby/web-65207540">クローリングのスペシャリストが語る、クローラー運用の裏側！</a> セッション(タイトル: <a href="https://www.slideshare.net/treby/web-65207540">趣味から始めるWebスクレイピング</a>)</li>
          <li>2017/08&nbsp;<a href="https://ginzarb.github.io/kaigi01/">ぎんざRuby会議01</a> LT(タイトル: <a href="https://www.slideshare.net/treby/rails-modernize-decaffeinatees2015">Railsフロントエンドの modernizeにおける一事例 ~decaffeinateからES2015移行まで~</a>)</li>
          <li>2018/07&nbsp;<a href="https://techplay.jp/event/679666">Rails Developers Meetup 2018 Day 3 Extreme</a> セッション(タイトル: <a href="https://www.slideshare.net/treby/octocat">Octocatは技術的負債の夢を見るか？</a>)</li>
          <li>2018/12&nbsp;<a href="https://frontend-conf.fukuoka.jp/sessions#b-7">Frontend Conference Fukuoka 2018</a> セッション(タイトル: <a href="https://www.slideshare.net/treby/vuejs-vuex-125352636">Vue.js + Vuexチーム開発実践の事例</a>)</li>
          <li>2019/02&nbsp;<a href="https://www.slideshare.net/treby/em-130373439">Engineering Manager Meetup #4</a> セッション(タイトル: <a href="https://www.slideshare.net/treby/em-130373439">失敗から学ぶEM方法論</a>)</li>
          <li>他、多数(通常、登壇資料は<a href="https://www.slideshare.net/treby">Slideshareで共有</a>しています)</li>
        </ul>

        <h2>記事</h2>
        <ul class="portfolio">
          <li><a href="http://labs.gree.jp/blog/2014/12/13228/">『釣り★スタ』チームにおけるエンジニアの生存戦略</a> (2014/12)</li>
          <li><a href="https://www.wantedly.com/companies/repro/post_articles/108665">ビジネスとエンジニアリングの融合を～目指すは二刀流エンジニア～</a> (2018/03)</li>
          <li><a href="https://lineblog.me/treby/archives/9365570.html">「できる」は「やりたい」と違う、ないしはやりたい仕事の見つけ方</a> (2019/02)</li>
          <li><a href="https://lineblog.me/treby/archives/9369609.html">シニアエンジニアのキャリアや人生を考える試み『The Art of Senior Engineering』を実施しました</a> (2019/04)</li>
          <li>他、多数(<a href="https://lineblog.me/treby">ブログ</a>を書いています)</li>
        </ul>

        <h2>執筆</h2>
        <ul class="portfolio">
          <li><a href="http://www.oreilly.co.jp/books/9784873116242/">『NFC Hacks――プロが教えるテクニック &amp; ツール』</a> (2013/11)</li>
        </ul>
      </div>
      <div class="starter-template">
        <h2>私にできること / これからやっていきたいこと</h2>
        <p>周囲の巻き込み力を持って、仕事の上では、取りまとめ役、エンジニアに限定しないステークホルダーとの折衝、飲み会の幹事をそつなく行うことができます。1on1や評価といったEngineering Manager職に抵抗がありません。むしろ興味があります。技術についても、一般的なWebアプリケーションエンジニアとして特別に深い専門知識を要しない範囲においては貢献できることでしょう。</p>
        <p>職業エンジニアとしてのミッションを『テクノロジーでサービスに情熱を込める』と定義しております。キャリアのゴールとしては、陽気に気ままにコードを書いている状態ではないかと考えています(私自身はポエマーと呼称しています)。</p>
        <p>自身で起業をおこなうというよりは、本気で世界を取ろうとしている人の右腕として働けることに喜びを感じます。ただし、前提として私の中に納得感が伴っていることが条件になってしまいます。</p>
        <p>独立欲はありますし自分で事業もやっていますが、自分の事業をいわゆるスタートアップのように急成長させることにはあまり興味がありません。コードを書くことは好きですが、仕事の上ではあくまで手段と捉えています。</p>
        <p>これから先は、今いるRepro株式会社を成功させる傍ら、副業の範囲でこれまで私がしてきた経験を業界に還元する仕事(これを自分の事業と位置づけます)をしていきたいです。</p>
        <p>また、時期は決めておりませんが、いつか私の生まれ育った地である福岡に移住することを思い描くこともあります。</p>
      </div>
    </div><!-- /.container -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'treby / Hiroaki Ninomiya(二宮啓聡)'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: '福岡出身、東京都在住のWeb技術者、二宮啓聡のポートフォリオ' }
      ]
    }
  }
}
</script>

<style>
body {
  padding-top: 5rem;
}
q {
  font-style: italic;
}
.starter-template {
  padding: 2rem 1.5rem;
}
a {
  color: #455a64;
  text-decoration: underline;
}
.starter-template > .icons a:link {
  color: #0288d1;
}
.starter-template > .icons a:visited {
  color: #01579b;
}
.starter-template > .icons a:hover {
  color: #4fc3f7;
  text-decoration: none;
}
ul.portfolio {
  padding-left: 20px;
  margin-bottom: 5em;
}
</style>
