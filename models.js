// menu (commands)
class Menu {
  constructor(commands) {
    this.commands = commands;
  }

  getCommands() {
    return this.commands.join(", ");
  }
}

// projects (project name + link)
class Projects {
  constructor() {
    this.projects = {};
  }

  addProject(id, name, link) {
    this.projects[id] = { name, link };
  }

  getProject(id) {
    return this.projects[id] || null;
  }

  listProjects() {
    return Object.entries(this.projects).map(([id, project]) => ({
      id,
      name: project.name,
      link: project.link,
    }));
  }
}

// books (name + link)
class Books {
  constructor() {
    this.books = {};
  }

  addBook(id, name, link) {
    this.books[id] = { name, link };
  }

  getBook(id) {
    return this.books[id] || null;
  }

  listBooks() {
    return Object.entries(this.books).map(([id, book]) => ({
      id,
      name: book.name,
      link: book.link,
    }));
  }
}

// contact (email)
class Contact {
  constructor(email) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }
}

module.exports = {
  Menu,
  Projects,
  Books,
  Contact,
};
