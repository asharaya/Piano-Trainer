
/* CANCIONES */

// Lista de canciones
const SONGS = [
    
    {
        id: "twinkle",
        title: "Twinkle, Twinkle, Little Star",
        composer: "Traditional",
        bpm: 90,

        // Notas de la canción
        notes: [
            { pitch: "C4", beats: 1 },
            { pitch: "C4", beats: 1 },
            { pitch: "G4", beats: 1 },
            { pitch: "G4", beats: 1 },
            { pitch: "A4", beats: 1 },
            { pitch: "A4", beats: 1 },
            { pitch: "G4", beats: 2 },

            { pitch: "F4", beats: 1 },
            { pitch: "F4", beats: 1 },
            { pitch: "E4", beats: 1 },
            { pitch: "E4", beats: 1 },
            { pitch: "D4", beats: 1 },
            { pitch: "D4", beats: 1 },
            { pitch: "C4", beats: 2 },

            { pitch: "G4", beats: 1 },
            { pitch: "G4", beats: 1 },
            { pitch: "F4", beats: 1 },
            { pitch: "F4", beats: 1 },
            { pitch: "E4", beats: 1 },
            { pitch: "E4", beats: 1 },
            { pitch: "D4", beats: 2 },

            { pitch: "G4", beats: 1 },
            { pitch: "G4", beats: 1 },
            { pitch: "F4", beats: 1 },
            { pitch: "F4", beats: 1 },
            { pitch: "E4", beats: 1 },
            { pitch: "E4", beats: 1 },
            { pitch: "D4", beats: 2 },

            { pitch: "C4", beats: 1 },
            { pitch: "C4", beats: 1 },
            { pitch: "G4", beats: 1 },
            { pitch: "G4", beats: 1 },
            { pitch: "A4", beats: 1 },
            { pitch: "A4", beats: 1 },
            { pitch: "G4", beats: 2 },

            { pitch: "F4", beats: 1 },
            { pitch: "F4", beats: 1 },
            { pitch: "E4", beats: 1 },
            { pitch: "E4", beats: 1 },
            { pitch: "D4", beats: 1 },
            { pitch: "D4", beats: 1 },
            { pitch: "C4", beats: 2 }
        ]
    },
    
    {
        id: "ode-to-joy",
        title: "Ode to Joy",
        composer: "Ludwig van Beethoven",
        bpm: 100,

        // Notas de la segunda canción
        notes: [
            { pitch: "E4", beats: 1 },
            { pitch: "E4", beats: 1 },
            { pitch: "F4", beats: 1 },
            { pitch: "G4", beats: 1 },

            { pitch: "G4", beats: 1 },
            { pitch: "F4", beats: 1 },
            { pitch: "E4", beats: 1 },
            { pitch: "D4", beats: 1 },

            { pitch: "C4", beats: 1 },
            { pitch: "C4", beats: 1 },
            { pitch: "D4", beats: 1 },
            { pitch: "E4", beats: 1 },

            { pitch: "E4", beats: 1.5 },
            { pitch: "D4", beats: 0.5 },
            { pitch: "D4", beats: 2 },

            { pitch: "E4", beats: 1 },
            { pitch: "E4", beats: 1 },
            { pitch: "F4", beats: 1 },
            { pitch: "G4", beats: 1 },

            { pitch: "G4", beats: 1 },
            { pitch: "F4", beats: 1 },
            { pitch: "E4", beats: 1 },
            { pitch: "D4", beats: 1 },

            { pitch: "C4", beats: 1 },
            { pitch: "C4", beats: 1 },
            { pitch: "D4", beats: 1 },
            { pitch: "E4", beats: 1 },

            { pitch: "D4", beats: 1.5 },
            { pitch: "C4", beats: 0.5 },
            { pitch: "C4", beats: 2 }
        ]
    },
    
    {
        id: "fur-elise",
        title: "Für Elise",
        composer: "Ludwig van Beethoven",
        bpm: 60,

        // Notas de la tercera canción
        notes: [
            { pitch: "E5", beats: 0.25 },
            { pitch: "D#5", beats: 0.25 },

            { pitch: "E5", beats: 0.25 },
            { pitch: "D#5", beats: 0.25 },
            { pitch: "E5", beats: 0.25 },

            { pitch: "B4", beats: 0.25 },
            { pitch: "D5", beats: 0.25 },
            { pitch: "C5", beats: 0.25 },

            { pitch: "A4", beats: 0.75 },
            { pitch: "C4", beats: 0.25 },
            { pitch: "E4", beats: 0.25 },
            { pitch: "A4", beats: 0.25 },

            { pitch: "B4", beats: 0.75 },
            { pitch: "E4", beats: 0.25 },
            { pitch: "G#4", beats: 0.25 },
            { pitch: "B4", beats: 0.25 },

            { pitch: "C5", beats: 0.75 },
            { pitch: "E4", beats: 0.25 },
            { pitch: "E5", beats: 0.25 },
            { pitch: "D#5", beats: 0.25 },

            { pitch: "E5", beats: 0.25 },
            { pitch: "D#5", beats: 0.25 },
            { pitch: "E5", beats: 0.25 },

            { pitch: "B4", beats: 0.25 },
            { pitch: "D5", beats: 0.25 },
            { pitch: "C5", beats: 0.25 },

            { pitch: "A4", beats: 0.75 },
            { pitch: "C4", beats: 0.25 },
            { pitch: "E4", beats: 0.25 },
            { pitch: "A4", beats: 0.25 },

            { pitch: "B4", beats: 0.75 },
            { pitch: "E4", beats: 0.25 },
            { pitch: "C5", beats: 0.25 },
            { pitch: "B4", beats: 0.25 },

            { pitch: "A4", beats: 1.5 }
        ]
    }

];


