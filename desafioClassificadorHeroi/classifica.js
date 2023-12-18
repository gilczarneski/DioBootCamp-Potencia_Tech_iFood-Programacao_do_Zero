let nomeDoHeroi = 'CamaleãoProgramador'
let experienciaDoHeroi = 7519

let nivel

if (experienciaDoHeroi < 1000) {
  nivel = 'Ferro'
} else if (experienciaDoHeroi <= 2000) {
  nivel = 'Bronze'
} else if (experienciaDoHeroi <= 5000) {
  nivel = 'Prata'
} else if (experienciaDoHeroi <= 7000) {
  nivel = 'Ouro'
} else if (experienciaDoHeroi <= 8000) {
  nivel = 'Platina'
} else if (experienciaDoHeroi <= 9000) {
  nivel = 'Ascendente'
} else if (experienciaDoHeroi <= 10000) {
  nivel = 'Imortal'
} else {
  nivel = 'Radiante'
}

console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivel}`)
