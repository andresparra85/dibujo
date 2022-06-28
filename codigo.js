function dibujar() {
    var canvas = document.getElementById('lienzo1');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (contra reloj)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho

        ctx.moveTo(75, 125); // Columna
        ctx.lineTo(75, 280);

        ctx.moveTo(30, 202); // Brazos
        ctx.lineTo(125, 202);

        ctx.moveTo(30, 202); // mano derecha
        ctx.lineTo(20, 222);

        ctx.moveTo(125, 202); // mano izquierda
        ctx.lineTo(135, 182);

        ctx.moveTo(75, 280); // pierna derecha
        ctx.lineTo(30, 320);

        ctx.moveTo(75, 280); // pierna izquierda
        ctx.lineTo(125, 320);

        ctx.stroke();
    }
}