/* TIEMPOS DE LAS NOTAS */

// Calcula cuándo empieza cada nota
function withStartBeats(notes) {
    let beat = 0;

    return notes.map((note) => {

        // Agrega el tiempo de inicio a cada nota
        const timed = { ...note, start: beat };

        // Suma la duración para calcular la siguiente
        beat += note.beats;

        return timed;
    });
}


/* INICIAR UNA CANCIÓN */

// Prepara el juego con la canción seleccionada
function startSong(selectedSong) {

    // Guarda la canción y calcula sus tiempos
    song = {
        ...selectedSong,
        notes: withStartBeats(selectedSong.notes)
    };

    // Reinicia los valores del juego
    songBeat = -3;
    nextIndex = 0;
    lastTime = null;
    misses = 0;
    playing = true;

    // Vuelve a mostrar el área de notas
    noteArea.hidden = false;

    // Muestra nuevamente los contadores
    document.querySelector("#progress").parentElement.hidden = false;
    document.querySelector("#misses").parentElement.hidden = false;

    // Muestra el nombre de la canción
    document.querySelector("#song-title").textContent = song.title;

    // Reinicia los contadores
    document.querySelector("#progress").textContent =
        "0 / " + song.notes.length;

    document.querySelector("#misses").textContent = "0";

    // Oculta el menú y muestra el juego
    document.querySelector("#menu").hidden = true;
    document.querySelector("#game").hidden = false;

    // Crea los bloques y comienza la animación
    createNoteBlocks();
    animationId = requestAnimationFrame(frame);

}

/* MODO LIBRE */

// Permite tocar el piano sin una canción
function startFreePlay() {

    // Detiene cualquier animación anterior
    playing = false;

    if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }

    // No hay una canción seleccionada
    song = null;

    // Muestra el título del modo libre
    document.querySelector("#song-title").textContent =
        "FREE MODE";

    // Oculta el menú y muestra el piano
    document.querySelector("#menu").hidden = true;
    document.querySelector("#game").hidden = false;

    // Oculta los contadores
    document.querySelector("#progress").parentElement.hidden = true;
    document.querySelector("#misses").parentElement.hidden = true;

    // Oculta el área de las notas
    noteArea.hidden = true;
}

// Abre el modo libre al presionar el botón
document.querySelector("#free-play").addEventListener("click", () => {
    startFreePlay();
});

/* REGRESAR AL MENÚ */

// Detiene la canción y muestra el menú principal
function backToMenu() {

    // Limpia la canción seleccionada
    song = null;

    // Quita los bloques de la canción anterior
    noteArea.querySelectorAll(".note-block").forEach((block) => {
        block.remove();
    });

    // Detiene el avance de la canción
    playing = false;

    // Cancela la animación
    if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }

    // Reinicia el tiempo de la animación
    lastTime = null;

    // Oculta el juego y muestra el menú
    document.querySelector("#game").hidden = true;
    document.querySelector("#menu").hidden = false;
}

