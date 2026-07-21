const input = document.getElementById("email") as HTMLInputElement;
const button = document.getElementById("send") as HTMLButtonElement;

if ( input && button ) {
button.addEventListener("click", ()=> {
    console.log(`Subscription complete for ${input.value}`);
});
}