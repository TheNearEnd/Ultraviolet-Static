// JavaScript Document
function breadcrumbs(){
  sURL = new String;
  bits = new Object;
  var x = 0;
  var stop = 0;
  var output = "<ol aria-label=\"Breadcrumb\" class=\"breadcrumb\"><li><a href=\"/\">HOME</i></a></li>  ";
  sURL = location.href;
  sURL = sURL.slice(8,sURL.length);
  chunkStart = sURL.indexOf("/");
  sURL = sURL.slice(chunkStart+1,sURL.length)
  while(!stop){
    chunkStart = sURL.indexOf("/");
    if (chunkStart != -1){
      bits[x] = sURL.slice(0,chunkStart)
      sURL = sURL.slice(chunkStart+1,sURL.length);
    }else{
      stop = 1;
    }
    x++;
  }
  for(var i in bits){
    output += "<li><a href=\"";
    for(y=1;y<x-i;y++){
      output += "../";
    }
    output += bits[i] + "/\">" + bits[i] + "</a></li>  ";
  }
  document.write(output + "<li aria-current=\"page\" class=\"active\">" + document.title) + "</li></ol>";
}