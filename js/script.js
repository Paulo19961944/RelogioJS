document.addEventListener("DOMContentLoaded", () => {
    const hoursDisplay = document.getElementById("hours"); // Importa a ID das Horas
    const minutesDisplay = document.getElementById("minutes"); // Importa a ID dos Minutos
    const secondsDisplay = document.getElementById("seconds"); // Importa a ID dos Segundos

    function updateClock() {
        const now = new Date(); // Instancia o Time
        const hours = now.getHours(); // Captura as Horas
        const minutes = now.getMinutes(); // Captura os Minutos
        const seconds = now.getSeconds(); // Captura os Segundos

        hoursDisplay.textContent = hours.toString().padStart(2, '0'); // Formata o Display
        minutesDisplay.textContent = minutes.toString().padStart(2, '0'); // Formata o Display
        secondsDisplay.textContent = seconds.toString().padStart(2, '0'); // Formata o Display
    }

    // Chama a função updateClock a cada segundo (1000 milissegundos)
    setInterval(updateClock, 1000);

    // Chama a função para configurar o relógio inicial
    updateClock();
});
