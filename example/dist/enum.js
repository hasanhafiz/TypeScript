"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
    Status[Status["Pending"] = 2] = "Pending";
    Status[Status["Suspended"] = 3] = "Suspended";
})(Status || (Status = {}));
const article1 = {
    id: 1,
    title: "Understanding TypeScript Enums",
    status: Status.Active
};
//# sourceMappingURL=enum.js.map