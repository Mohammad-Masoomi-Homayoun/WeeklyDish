export const Home = () => {
    const home = document.createElement("div")
    home.innerText = "Hello world!";
    home.classList.add("bg-blue-600", "items-center");

    return home;
}