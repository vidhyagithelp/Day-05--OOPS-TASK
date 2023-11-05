class Uber {
  isAutoSelected;
  amount;
  distanceTravelled;

  constructor(isAutoSelected, distance) {
    this.isAutoSelected = isAutoSelected;
    this.distanceTravelled = distance;
  }
  getUber() {
    if (this.isAutoSelected) {
      this.amount = this.distanceTravelled * 10;
      return this.amount;
    } else {
      this.amount = this.distanceTravelled * 15;
      return this.amount;
    }
  }
}

let person1TravelDetail = new Uber(true, 10);
let person2TravelDetail = new Uber(false, 25);

console.log(person2TravelDetail.getUber());
console.log(person1TravelDetail.getUber());
console.log(person2TravelDetail.getUber());
