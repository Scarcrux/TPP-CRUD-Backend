const { Campus, Student, db }  = require('./server/db');
const models = require('./server/db');
// randomizers for seeding
const faker = require('faker');
const avatar = require('cartoon-avatar');
const chance = require('chance')(12345);

const numOfStudents = 100;
const numOfCampuses = 20;

const doTimes = (n, func) => {
  const result = [];
  while (n--){
    result.push(func());
  };
  return result;
};

const randomCampus = () => {
  const streetAddress = chance.address({short_suffix: true});
  const city = faker.address.city();
  const cityStateZip = `${city}, ${chance.state({country: 'us'})} ${chance.zip()}`;
  return Campus.build({
    name: `${city} College`,
    imageUrl: faker.image.cats(),
    address: streetAddress + ", " + cityStateZip,
    description: faker.lorem.paragraphs(3),
  });
};

const randomStudent = () => {
  const gender = chance.gender();
  const first_name = chance.first({ gender });
  const last_name = chance.last()
  return Student.build({
    firstName: first_name,
    lastName: last_name,
    email: `${first_name.toLowerCase()}.${last_name.toLowerCase().replace(/\s/g,'')}@academy.edu`,
    gpa: chance.floating({min: 0.5, max: 4, fixed: 1}),
    imageUrl: avatar.generate_avatar({ gender }),
  });
};

const campuses = doTimes(numOfCampuses, randomCampus);
const students = doTimes(numOfStudents, randomStudent);

const seed = () => {
  return Promise.all(campuses.map(campus => campus.save()))
    .then(() => Promise.all(students.map(student => student.save()
      .then(student => {
        const randomCampus = chance.pickone(campuses);
        //console.log(randomCampus)
        student.addCampus(randomCampus)
      })
    ))
  );
};

console.log('Syncing...');

db.sync({force: true})
  .then(() => {
    console.log('Seeding...');
    return seed();
  })
  .then(()=> console.log('Database has seeded!'))
  .catch(err => console.log('!! Error while seeding !!', err))
  .finally(() => {
    // causes a crash: db.close();
    return null;
});
