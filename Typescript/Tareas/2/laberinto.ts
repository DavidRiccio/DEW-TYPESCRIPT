namespace LaberintoGame {
    export class Celda {
        constructor(public x: number, public y: number) { }
    }

    export class Jugador extends Celda {
        energia: number = 100;

        constructor(x: number, y: number) {
            super(x, y);
        }

        mover(dx: number, dy: number) {
            this.x += dx;
            this.y += dy;
            this.energia -= 1;
        }
    }

    export class Trampa extends Celda { }
    export class ObjetoEspecial extends Celda { }
    export class Salida extends Celda { }

    class Matriz {
        datos: (Celda | null)[][];

        constructor(public filas: number, public columnas: number) {
            this.datos = new Array(filas).fill(null).map(() => new Array(columnas).fill(null));
        }

        set(x: number, y: number, valor: Celda | null) {
            if (this.enLimites(x, y)) this.datos[y][x] = valor;
        }

        enLimites(x: number, y: number): boolean {
            return x >= 0 && y >= 0 && x < this.columnas && y < this.filas;
        }

        get(x: number, y: number): Celda | null {
            return this.datos[y][x];
        }
    }

    export class Juego {
        laberinto: Matriz;
        jugador: Jugador;
        tiempoRestante: number = 60;
        juegoTerminado: boolean = false;

        constructor(public filas: number, public columnas: number) {
            this.laberinto = new Matriz(filas, columnas);
            this.jugador = new Jugador(0, 0);
            this.inicializarLaberinto();
            this.actualizarTiempo();
        }

        inicializarLaberinto() {
            this.laberinto.set(0, 0, this.jugador);

            // Colocar trampas
            for (let i = 0; i < 5; i++) {
                let x = Math.floor(Math.random() * this.columnas);
                let y = Math.floor(Math.random() * this.filas);
                while (this.laberinto.get(x, y) !== null) {
                    x = Math.floor(Math.random() * this.columnas);
                    y = Math.floor(Math.random() * this.filas);
                }
                this.laberinto.set(x, y, new Trampa(x, y));
            }

            // Colocar objetos especiales
            for (let i = 0; i < 3; i++) {
                let x = Math.floor(Math.random() * this.columnas);
                let y = Math.floor(Math.random() * this.filas);
                while (this.laberinto.get(x, y) !== null) {
                    x = Math.floor(Math.random() * this.columnas);
                    y = Math.floor(Math.random() * this.filas);
                }
                this.laberinto.set(x, y, new ObjetoEspecial(x, y));
            }

            // Colocar salida
            this.laberinto.set(this.columnas - 1, this.filas - 1, new Salida(this.columnas - 1, this.filas - 1));
        }

        moverJugador(dx: number, dy: number) {
            if (this.juegoTerminado) return;

            let nuevoX = this.jugador.x + dx;
            let nuevoY = this.jugador.y + dy;

            if (nuevoX >= 0 && nuevoX < this.columnas && nuevoY >= 0 && nuevoY < this.filas) {
                let celdaActual = this.laberinto.get(this.jugador.x, this.jugador.y);
                this.laberinto.set(this.jugador.x, this.jugador.y, new Celda(this.jugador.x, this.jugador.y));

                this.jugador.mover(dx, dy);

                let celdaNueva = this.laberinto.get(nuevoX, nuevoY);
                if (celdaNueva instanceof Trampa) {
                    this.jugador.energia -= 20;
                } else if (celdaNueva instanceof ObjetoEspecial) {
                    this.jugador.energia += 10;
                } else if (celdaNueva instanceof Salida) {
                    this.terminarJuego(true);
                    return;
                }

                this.laberinto.set(nuevoX, nuevoY, this.jugador);
                this.renderizarLaberinto();
                this.actualizarEnergia();

                if (this.jugador.energia <= 0) {
                    this.terminarJuego(false);
                }
            }
        }

        actualizarEnergia() {
            $('#energia').text(this.jugador.energia);
        }

        actualizarTiempo() {
            $('#tiempo').text(this.tiempoRestante);
        }

        renderizarLaberinto() {
            let $laberinto = $('#laberinto');
            $laberinto.empty();
            for (let y = 0; y < this.filas; y++) {
                for (let x = 0; x < this.columnas; x++) {
                    let celda = this.laberinto.get(x, y);
                    let $celda = $('<div>').addClass('celda');
                    if (celda instanceof Jugador) {
                        $celda.addClass('jugador');
                    } else if (celda instanceof Trampa) {
                        $celda.addClass('trampa');
                    } else if (celda instanceof ObjetoEspecial) {
                        $celda.addClass('objeto');
                    } else if (celda instanceof Salida) {
                        $celda.addClass('salida');
                    }
                    $laberinto.append($celda);
                }
            }
        }

        terminarJuego(gano: boolean) {
            this.juegoTerminado = true;
            if (gano) {
                alert('¡Felicidades! Has ganado el juego.');
            } else {
                alert('Lo siento, has perdido el juego.');
            }
            this.actualizarTiempo();
        }

        iniciarTemporizador() {
            let intervalo = setInterval(() => {
                if (this.juegoTerminado) {
                    clearInterval(intervalo);
                    return;
                }
                this.tiempoRestante--;
                this.actualizarTiempo();
                if (this.tiempoRestante <= 0) {
                    clearInterval(intervalo);
                    this.terminarJuego(false);
                }
            }, 1000);
        }
    }
}

$(document).ready(() => {
    let juego = new LaberintoGame.Juego(10, 10);
    $('#iniciar').on('click', () => {
        juego.renderizarLaberinto();
        juego.iniciarTemporizador();
        $(document).on('keydown', (e: JQuery.KeyDownEvent) => {
            switch (e.key) {
                case 'ArrowUp':
                    juego.moverJugador(0, -1);
                    break;
                case 'ArrowDown':
                    juego.moverJugador(0, 1);
                    break;
                case 'ArrowLeft':
                    juego.moverJugador(-1, 0);
                    break;
                case 'ArrowRight':
                    juego.moverJugador(1, 0);
                    break;
            }
        });
    });
});