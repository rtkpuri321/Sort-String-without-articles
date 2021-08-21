const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function rem_a_t_an(str)
{
    return str.replace(/^(A |An |The )/i, '').trim();
}

const sortband = bands.sort((a,b)=> rem_a_t_an(a)>rem_a_t_an(b)? 1:-1);

console.log(sortband);

let list = document.getElementById("bands");

sortband.forEach((item)=>{
    let li = document.createElement('li');
    li.innerText=item;
    list.appendChild(li);
})
