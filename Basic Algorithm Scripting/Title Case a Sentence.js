



function titleCase(str) {
  str = str.toLowerCase();
  return str.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });

}

titleCase("I'm a little tea pot");