
let colors = ['red','green','aqua','yellow','gray','#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

for(let i=1; i<8053; i++){
    let div = document.createElement('div');
    div.classList.add('cercle');

    div.onmouseenter = ()=>{
        let color = colors[Math.floor( Math.random()*colors.length )];
        div.style.backgroundColor = color;
        div.style.boxShadow = `0 0 0 5px ${color}`;
    }
    
    div.onmouseleave = ()=>{
        div.style.boxShadow = '0 0 0 transparent'
        div.style.backgroundColor = 'transparent';
    }

    document.body.appendChild(div);
}