
const express = require('express');
const app = express();
const port = 3000;

const cursos = ['javascript', 'node js', 'react js', 'next js'];

app.use(express.json());

/*rota unico-curso*/
app.get('/cursos', (req, res) => {
    return res.json(cursos);
});



/*rota todos os cursos*/
app.get('/cursos/:index', (req, res) => {
    const { index } = req.params;
    return res.json(cursos[index]);
});


/* rota criar um novo curso*/
app.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name)
    return res.json(cursos);
});



/*atualizando um curso*/
app.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    cursos[name] = name;
    return res.json(cursos)
});


/*deletando um curso*/
app.delete('/cursos/:index',(req,res)=>{
 const {index}=req.params;
 cursos.splice(index,1);
 return res.json({message:"curso deletado com sucesso!"});

});










/*porta em uso*/
app.listen(3000, (erro) => {
    if (erro) {
        console.log('temos um problema!');
    } else {
        console.log('rodando com sucesso!')
    }
});