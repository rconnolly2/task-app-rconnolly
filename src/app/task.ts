export interface Task {
    id: number;
    module_id: number;
    name: string;
    description: string;
    deadline: Date;
    grade: number | undefined;
    completed: boolean;
}
