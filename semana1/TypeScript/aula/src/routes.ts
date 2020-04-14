import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'kelsey@email.com',
    password: '123456',
    techs: [
      'Node.js', 
      'ReactJS', 
      'ReactNative',
      { title: 'Javascript', experience: 100 },
    ],
  });

  return response.json({ message: 'Hello World' });
}