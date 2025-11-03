function atualizarRelogio() {
    const agora = new Date();
    let dia = agora.getDate().toString().padStart(2, '0');
    let mes = (agora.getMonth() + 1).toString().padStart(2, '0');
    let ano = agora.getFullYear();
    let horas = agora.getHours().toString().padStart(2, '0');
    let minutos = agora.getMinutes().toString().padStart(2, '0');
    document.getElementById('data').textContent = `${dia}/${mes}/${ano}`;
    document.getElementById('hora').textContent = `${horas}:${minutos}`;
}