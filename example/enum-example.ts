enum Status {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
    Suspended = "Suspended",
}

type Article = {
    id: number;
    title: string;
    status: Status;
}

const article1: Article = {
    id: 1,
    title: "Understanding TypeScript Enums",
    status: Status.Active
};

console.log(article1);
