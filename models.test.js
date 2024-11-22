const { Menu } = require("./models.js");
const { Projects } = require("./models");
const { Books } = require("./models");
const { Contact } = require("./models");

describe("Menu Unit Tests", () => {
  test("Menu Create Should Create Success", () => {
    // Act
    const menu = new Menu(["!help", "!projects", "!books", "!contact"]);
    // Assert
    expect(menu).not.toBeNull();
  });

  test("Menu GetCommands Should Return CommandsArray", () => {
    // Arrange
    // Act
    const menu = new Menu(["!help", "!projects", "!books", "!contact"]);
    // Assert
    expect(menu.getCommands()).toContain("!help, !projects, !books, !contact");
  });
});

describe("Projects Unit Tests", () => {
  test("Projects Create Should Create Object", () => {
    // Act
    const projects = new Projects();
    // Assert
    expect(projects).not.toBeNull();
  });

  // add
  test("Projects AddProject Should Have a new project", () => {
    // Act
    const projects = new Projects();
    projects.addProject("projeto teste", "nome doido", "https://s1m0n.live");
    // Assert
    expect(projects.getProject("projeto teste")).not.toBeNull();
  });

  test("Projects ListProjects Should return a list of projects", () => {
    // Arrange
    expectArray = [
      {
        id: "projeto teste",
        link: "https://s1m0n.live",
        name: "nome doido",
      },
      {
        id: "projeto teste 1",
        link: "https://s1m0n.live",
        name: "nome doido",
      },
      {
        id: "projeto teste 2",
        link: "https://s1m0n.live",
        name: "nome doido",
      },
    ];
    // Act
    const projects = new Projects();
    projects.addProject("projeto teste", "nome doido", "https://s1m0n.live");
    projects.addProject("projeto teste 1", "nome doido", "https://s1m0n.live");
    projects.addProject("projeto teste 2", "nome doido", "https://s1m0n.live");

    // Assert
    expect(projects.listProjects()).toEqual(expectArray);
  });
});

describe("Books Unit Tests", () => {
  test("Books Create Should Create Object", () => {
    // Act
    const books = new Books();
    // Assert
    expect(books).not.toBeNull();
  });

  test("Books AddBook Should Have a new book", () => {
    // Act
    const books = new Books();
    books.addBook("Livro teste", "nome doido", "https://s1m0n.live");
    // Assert
    expect(books.getBook("Livro teste")).not.toBeNull();
  });

  test("Book ListBook Should return a list of books", () => {
    // Arrange
    expectArray = [
      {
        id: "livro teste",
        link: "https://s1m0n.live",
        name: "nome doido",
      },
      {
        id: "livro teste 1",
        link: "https://s1m0n.live",
        name: "nome doido",
      },
      {
        id: "livro teste 2",
        link: "https://s1m0n.live",
        name: "nome doido",
      },
    ];
    // Act
    const books = new Books();
    books.addBook("livro teste", "nome doido", "https://s1m0n.live");
    books.addBook("livro teste 1", "nome doido", "https://s1m0n.live");
    books.addBook("livro teste 2", "nome doido", "https://s1m0n.live");

    // Assert
    expect(books.listBooks()).toEqual(expectArray);
  });
});

describe("Contact Unit Tests", () => {
  test("Contact Constructor Should create a contact", () => {
    // Act
    const contact = new Contact();
    // Assert
    expect(contact).not.toBeNull();
  });

  test("Contact GetEmail should return email", () => {
    // Arrange
    let email = "lucasimonmendes@hotmail.com";
    // Act
    const contact = new Contact(email);
    // Assert
    expect(contact.getEmail()).toEqual(email);
  });
});
