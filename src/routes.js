import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  await User.create({
    name: 'Marcelo Mattos',
    email: 'marcelo@inblu.com.br',
    password_hash: '1324314167',
  })
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.json(err);
    });
});

export default routes;
