import 'reflect-metadata';
import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import 'express-async-errors';

import AppError from '@shared/errors/AppError';

import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

// Rota para testar conexão
app.get('/tests/connection', (_req, res) => {
  return res.json({ message: 'Stable connection 🌎' })
});

// Middleware para tratamento de erros
app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(process.env.PORT || 3333, () => {
  console.log(`🚀 Server started on port ${process.env.PORT || 3333}!`);
});
