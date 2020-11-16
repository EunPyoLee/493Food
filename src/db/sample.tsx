const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('src/db/493Food.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the 493Food database.');
});

db.serialize(() => {
  db.each(`SELECT username FROM users`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.username);
  });
  db.each(`SELECT name FROM recipes`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.name);
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
