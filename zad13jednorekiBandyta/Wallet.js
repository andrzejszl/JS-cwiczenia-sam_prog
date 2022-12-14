class Wallet {
    constructor(money) {
        let _money = money;
        //pobnieranie aktualnej zawartosci portfela
        this.getWalletValue = () => _money;

        //sprawdzanie czy uzytkownik posiada wymagana ilosc srodkow

        this.checkCanPlay = value => {
            if (_money >= value) return true;
            return false;
        }

        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error('nieprawidlowy typ dzialania')
                }
            } else {
                console.log(typeof value);
                throw new Error('nieprawidlowa wartosc')
            }
        }
    }
}