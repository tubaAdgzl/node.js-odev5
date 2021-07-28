const http = require('http');

const SERVER = http.createServer((req,res) => {
    const url = req.url;
    if(url==='/'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(`<h2>Index sayfasına hoşgeldiniz</h2>`);
    }else if(url==='/iletisim'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(`<h2>İletişim sayfasına hoşgeldiniz</h2>`)
    }else if(url==='/hakkimda'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(`<h2>Hakkımda sayfasına hoşgeldiniz</h2>`)
    }else{
        res.writeHead(404,{'Content-type':'text/html'});
        res.write(`<h2>404 SAYFA BULUNAMADI</h2>`)
    }
    res.end();

});

const PORT = 5000;

SERVER.listen(PORT,()=>{
    console.log(`Sunucu ${PORT} portunda başlatıldı`)
})