// Detecta cuando presionamos para regresar al menú
document.querySelector("#back-button").addEventListener("click", () => {
    backToMenu();
});


/* MENÚ DE CANCIONES */

// Busca el espacio donde aparecen las canciones
const songList = document.querySelector("#song-list");

// Crea un botón para cada canción
SONGS.forEach((song) => {

    const button = document.createElement("button");

    // Muestra el nombre de la canción
    button.textContent = song.title;

    // Inicia la canción seleccionada
    button.addEventListener("click", () => {
        startSong(song);
    });

    // Agrega el botón al menú
    songList.appendChild(button);
});


/* TECLAS DEL PIANO */

// Conecta las teclas de la compu con las notas
const KEY_TO_PITCH = {
    KeyA: "C4",
    KeyW: "C#4",
    KeyS: "D4",
    KeyE: "D#4",
    KeyD: "E4",
    KeyF: "F4",
    KeyT: "F#4",
    KeyG: "G4",
    KeyY: "G#4",
    KeyH: "A4",
    KeyU: "A#4",
    KeyJ: "B4",
    KeyK: "C5",
    KeyO: "C#5",
    KeyL: "D5",
    KeyP: "D#5",
    Semicolon: "E5"
};

// Las 10 teclas blancas
const WHITE_KEYS = [
    "C4", "D4", "E4", "F4", "G4",
    "A4", "B4", "C5", "D5", "E5"
];

// Las 7 teclas negras
const BLACK_KEYS = [
    "C#4", "D#4", "F#4", "G#4",
    "A#4", "C#5", "D#5"
];


/* BLOQUES DE LAS NOTAS */

// Cantidad de píxeles que representa un tiempo musical
const PX_PER_BEAT = 120;

// Busca el área donde caen las notas
const noteArea = document.querySelector("#note-area");

// Guarda la canción que estamos utilizando
let song = null;

// Indica cuánto ha avanzado la canción
let songBeat = 0;


/* CONTROL DE LA ANIMACIÓN */

// Indica si la canción está reproduciéndose
let playing = false;

// Guarda el tiempo del fotograma anterior
let lastTime = null;

// Indica cuál es la siguiente nota que debemos tocar
let nextIndex = 0;

// Guarda el identificador de la animación
let animationId = null;


// Crea los bloques musicales de una canción
function createNoteBlocks() {

    // Limpia los bloques anteriores
    noteArea.querySelectorAll(".note-block").forEach((block) => {
        block.remove();
    });

    // Recorre las notas de la canción
    song.notes.forEach((note) => {

        // Crea un bloque para cada nota
        const block = document.createElement("div");
        block.className = "note-block";

        // Guarda la nota musical
        block.dataset.pitch = note.pitch;
        
        // Busca la tecla correspondiente solamente dentro del piano
        const key = piano.querySelector(
            `[data-pitch="${note.pitch}"]`
        );

        // Calcula la posición horizontal de la tecla
        const keyPosition = key.getBoundingClientRect();
        const areaPosition = noteArea.getBoundingClientRect();

        // Coloca el bloque encima de su tecla
        block.style.left =
            (keyPosition.left - areaPosition.left) + "px";

        block.style.width = keyPosition.width + "px";

        // Calcula la altura según la duración de la nota
        block.style.height =
            (note.beats * PX_PER_BEAT) + "px";

        // Agrega el bloque al área de notas
        noteArea.appendChild(block);
    });
}

// Coloca los bloques según el avance de la canción
function draw() {

    const HIT_Y = noteArea.clientHeight;

    // Busca todos los bloques creados
    const blocks = noteArea.querySelectorAll(".note-block");

    blocks.forEach((block, index) => {

        // Obtiene los datos de la nota
        const note = song.notes[index];

        // Calcula la posición vertical del bloque
        const bottom = HIT_Y -
            (note.start - songBeat) * PX_PER_BEAT;

        const top = bottom - note.beats * PX_PER_BEAT;

        // Mueve el bloque a su posición
        block.style.transform = `translateY(${top}px)`;
    });
}


