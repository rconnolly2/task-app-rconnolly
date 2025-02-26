export interface Task {
    id: number;
    moduleId: number;
    name: string;
    description: string;
    deadline: Date;
    grade: number | undefined;
    completed: boolean;
}
