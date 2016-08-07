import { Countries, People } from '/lib/collections';
import { Random } from 'meteor/random';

export default function () {
  let index = 0;
  const people = People.find().fetch();
  do {
    const unpickedCountries = Countries.find({personId: {$exists: false}}).fetch();
    const country = Random.choice(unpickedCountries);
    const person = people[index];

    Countries.update({_id: country._id}, {
      $set: {
        personId: person._id
      }
    });
    People.update({_id: person._id}, {
      $addToSet: {
        countries: country.code,
      }
    });
    index++;
    if ( index === people.length) {
      index = 0;
    }

    console.log(`assigning ${country.name} to ${person.name}`);
  } while (Countries.find({personId: {$exists: false}}).count() > 0);
}
