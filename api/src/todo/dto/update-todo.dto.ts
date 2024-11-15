import { Status } from '@prisma/client';

export class UpdateTodoDto {
  title: string;
  completed: Status;
}
