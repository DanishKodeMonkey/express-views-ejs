# View engines in express

There are various view engines, one of which is EJS. It shares a common syntax to HTML which makes it easy to get started with.

# Install

To install EJS on a existing express project, use npm

```bash
npm install ejs
```

Import nodes built-in path module, to allow us to set a path in the internal file structure of the project.

```javascript
const path = require('node:path');
```

Then enable ejs by setting the views path(where we will store the views we are going to create using ejs) as well as the view engine property of our express app

```javascript
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
```

# EJS syntax

EJS syntax boils down to using existing HTML while using `<%` `%>` tags to enable the use of javascript.

For example, let's make a `for` loop and use some variables in the HTML file using EJS

```javascript
<% const products = [bike, computer, potato, stick] %>

<ul>
<% products.map((product) => { %>
    <li><%= product %>s are neat </li>
<% }) %>
</ul>
```

Note the use of EJS syntax on each line where javascript is used.

# Using EJS with express

In order to use EJS with express, we should start by creating a views folder to hold our ejs views, with a template file called `index.ejs`.

```javascript
<html>
    <body>
        <%= message %>
    </body>
</html>

```

Then, in order to render the template file, we will use express res.render method during a application level route match to the index of the site `/` to return a rendered page, where the message variable has been passed as a prop.

```javascript
app.get('/', (req, res) => {
    res.render('index', { message: 'Oh my! Amazing! ' });
});
```

now, when ever this path is matched, EJS will create a HTML body to return, computing the javascript and dynamically replacing the message variable with our passed text!

Lets try it! Booting up the server, and attempting to enter the path `localhost:3000/` will give us:
![browser entering localhost:3000/](./public/Screenshot_20240802_152621.png)
