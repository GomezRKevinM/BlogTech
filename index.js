import express from "express";

const app = express();
const puerto = 8080;
app.use(express.static('public'));
// Paginas
app.get("/home", (req, res) => {
    res.sendFile(process.cwd() + "/public/index.html");    
});
app.get("/login", (req, res) => {
    res.sendFile(process.cwd() + "/public/html/login.html");    
});
app.get("/register", (req, res) => {
    res.sendFile(process.cwd() + "/public/html/register.html");    
});
app.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/public/index.html");
});
app.get("/git", (req, res) => {
    res.sendFile(process.cwd() + "/public/html/git.html");
});
app.get("/gitlab", (req, res) => {
    res.sendFile(process.cwd() + "/public/html/gitlab.html");
});
app.get("/html", (req, res) => {
    res.sendFile(process.cwd() + "/public/html/html.html");
});
app.get("/js", (req, res) => {
    res.sendFile(process.cwd() + "/public/html/js.html");
});
app.get("/css", (req, res) => {
    res.sendFile(process.cwd() + "/public/html/css.html");
});
app.get("/foro", (req, res) => {
    res.sendFile(process.cwd() + "/public/html/foro.html");
})
app.get("/post/:id", (req, res) => { 
    res.sendFile(process.cwd() + "/public/html/publicacion.html");
});
app.get("/logout", (req, res) => {
    res.sendFile(process.cwd() + "/public/html/logout.html");
});
app.get("/admin", (req, res) => {
    const { username } = req.query;
    res.sendFile(process.cwd() + "/public/html/admin.html");
});

// Estilos
app.get("/style/login", (req, res) => {
    res.sendFile(process.cwd() + "/public/style/login.css");
})
app.get("/style/register", (req, res) => {
    res.sendFile(process.cwd() + "/public/style/register.css");
})
app.get("/style/index", (req, res) => {
    res.sendFile(process.cwd() + "/public/style/index.css");
})
app.get("/style/modal", (req, res) => {
    res.sendFile(process.cwd() + "/public/style/modal.css");
})
app.get("/style/comentarios", (req, res) => {    
    res.sendFile(process.cwd() + "/public/style/comentarios.css");
})
app.get("/style/foro", (req, res) => {
    res.sendFile(process.cwd() + "/public/style/foro.css");
})
app.get("/style/publicacion", (req, res) => {
    res.sendFile(process.cwd() + "/public/style/publicacion.css");
})
app.get("/style/gitlab", (req, res) => {
    res.sendFile(process.cwd() + "/public/style/gitlab.css");
})
app.get("/style/html", (req, res) => {
    res.sendFile(process.cwd() + "/public/style/html.css");
})

app.listen(puerto, () => {
    console.log("Server running on  http://localhost:" + puerto);
});

// Scripts
app.get("/script/login", (req, res) => {
    res.sendFile(process.cwd() + "/public/script/login.js",{ headers: { 'Content-Type': 'application/javascript' }});
})
app.get("/script/modal", (req, res) => {
    res.sendFile(process.cwd() + "/public/script/modal.js",{ headers: { 'Content-Type': 'application/javascript' }});
})
app.get("/script/tag-color", (req, res) => {
    res.sendFile(process.cwd() + "/public/script/tag-color.js",{ headers: { 'Content-Type': 'application/javascript' }});
})
app.get("/script/copy", (req, res) => {
    res.sendFile(process.cwd() + "/public/script/copy.js",{ headers: { 'Content-Type': 'application/javascript' }});
})
app.get("/script/get", (req, res) => {
    res.sendFile(process.cwd() + "/public/script/get.js",{ headers: { 'Content-Type': 'application/javascript' }});
})
app.get("/script/nav-lat", (req, res) => {
    res.sendFile(process.cwd() + "/public/script/nav-lat.js",{ headers: { 'Content-Type': 'application/javascript' }});
})
app.get("/script/togglemenu", (req, res) => {
    res.sendFile(process.cwd() + "/public/script/togglemenu.js",{ headers: { 'Content-Type': 'application/javascript' }});
})
app.get("/script/foro", (req, res) => {
    res.sendFile(process.cwd() + "/public/script/foro.js",{ headers: { 'Content-Type': 'application/javascript' }});
})
app.get("/script/index", (req, res) => {
    res.sendFile(process.cwd() + "/public/script/index.js",{ headers: { 'Content-Type': 'application/javascript' }});
})

// componentes

app.get("/component/formLogin", (req, res) => {
    res.sendFile(process.cwd() + "/public/component/formLogin.html");
})
app.get("/component/formRegister", (req, res) => {
    res.sendFile(process.cwd() + "/public/component/formRegister.html");
})
app.get("/component/formComent", (req, res) => {
    res.sendFile(process.cwd() + "/public/component/formComent.html",{ headers: { 'Content-Type': 'text/html' }});
})
