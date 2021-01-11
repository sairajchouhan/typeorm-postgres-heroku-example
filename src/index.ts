import 'reflect-metadata';
import express, { Request, Response } from 'express';

(() => {
  const app = express();

  app.get('/', (_: Request, res: Response) => {
    res.send('yes this is woking');
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log('server is runing at port 5000');
  });
})();
