const btn = document.querySelector('button');
let number = 1
const addElement = function () {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.textContent = number;
    number++;

    if (number % 5 ==0 ) {
        div.classList.add('circle');
    }
}
btn.addEventListener("click", addElement);


    