/* ANIMACIÓN DE LAS NOTAS */

// Actualiza la posición de las notas en cada fotograma
function frame(now) {

    // Calcula cuánto tiempo pasó desde el fotograma anterior
    if (lastTime !== null) {

        const seconds = Math.min(
            (now - lastTime) / 1000,
            0.1
        );

        // Avanza según la velocidad de la canción
        songBeat += seconds * (song.bpm / 60);

        // Busca la siguiente nota que debemos tocar
        const next = song.notes[nextIndex];

        // Detiene el avance cuando la nota llega a la línea
        if (next && songBeat >= next.start) {
            songBeat = next.start;
        }
    }

    // Guarda el tiempo actual
    lastTime = now;

    // Actualiza las posiciones de los bloques
    draw();

    // Continúa la animación mientras esté activa
    if (playing) {
        animationId = requestAnimationFrame(frame);
    }

}   


/* PIANO */

// Busca el piano en el HTML
const piano = document.querySelector("#piano");

// Crea las teclas del piano
function createPiano() {

    // Crea las teclas blancas
    WHITE_KEYS.forEach((pitch) => {
        const key = document.createElement("div");

        // Estilo y nota musical
        key.className = "white-key";
        key.dataset.pitch = pitch;

        // Busca la letra correspondiente del teclado
        const code = Object.keys(KEY_TO_PITCH).find(
            keyCode => KEY_TO_PITCH[keyCode] === pitch
        );

        // Muestra la letra en la tecla
        key.textContent = code === "Semicolon"
            ? ";"
            : code.replace("Key", "");

        // Activa la tecla al presionar el mouse
        key.addEventListener("mousedown", () => {
            pressKey(pitch);
        });

        // Desactiva la tecla al soltar el mouse
        key.addEventListener("mouseup", () => {
            releaseKey(pitch);
        });

        // Desactiva la tecla si el mouse sale del botón
        key.addEventListener("mouseleave", () => {
            releaseKey(pitch);
        });

        // Agrega la tecla blanca al piano
        piano.appendChild(key);
    });

    // Crea las teclas negras
    BLACK_KEYS.forEach((pitch) => {
        const key = document.createElement("div");

        // Estilo y la nota musical
        key.className = "black-key";
        key.dataset.pitch = pitch;

        // Busca la letra correspondiente del teclado
        const code = Object.keys(KEY_TO_PITCH).find(
            keyCode => KEY_TO_PITCH[keyCode] === pitch
        );

        // Muestra la letra en la tecla
        key.textContent = code.replace("Key", "");

        // Activa la tecla al presionar el mouse
        key.addEventListener("mousedown", () => {
            pressKey(pitch);
        });

        // Desactiva la tecla al soltar el mouse
        key.addEventListener("mouseup", () => {
            releaseKey(pitch);
        });

        // Desactiva la tecla si el mouse sale del botón
        key.addEventListener("mouseleave", () => {
            releaseKey(pitch);
        });

        // Agrega la tecla negra al piano
        piano.appendChild(key);
    });
}

// Ejecuta la función para mostrar el piano
createPiano();


/* FINALIZAR CANCIÓN */

// Muestra los resultados al terminar
function finishSong() {

    // Detiene la animación
    playing = false;

    if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }

    // Muestra el resultado final
    document.querySelector("#final-results").textContent =
        song.title + " | Notes: " + nextIndex +
        " / " + song.notes.length +
        " | Misses: " + misses;

    // Oculta el juego y muestra los resultados
    document.querySelector("#game").hidden = true;
    document.querySelector("#results").hidden = false;
}


/* REPETIR CANCIÓN */

// Vuelve a iniciar la misma canción
document.querySelector("#play-again").addEventListener("click", () => {

    // Oculta los resultados
    document.querySelector("#results").hidden = true;

    // Busca la canción original
    const selectedSong = SONGS.find((item) => item.id === song.id);

    // Reinicia la canción
    startSong(selectedSong);
});


/* CONTROL DE ACIERTOS Y ERRORES */

// Contador de errores
let misses = 0;

