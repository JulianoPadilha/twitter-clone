const renderContent = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  const url = req.url;
  const method = req.method;
  
  if (url === '/profile') {
    res.write('Profile page');
    return res.end();
  } else if (url === '/') {
    res.write('Home page');
    return res.end()
  } else if (url == "/settings" && method == "POST") {
    res.write('<h1>Form was submitted</h1>');
    return res.end();
  } else if (url == "/settings") {
      res.write('<h1>Settings</h1><form action="/settings" method="POST"><input type="text"><button type="submit">Press Me</button></form>');
      return res.end();
  }
    
  
  res.write('Page not found');
  res.end();
}

module.exports = renderContent;
