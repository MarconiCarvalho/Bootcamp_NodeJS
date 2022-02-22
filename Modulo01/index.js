  const express = require('express');
  const res = require('express/lib/response');

  const server = express();

  server.use(express.json());

  const users = ['Diogo', 'Robson', 'Victor'];
  
  server.get('/users', (req,res) => {
      return res.json(users);
   })
  server.get('/users/:index', (req, res) => {
    const { index } = req.params;

    return res.json(users[index]);
   })

  server.post('/users', (req, res) => {
   const {name} = req.body;
   users.push(name);
   return res.json(users);
   });

   server.listen(3000);