// Revisa si la nota presionada es correcta
function checkNote(pitch) {

    // Solo revisa si hay una canción activa
    if (!playing || !song) return;

    // Busca la siguiente nota de la canción
    const next = song.notes[nextIndex];

    if (!next) return;

    // Solo permite responder cuando la nota llega a la línea
    if (songBeat < next.start) return;

    if (pitch === next.pitch) {

        // Busca los bloques de la canción
        const blocks = noteArea.querySelectorAll(".note-block");

        // Oculta el bloque que acabamos de tocar
        blocks[nextIndex].style.visibility = "hidden";

        // Avanza a la siguiente nota
        nextIndex++;

        // Actualiza el progreso
        document.querySelector("#progress").textContent =
            nextIndex + " / " + song.notes.length;

        // Comprueba si ya tocamos todas las notas
        if (nextIndex === song.notes.length) {
            finishSong();
        }

    } else {

        // Aumenta los errores
        misses++;

        // Actualiza el contador
        document.querySelector("#misses").textContent = misses;

        // Busca la tecla incorrecta
        const key = piano.querySelector(
            `[data-pitch="${pitch}"]`
        );

        // Muestra el error visualmente
        if (key) {
            key.classList.add("wrong");
        }
    }
}

/* EFECTOS Y SONIDOS DE LAS TECLAS */

// Función para iluminar y reproducir una tecla
function pressKey(pitch) {

    // Busca la nota solamente dentro del piano
    const key = piano.querySelector(
        `[data-pitch="${pitch}"]`
    );

    if (key) {

        // Ilumina la tecla
        key.classList.add("active");

        // Activa el audio si está suspendido
        if (audio.state === "suspended") {
            audio.resume();
        }

        // Reproduce la nota musical
        playTone(pitch);
        
        // Comprueba si la nota es correcta
        checkNote(pitch);   
    }
}

// Función para quitar la iluminación
function releaseKey(pitch) {

    // Busca la nota solamente dentro del piano
    const key = piano.querySelector(
        `[data-pitch="${pitch}"]`
    );

    // Quita el color al soltar la tecla
    if (key) {
        // Quita los efectos al soltar la tecla
        key.classList.remove("active", "wrong");
    }
}


/* EVENTOS DEL TECLADO */

// Detecta cuando se presiona una tecla
document.addEventListener("keydown", (event) => {

    // Evita que una tecla se repita al mantenerla presionada
    if (event.repeat) return;

    // Busca la nota correspondiente a la tecla
    const pitch = KEY_TO_PITCH[event.code];

    // Ignora las teclas que no pertenecen al piano
    if (!pitch) return;

    // Ilumina la tecla correspondiente
    pressKey(pitch);
});

// Detecta cuando se suelta una tecla
document.addEventListener("keyup", (event) => {
    const pitch = KEY_TO_PITCH[event.code];

    // Quita la iluminación de la tecla
    if (pitch) {
        releaseKey(pitch);
    }
});


/* SONIDOS DEL PIANO */

// Sistema de audio del navegador
const audio = new AudioContext();

// Notas musicales
const NAMES = [
    "C", "C#", "D", "D#", "E", "F",
    "F#", "G", "G#", "A", "A#", "B"
];

// Convierte una nota musical en un número MIDI
function midiOf(pitch) {
    const octave = Number(pitch.slice(-1));

    return (octave + 1) * 12 +
        NAMES.indexOf(pitch.slice(0, -1));
}

// Función para reproducir el sonido de una nota
function playTone(pitch) {

    // Crea el sonido y controla su volumen
    const osc = audio.createOscillator();
    const gain = audio.createGain();

    // Define el tipo de sonido
    osc.type = "triangle";

    // Calcula la frecuencia de la nota
    osc.frequency.value =
        440 * 2 ** ((midiOf(pitch) - 69) / 12);

    // Graduación del sonido
    gain.gain.setValueAtTime(0.3, audio.currentTime);

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audio.currentTime + 1
    );

    // Conecta el sonido con los parlantes
    osc.connect(gain).connect(audio.destination);

    // Inicia y detiene el sonido
    osc.start();
    osc.stop(audio.currentTime + 1);
}


/* MENÚ DESDE RESULTADOS */

// Regresa al menú principal
document.querySelector("#results-menu").addEventListener("click", () => {

    // Oculta los resultados
    document.querySelector("#results").hidden = true;

    // Regresa al menú
    backToMenu();
});

