// Ejercicio 1.1
$(function () {
    let msg: string = 'Hola'
    $('#output1').text(`${msg}`)
});

// Ejercicio 1.2
$(function () {
    interface Freddy {
        nombre: string
        edad: number
        pesadilla: string
    }

    const villano: Freddy = {
        nombre: "Freddy",
        edad: 31,
        pesadilla: "Elm Street"
    }
    $('#output2').text(`${villano.nombre}, ${villano.edad}, ${villano.pesadilla}`)

    // Ejercicio 2.1
    function atacar(arma: string) {
        return $('#output3').text(`Freddy te ataca en tus pesadillas con una ${arma}`)
    }

    atacar('Guante de cuchillas')

    // Ejercicio 2.2
    function saltar(metrosInput: number, metrosNormales: number = 2) {
        return $('#output4').text(`Freddy esta loco y salta ${metrosNormales} metros/Freddy esta loco y salta ${metrosInput} metros`)
    }

    saltar(10)

    // Ejercicio 3.1

    class Pesadilla {
        name: string;
        constructor(name: string) {
            this.name = name.toUpperCase()

        }
        gritar() {
            return $('#output5').text(`${this.name} esta aqui`)
        }
    }

    const pesadilla: Pesadilla = new Pesadilla('jason')

    pesadilla.gritar()

    //ejercicio 3.2
    class Pesadilla2 {
        name: string;
        gritar = (): void => { $('#output6').text(`${this.name} esta aqui`) }
        constructor(name: string) {
            this.name = name.toUpperCase()

        }
    }

    const pesadilla2: Pesadilla2 = new Pesadilla2('LeatherFace')

    pesadilla2.gritar()
});

