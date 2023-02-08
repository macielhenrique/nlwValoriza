import express from "express";

const app = express();

/**
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => Alterar uma Informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */


app.get("/", (request,response)=> {
  //Request => Entrando
  //response => Saindo

  return response.send("Ola Mundo!")
})

app.post("/test-post", (request,response)=> {
  return response.send("hello world post!")
})
//http://localhost:3000
app.listen(3000,()=> console.log("Server is running"));