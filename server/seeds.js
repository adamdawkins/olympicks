import { Countries, People } from '/lib/collections';
import countries from './countries';

export default function () {
  if (Countries.find().count() === 0) {
    countries.forEach((country) => {
      country.name = country.name.trim();
      Countries.insert(country);
    });
  }

  if (People.find().count() === 0) {
    const family = [
      'Adam',
      'Kym',
      'Paige',
      'Steve',
      'Berni',
      'Holly'
    ];

    family.forEach((name) => {
      People.insert({name});
    });
  }
}
