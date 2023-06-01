function Counntry (name, population, square) {
    this.name = name;
    this.population = population;
    this.square = square;

    this.density = function(population, square) {
        return this.population / this.square;
    }
}

const sweden = new Counntry('Sweden', 10000000, 528447);
const poland = new Counntry('Poland', 37000000, 322575);