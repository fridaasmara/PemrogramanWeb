function IsiAir (botol, air) {
    this.botol = botol;
    this.air = air;
}

IsiAir.prototype.isi = function (liter) {
    this.air += liter;
    return `Botol ${this.botol}, telah diisi air`
}

IsiAir.prototype.buang = function (liter) {
    this.air -= liter;
    return `Air di botol ${this.botol}, telah berkurang`
}

let botol1 = new IsiAir ('1', 5);
let botol2 = new IsiAir ('2', 3);        