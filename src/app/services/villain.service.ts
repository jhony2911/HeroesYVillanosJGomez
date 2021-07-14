import { Injectable } from '@angular/core';

@Injectable()
export class VillainService {
    private villains: Villain[] = [
        {
            id: 1,
            nombre: "Dr. Doom",
            bio: "Uno de los villanos más crueles de Marvel definitivamente es Dr. Doom. Nada puede detenerlo y es capaz de sacrificar a cualquiera, incluso a todos los habitantes de su país, con tal de conseguir su cometido. En una ocasión, envió al pequeño Franklin Richards al infierno. En otra fue capaz de gobernar al mundo prácticamente a base de ingenio y destreza, ya que sometió a Kilgrave y lo conectó a una máquina que le permitiría controlar la mente de todos los habitantes de mundo.",
            img: "assets/img/dr_doom2.jpg",
            aparicion: "1941-11-01",
            casa:"Marvel"
        }, {
            id: 23,
            nombre: "Jocker",
            bio: "DC Comics no se queda atrás, pues el Joker es reconocido como uno de los villanos más crueles que existen, sobre todo porque disfruta de hacer sufrir a sus víctimas y a sus héroes. En Injustice (serie no canónica, pero útil para la discusión), Joker fue capaz de engañar a Superman para que matara a Lois Lane, quien estaba esperando al bebé de ambos. Ese acontecimiento desencadenó la ira y locura del kriptoniano, transformándolo de un paladín de la justicia a un tirano.",
            img: "assets/img/jocker.jpg",
            aparicion: "1939-05-01",
            casa:"DC"
        }, {
            id: 30,
            nombre: "Galactus",
            bio: "Galactus es comúnmente conocido como el villano más fuerte de Marvel, debido a su habilidad de comer planetas; pero en realidad se queda corto en comparación con Mefisto, quien es inmortal y prácticamente invencible en los dominios de su reino.",
            img: "assets/img/galactus.jpg",
            aparicion: "1964-01-01",
            casa: "Marvel"
        }, {
            id: 43,
            nombre: "Bane",
            bio: "Batman tiene enemigos muy poderosos. Bane, por ejemplo, es físicamente más fuerte que él y ha provocado que el Caballero de la noche vaya al límite de sus habilidades, debido a sus planes perfectamente elaborados. En los cómics, el titán loco es mucho más fuerte y despiadado, y no tiene ningún tipo de remordimiento al matar héroes o villanos que no estén alineados a sus ideas.",
            img: "assets/img/bane2.jpg",
            aparicion: "1962-05-01",
            casa:"DC"
        }, {
            id: 55,
            nombre: "Thanos",
            bio: "Thanos también es un caso destacado de Marvel, ya que tanto en los cómics como en el MCU ha derrotado a todos los Avengers y aniquilado a la mitad del universo. Lleva años luchando a favor de los suyos, para brindarles independencia y soberanía sobre sus propias vidas, aunque eso conlleve sacrificar las vidas humanas que sean necesarias. Durante un tiempo, la nación de Genosha fue una tierra rica y próspera, pero debía su desarrollo a una especie de apartheid mutante que se vivía en ese lugar, en donde las personas con el Gen x eran tratados como esclavos.",
            img: "assets/img/thanos.jpg",
            aparicion: "1940-06-01",
            casa: "Marvel"
        }, {
            id: 67,
            nombre: "Magneto",
            bio: "Magneto, el terrorista mutante más famoso del mundo, tiene una idea clara de la superioridad mutante sobre los humanos comunes.",
            img: "assets/img/magneto1.jpg",
            aparicion: "1962-08-01",
            casa: "Marvel"
        }, {
            id: 78,
            nombre: "Siniestro",
            bio: "El archienemigo de Green Lantern fue creado por John Broome y Gil Kane en 1961. En un principio, fue uno de los mejores Lanterns y mentor del propio Hal Jordan. Pero su visión de la justicia le hizo abandonar el camino de los héroes, convirtiéndole en el villano que conocemos. Mientras que Green Lantern usa el poder de la valentía representado con el color verde, Siniestro usa el amarillo que representa el miedo. Y hasta tiene su propia corporación de Lanterns: los Siniestro Corps.",
            img: "assets/img/siniestro.jpg",
            aparicion: "1962-08-01",
            casa: "DC"
        }
    ]
    
    constructor() { }

    getVillains() {
        return this.villains
    }

    searchVillains(expression: string) {
        let villainsFound: Villain[] = []
        expression = expression.toLowerCase()

        for( let i = 0; i < this.villains.length; i++ ){
            let nameLower = this.villains[i].nombre.toLowerCase()
            if (nameLower.indexOf(expression) >= 0) {
                villainsFound.push(this.villains[i])
            }
        }
        return villainsFound
    }
}


export interface Villain{
    id: number,
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
}