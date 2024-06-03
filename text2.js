const bahasaIndonesia = 100
const bahasaInggris = 100
const matematika = 90
const ipa = 88
const rataRata = (bahasaIndonesia + bahasaInggris + matematika + ipa) / 4

if (rataRata >= 90) {
    console.log("Rata - rata = " + rataRata)
    console.log("Grade = A")
}  else if (rataRata >= 80) {
    console.log("Rata - rata = " + rataRata)
    console.log("Grade = B")
}  else if (rataRata >= 70) {
    console.log("Rata - rata = " + rataRata)
    console.log("Grade = C")
}  else if (rataRata >= 60) {
    console.log("Rata - rata = " + rataRata)
    console.log("Grade = D")
} else {
    console.log("Rata - rata = " + rataRata)
    console.log("Grade = E")
}