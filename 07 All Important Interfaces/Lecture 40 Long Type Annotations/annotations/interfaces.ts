const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
};
// This type annotation right here is really long. It's kind of hard to read. And if we had any more properties on this object, that type annotation would become even harder to read.
// In addition, if we added in more functions that expected to be we expected to call with Old Civic. We would then be duplicating this type annotation for each of those different functions.
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
