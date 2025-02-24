// Arquivo responsável por toda configuração e execução do back end.
const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port,() =>{
    console.log(`A App está sendo executada na Porta: ${port}`);
})