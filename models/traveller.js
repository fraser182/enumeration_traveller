const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0)
};

// ##################################
// #################################

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transports = this.journeys.map((journey) => {
    return journey.transport;
  });
  const nonDuplicateTransports = [...new Set(transports)];
  return nonDuplicateTransports
};

// ######## QUICK SET METHOD
// Traveller.prototype.getUniqueModesOfTransport = function () {
//   return [...new Set(this.journeys.map((journey) => {
//     return journey.transport;
//   }))]
// };

// Other method
// Traveller.prototype.getUniqueModesOfTransport = function () {
//   let transportAllTypes = this.journeys.map((journey) => {
//     return journey.transport;
//   });
//   return transportAllTypes.filter(function(transport, index, self){
//     // match the index of that journey === to the index we are looking through
//     return self.indexOf(transport) === index;
//   })
// };

// or remove 3rd value of brackets, which just represents the method.
// Traveller.prototype.getUniqueModesOfTransport = function () {
//   let transportAllTypes = this.journeys.map((journey) => {
//     return journey.transport;
//   });
//   return transportAllTypes.filter(function(transport, index){
//     // match the index of that journey === to the index we are looking through
//     return transportAllTypes.indexOf(transport) === index;
//   })
// };
//
// Traveller.prototype.getUniqueModesOfTransport = function () {
//   let uniqueList = [];
//   this.journeys.forEach((journey) => {
//     if (!uniqueList.includes(journey.transport)){
//       uniqueList.push(journey.transport)
//     }
//   });
//   return uniqueList
// };


module.exports = Traveller;
