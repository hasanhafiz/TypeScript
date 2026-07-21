export type Task = {
    id: number,
    title: string,
    completed: boolean
}

export let tasks: Task[] = [];
let nextId = 1;

export function getNextId(): number {
    return nextId++;
}

export function createSampleTask(): void {
    const samples: Task[] = [
        { id: 1, title: "PHP", completed: true },
        { id: 2, title: "Javascript", completed: true },
        { id: 3, title: "jQuery", completed: true },
        { id: 4, title: "TypeScript", completed: false },
        { id: 5, title: "ReactJS", completed: false },
        { id: 6, title: "Laravel", completed: true },
        { id: 7, title: "VueJS", completed: false },
        { id: 8, title: "Angular", completed: false },
    ];

    // console.log(samples);

    samples.forEach((sample) => {
        tasks.push({ id: sample.id, title: sample.title, completed: sample.completed });
    })
}