const gotoToDoComponent = () => {
    cy.visit("/tasks");
    cy.get("[data-test-id='todo']");
};

const createTask = (title, details) => {
    gotoToDoComponent();
    cy.get("[data-test-id='task-list-add-button']").click();
    cy.get("[data-test-id='task-editor']");
    cy.get("[data-test-id='task-editor-title']").type(title);
    cy.get("[data-test-id='task-editor-details']").type(details);
    cy.get("[data-test-id='task-editor-save']").click();
};

const createSubTask = (taskTitle, subTaskTitle) => {
    createTask(taskTitle, "Details");
    cy.contains(taskTitle).click();

    cy.get("[data-test-id='task-list-add-button']").click();
    cy.get("[data-test-id='task-editor']");
    cy.get("[data-test-id='task-editor-title']").type(subTaskTitle);
    cy.get("[data-test-id='task-editor-save']").click();
};

describe("ToDo Component", () => {
    it("When the page loaded Then it should render", () => {
        gotoToDoComponent();
    });

    it("When added a new task Then it should display the newly added task to the list", () => {
        const title = `Task-${new Date().getTime()}`;
        const details = "Sample details";

        createTask(title, details);

        cy.get("[data-test-id='task-list-item']")
            .its("length")
            .should("be.gte", 1);

        cy.contains(title);
    });

    it("When added a sub new task Then it should display the newly added sub task to the list", () => {
        const taskTitle = `Task-${new Date().getTime()}`;
        const subTaskTitle = `Sub-Task-${new Date().getTime()}`;

        createSubTask(taskTitle, subTaskTitle);

        cy.contains(subTaskTitle);
    });
});