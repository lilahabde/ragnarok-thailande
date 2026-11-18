/* Page language, chosen automatically (no button):
   - the page is ENGLISH by default, everywhere;
   - it switches to THAI only when the visitor's connection is in Thailand (the target GEO).
   Before the country lookup answers, the device time zone gives an instant first guess (Asia/Bangkok -> Thai),
   so visitors in Thailand see Thai straight away. The lookup result (country code only) is kept in sessionStorage
   for the visit, so the legal pages and the landing page agree without calling the service twice.
   Hidden test switches: ?lang=th|en forces a language, ?geo=TH forces a country. */
(function(){
  var KEY = 'row_country';
  function q(n){ try{ return new URLSearchParams(location.search).get(n); }catch(e){ return null; } }
  function tzThai(){ try{ return Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Bangkok'; }catch(e){ return false; } }
  function cached(){ try{ return sessionStorage.getItem(KEY) || ''; }catch(e){ return ''; } }
  function store(cc){ try{ sessionStorage.setItem(KEY, cc); }catch(e){} }
  function pick(cc){ return cc === 'TH' ? 'th' : 'en'; }
  function override(){ var l = q('lang'); return (l==='th' || l==='en') ? l : null; }
  function geoParam(){ var g = String(q('geo')||'').toUpperCase(); return /^[A-Z]{2}$/.test(g) ? g : ''; }

  function initial(){
    var o = override(); if(o) return o;
    var g = geoParam(); if(g) return pick(g);
    var cc = cached(); if(cc) return pick(cc);
    return tzThai() ? 'th' : 'en';
  }

  /* one country lookup per visit: Cloudflare first, api.country.is as backup; no cookies, no referrer */
  function fetchCountry(cb){
    if(!window.fetch || !window.AbortController){ cb(''); return; }
    function get(url, parse){
      return new Promise(function(res){
        var c = new AbortController(), t = setTimeout(function(){ c.abort(); }, 2500);
        fetch(url, {cache:'no-store', signal:c.signal, credentials:'omit', referrerPolicy:'no-referrer'})
          .then(function(r){ return r.ok ? r.text() : ''; })
          .then(function(x){ clearTimeout(t); res(parse(x)); })
          .catch(function(){ clearTimeout(t); res(''); });
      });
    }
    get('https://www.cloudflare.com/cdn-cgi/trace', function(x){ var m = /(?:^|\n)loc=([A-Z]{2})/.exec(x); return m ? m[1] : ''; })
      .then(function(cc){
        return cc || get('https://api.country.is/', function(x){ try{ var c = JSON.parse(x).country; return /^[A-Z]{2}$/.test(c) ? c : ''; }catch(e){ return ''; } });
      })
      .then(cb);
  }

  /* calls cb(newLang) once the country is known (skipped when a test switch or a cached country exists) */
  function confirm(cb){
    if(override() || geoParam() || cached()) return;
    fetchCountry(function(cc){ if(!cc) return; store(cc); cb(pick(cc)); });
  }

  window.rowLang = { initial: initial, confirm: confirm, pick: pick };

  var l = initial();
  document.documentElement.lang = l;
  var t = document.querySelector('title');
  if(t && t.dataset && t.dataset[l]) t.textContent = t.dataset[l];

  /* keep the test switches when moving between pages */
  var keep = [];
  ['lang','geo'].forEach(function(k){ var v = q(k); if(v) keep.push(k + '=' + encodeURIComponent(v)); });
  if(keep.length){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('a[data-keep], .flinks a').forEach(function(a){
        a.href += (a.href.indexOf('?') > -1 ? '&' : '?') + keep.join('&');
      });
    });
  }
})();
