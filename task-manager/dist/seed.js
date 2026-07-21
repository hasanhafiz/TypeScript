export let tasks = [];
let nextId = 1;
export function getNextId() {
    return nextId++;
}
export function createSampleTask() {
    const samples = [
        { id: 1, title: "PHP", completed: true },
        { id: 2, title: "Javascript", completed: true },
        { id: 3, title: "jQuery", completed: true },
        { id: 4, title: "TypeScript", completed: false },
        { id: 5, title: "ReactJS", completed: false },
        { id: 6, title: "Laravel", completed: true },
    ];
    // console.log(samples);
    samples.forEach((sample) => {
        tasks.push({ id: sample.id, title: sample.title, completed: sample.completed });
    });
}
//# sourceMappingURL=seed.js.map