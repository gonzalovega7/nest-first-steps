import { Controller, Delete, Get, Post, Put, Body } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    @Get()
    getTasks(): string {
        return 'Retrieving Tasks';
    }

    @Post()
    createTask(@Body() task): string {
        console.log(task);
        return 'Creating a task..';
    }

    @Put()
    updateTask(): string {
        return 'Updating a task..';
    }
    @Delete()
    deleteTask(): string {
        return "Deleting a task..";
    }
}
