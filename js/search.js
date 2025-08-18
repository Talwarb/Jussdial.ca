(function(){
  function filter() {
    var q = (document.getElementById('searchInput')?.value || '').toLowerCase();
    document.querySelectorAll('.business-item').forEach(function(el){
      var t = el.innerText.toLowerCase();
      el.style.display = t.indexOf(q) !== -1 ? '' : 'none';
    });
  }
  window.addEventListener('DOMContentLoaded', function(){
    var box = document.getElementById('searchInput');
    if (box) box.addEventListener('input', filter);
  });
})();
