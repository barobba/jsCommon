// From: http://stackoverflow.com/questions/3788125/jquery-querystring
// Modified to allow queryString as argument, and for readability
function queryString(key, query) {
  if (query == undefined) {
    query = document.location.search;
  }
  var regExpObj = new RegExp('(?:\\?|&)'+key+'=(.*?)(?=&|$)','gi');
  var result = [];
  var match;
  while ((match = regExpObj.exec(query)) != null) {
    result.push(match[1]);
  }
  return result;
}
