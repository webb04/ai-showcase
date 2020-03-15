import { Task } from "./api";

function filterByCategory(tasks: Task[], category: string): Task[] {
    return tasks
        .filter((task: Task) => task.category === category);
}

function sumScores(tasks: Task[]): number {
    return tasks
        .reduce((total: number, task: Task) => total + task.score, 0);
}

// changing category to an enum could ensure better type safety
function getAverageScore(tasks: Task[], category: string): number {
    const categoryTasks: Task[] = filterByCategory(tasks, category);
    const scoresSum = sumScores(categoryTasks);

    // would need to ask users what degree of accuracy is suitable
    return Number((scoresSum / categoryTasks.length).toFixed(1));
}

export {
    getAverageScore,
}