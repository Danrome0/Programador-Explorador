function ver(){
    let selec;
    selec = document.getElementById('seleccion').value;
    if (selec == 'Motor'){
        document.getElementById('mot').style.display = 'block';
        document.getElementById('bat').style.display = 'none';
        document.getElementById('cont').style.display = 'none';
    }
    else if (selec == 'Batería'){
        document.getElementById('mot').style.display = 'none';
        document.getElementById('bat').style.display = 'block';
        document.getElementById('cont').style.display = 'none';
    }
    else if (selec == 'Controladores'){
        document.getElementById('mot').style.display = 'none';
        document.getElementById('bat').style.display = 'none';
        document.getElementById('cont').style.display = 'block';
    }
    else{
        document.getElementById('mot').style.display = 'none';
        document.getElementById('bat').style.display = 'none';
        document.getElementById('cont').style.display = 'none';
    }
}
