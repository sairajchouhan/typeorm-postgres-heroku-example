import 'reflect-metadata';
import express, { Request, Response } from 'express';

(() => {
  const app = express();

  app.get('/', (_: Request, res: Response) => {
    console.log('NODE_ENV is => ', process.env.NODE_ENV);
    console.log('PORT is => ', process.env.PORT);
    console.log('TEST env var is => ', process.env.TEST);
    res.send('yes this is woking');
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log('server is runing at port 5000');
  });
})();
