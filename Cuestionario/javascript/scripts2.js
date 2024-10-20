let info = [];
let contenedordepreguntas = document.getElementById("question");
let currentQuestionIndex = 0; 
const loadPlayers = async () => {
    let response = await fetch('../json/Preguntas.json');
    info = await response.json();
    console.log(info); 
};

// Función para mezclar el array de preguntas
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
    }
}

// Llamamos a loadPlayers para cargar las preguntas
loadPlayers();

function printQuestions() {
    // Mezclar las preguntas antes de mostrarlas
    shuffleQuestions(info);

    if (currentQuestionIndex < info.length) {
        for (let i = 0; i < 2; i++) {
            if (currentQuestionIndex < info.length) {
                const question = info[currentQuestionIndex];
                contenedordepreguntas.innerHTML += '<h1>' + question.question + '</h1>';
                contenedordepreguntas.innerHTML += '<input type="radio" name="q' + currentQuestionIndex + '" value="a">' + question.answers.a + '<br>';
                contenedordepreguntas.innerHTML += '<input type="radio" name="q' + currentQuestionIndex + '" value="b">' + question.answers.b + '<br>';
                contenedordepreguntas.innerHTML += '<input type="radio" name="q' + currentQuestionIndex + '" value="c">' + question.answers.c + '<br>';
                contenedordepreguntas.innerHTML += '<input type="radio" name="q' + currentQuestionIndex + '" value="d">' + question.answers.d + '<br>';
                currentQuestionIndex++;
            }
        }
    } else {
        contenedordepreguntas.innerHTML += '<h2>No hay más preguntas disponibles.</h2>';
    }
}

function Correction() {
    let correctAnswers = 0;
    // Revisar cada una de las preguntas que se han mostrado
    for (let i = 0; i < currentQuestionIndex; i++) {
        // Verificar la opción seleccionada
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption) {
            const selectedValue = selectedOption.value; // a, b, c, o d
            const correctAnswer = info[i].correct; // Respuesta correcta de la pregunta
            if (selectedValue === correctAnswer) {
                correctAnswers++;
                alert(`Pregunta ${i + 1}: ¡Correcto!`);
            } else {
                alert(`Pregunta ${i + 1}: Incorrecto. La respuesta correcta es: ${correctAnswer.toUpperCase()}`);
            }
        } else {
            alert(`Pregunta ${i + 1}: No has seleccionado ninguna respuesta.`);
        }
    }
}
