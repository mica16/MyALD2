export default class HomeController {

    private name: String;

    constructor() {
        this.name = 'Hello';
    }

    generateNumbersList() {
        let ratings = [];

        for (let i = 0; i < 500; i++) {
            ratings.push(i);
        }

        return ratings;
    }
}
