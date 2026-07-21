var Status;
(function (Status) {
    Status["Active"] = "Active";
    Status["Inactive"] = "Inactive";
    Status["Pending"] = "Pending";
    Status["Suspended"] = "Suspended";
})(Status || (Status = {}));
const article1 = {
    id: 1,
    title: "Understanding TypeScript Enums",
    status: Status.Active
};
console.log(article1);
export {};
//# sourceMappingURL=enum-example.js.map