const input = document.getElementById("email");
const button = document.getElementById("send");
if (input && button) {
    button.addEventListener("click", () => {
        console.log(`Subscription complete for ${input.value}`);
    });
}
export {};
//# sourceMappingURL=html-example.js.map