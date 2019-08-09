import { NoiseTestRunner } from "../build/noise/tests.js";
const main = async () => {
    let results = NoiseTestRunner.runTests();
    for (let key in results) {
        if (results[key]) {
            document.querySelector(`.${key}`).innerHTML = "✔️";
        }
        else {
            document.querySelector(`.${key}`).innerHTML = "❌";
        }
    }
};
window.onload = main;
