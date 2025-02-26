var tomb = ['A', 'B', 'D']

const doboz1 = document.querySelectorAll('.card')
doboz1.addEventListener('click', () => {
    console.log(tomb[0])
    doboz1.innerHTML = tomb[0]
})