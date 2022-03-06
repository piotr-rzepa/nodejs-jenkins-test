import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;
const rootPath = '/';
const message = 'Hello World!';

app.get(rootPath, (_: Request, res: Response) => res.send(message));

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
