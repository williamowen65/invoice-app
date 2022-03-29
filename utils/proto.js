String.prototype.capitialize = function () {
    const first = this[0].toUpperCase();
    const string = first + this.slice(1);
    return string;
};
