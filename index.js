$(document).ready(function() {
  $('#example').DataTable();
} );

function addrow_ref(bid, bdiv) {
  var bidn_r = document.getElementById('rowcnt_ref');
  var bid = bidn_r.value;
  var bidn = bid;
  bidn++;
  var div = document.getElementById(bdiv);
  div.insertAdjacentHTML('beforeend', "<div class=\"form-group row\"><label for=\"reference_type-"+bidn+"\" class=\"col-sm-3 col-form-label\">Reference ("+bidn+")</label><div class=\"col-sm-2\"><select class=\"form-control form-control-sm\" id=\"reference_type-"+bidn+"\" name=\"reference_type-"+bidn+"\"><option selected>Choose...</option><option>URLhaus</option><option>ANY.RUN</option><option>JoeSandbox</option><option>Cape</option><option>Malpedia</option><option>Twitter</option><option>Link</option></select></div><div class=\"col-sm-6\"><input type=\"text\" class=\"form-control form-control-sm\" id=\"reference_text-"+bidn+"\" name=\"reference_text-"+bidn+"\" placeholder=\"link (e.g. https://something.tld/bla.php)\"></div><div class=\"col-sm-1\"><div id=\"btn-references-"+bidn+"\"><button id=\"ref"+bidn+"\" class=\"btn btn-outline-success add-more\" type=\"button\" onclick=\"addrow_ref(this.id, 'references')\"><i class=\"fas fa-plus fa-xs\"></i></button></div></div></div>\n");
  var btn = document.getElementById("btn-references-"+bid);
  btn.innerHTML = "&nbsp;";
  var rowcntT = document.getElementById('rowcnt_ref');
  var rval = rowcntT.value;
  rval++;
  rowcntT.value = rval;
}

function addrow_con(bid, bdiv) {
  var bidn_r = document.getElementById('rowcnt_con');
  var bid = bidn_r.value;
  var bidn = bid;
  bidn++;
  var div = document.getElementById(bdiv);
  div.insertAdjacentHTML('beforeend', "<div class=\"form-group row\"><label for=\"context_type-"+bidn+"\" class=\"col-sm-3 col-form-label\">Context ("+bidn+")</label><div class=\"col-sm-2\"><select class=\"form-control form-control-sm\" id=\"context_type-"+bidn+"\" name=\"context_type-"+bidn+"\"><option selected disabled>Choose...</option><option>Dropping (MD5)</option><option>Dropping (SHA256)</option><option>Dropping (malware family)</option><option>Dropped by (MD5)</option><option>Dropped by (SHA256)</option><option>Dropped by (malware family)</option></select></div><div class=\"col-sm-6\"><input type=\"text\" class=\"form-control form-control-sm\" id=\"context_text-"+bidn+"\" name=\"context_text-"+bidn+"\" placeholder=\"EvilMalware\"></div><div class=\"col-sm-1\"><div id=\"btn-contexts-"+bidn+"\"><button id=\"con"+bidn+"\" class=\"btn btn-outline-success add-more\" type=\"button\" onclick=\"addrow_con(this.id, 'contexts')\"><i class=\"fas fa-plus fa-xs\"></i></button></div></div></div>\n");
  var btn = document.getElementById("btn-contexts-"+bid);
  btn.innerHTML = "&nbsp;";
  var rowcntT = document.getElementById('rowcnt_con');
  var rval = rowcntT.value;
  rval++;
  rowcntT.value = rval;
}