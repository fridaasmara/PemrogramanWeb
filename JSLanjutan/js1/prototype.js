function Mobil (jenis, jarak) {
    this.jenis = jenis;
    this.jarak = jarak;
}

Mobil.prototype.melaju = function (meter) {
    this.jarak += meter;
    return `Mobil ${this.jenis}, telah melaju`
}

Mobil.prototype.mundur = function (meter) {
    this.jarak -= meter;
    return `Mobil ${this.jenis}, telah mundur`
}

let mobil1 = new Mobil ('Avanza', 5);