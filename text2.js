const bahasaIndonesia = 100
const bahasaInggris = 100
const matematika = 90
const ipa = 88
const rataRata = (bahasaIndonesia + bahasaInggris + matematika + ipa) / 4
let grade
if (rataRata >= 90 && rataRata <= 100) {
    grade = 'A'
} else if (rataRata >= 80 && rataRata < 90) {
    grade = 'B'
} else if (rataRata >= 70 && rataRata < 80) {
    grade = 'C'
} else if (rataRata >= 60 && rataRata < 70) {
    grade = 'D'
} else {
    grade = 'E'
}
const Grade = grade


console.log("Rata-rata = " + rataRata)
console.log("Grade = " + Grade)