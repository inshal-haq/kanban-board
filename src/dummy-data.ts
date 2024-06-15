/* eslint-disable @typescript-eslint/no-explicit-any */
// Define the types/interfaces for your data
import Board from "./models/board";
import Column from "./models/column";
import Task from "./models/task";
import Subtask from "./models/subtask";

interface boardState {
  boards: Board[];
}

// Define the toPlainObject method implementations
const toPlainObjectMethods = {
  subtaskToPlainObject(this: Subtask) {
    return {
      id: this.id,
      title: this.title,
      isCompleted: this.isCompleted,
    };
  },
  taskToPlainObject(this: Task) {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      status: this.status,
      subtasks: this.subtasks.map((subtask) => subtask.toPlainObject()),
    };
  },
  columnToPlainObject(this: Column) {
    return {
      id: this.id,
      name: this.name,
      tasks: this.tasks.map((task) => task.toPlainObject()),
    };
  },
  boardToPlainObject(this: Board) {
    return {
      id: this.id,
      name: this.name,
      columns: this.columns.map((column) => column.toPlainObject()),
    };
  },
};

// Convert JSON data to a constant with toPlainObject methods
export const DUMMY_DATA: boardState = {
  boards: [
    {
      id: "board1",
      name: "Platform Launch",
      columns: [
        {
          id: "column1",
          name: "Todo",
          tasks: [
            {
              id: "task1",
              title: "Build UI for onboarding flow",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  id: "subtask1",
                  title: "Sign up page",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask2",
                  title: "Sign in page",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask3",
                  title: "Welcome page",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
            {
              id: "task2",
              title: "Build UI for search",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  id: "subtask4",
                  title: "Search page",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
            {
              id: "task3",
              title: "Build settings UI",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  id: "subtask5",
                  title: "Account page",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask6",
                  title: "Billing page",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
            {
              id: "task4",
              title: "QA and test all major user journeys",
              description:
                "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
              status: "Todo",
              subtasks: [
                {
                  id: "subtask7",
                  title: "Internal testing",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask8",
                  title: "External testing",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
          ],
          toPlainObject: toPlainObjectMethods.columnToPlainObject,
        },
        {
          id: "column2",
          name: "Doing",
          tasks: [
            {
              id: "task5",
              title: "Design settings and search pages",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  id: "subtask9",
                  title: "Settings - Account page",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask10",
                  title: "Settings - Billing page",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask11",
                  title: "Search page",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
            {
              id: "task6",
              title: "Add account management endpoints",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  id: "subtask12",
                  title: "Upgrade plan",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask13",
                  title: "Cancel plan",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask14",
                  title: "Update payment method",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
            {
              id: "task7",
              title: "Design onboarding flow",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  id: "subtask15",
                  title: "Sign up page",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask16",
                  title: "Sign in page",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask17",
                  title: "Welcome page",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
            {
              id: "task8",
              title: "Add search endpoints",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  id: "subtask18",
                  title: "Add search endpoints",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask19",
                  title: "Define search filters",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
            {
              id: "task9",
              title: "Add authentication endpoints",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  id: "subtask20",
                  title: "Define user model",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask21",
                  title: "Add auth endpoints",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
            {
              id: "task10",
              title:
                "Research pricing points of various competitors and trial different business models",
              description:
                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
              status: "Doing",
              subtasks: [
                {
                  id: "subtask22",
                  title: "Research competitor pricing and business models",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask23",
                  title: "Outline a business model that works for our solution",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask24",
                  title:
                    "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
          ],
          toPlainObject: toPlainObjectMethods.columnToPlainObject,
        },
        {
          id: "column3",
          name: "Done",
          tasks: [
            {
              id: "task11",
              title: "Conduct 5 wireframe tests",
              description:
                "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
              status: "Done",
              subtasks: [
                {
                  id: "subtask25",
                  title: "Complete 5 wireframe prototype tests",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
            {
              id: "task12",
              title: "Create wireframe prototype",
              description:
                "Create a greyscale clickable wireframe prototype to test our assumptions so far.",
              status: "Done",
              subtasks: [
                {
                  id: "subtask26",
                  title: "Create clickable wireframe prototype in Balsamiq",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
            {
              id: "task13",
              title: "Review results of usability tests and iterate",
              description:
                "Keep iterating through feedback until the solution makes sense.",
              status: "Done",
              subtasks: [
                {
                  id: "subtask27",
                  title: "Review feedback from 5 usability tests",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask28",
                  title: "Update wireframe prototype",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
            {
              id: "task14",
              title: "Create initial user flow diagram",
              description:
                "Create a user flow diagram that outlines the initial steps for our users to follow when first using our product.",
              status: "Done",
              subtasks: [
                {
                  id: "subtask29",
                  title: "Create initial user flow diagram in Whimsical",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
            {
              id: "task15",
              title: "Create low fidelity wireframes",
              description:
                "Create low fidelity wireframes for the most crucial user journeys.",
              status: "Done",
              subtasks: [
                {
                  id: "subtask30",
                  title: "Create low fidelity wireframes in Balsamiq",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
            {
              id: "task16",
              title: "Create a project plan and timeline",
              description: "",
              status: "Done",
              subtasks: [
                {
                  id: "subtask31",
                  title: "Create a project plan",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask32",
                  title: "Create a project timeline",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
            {
              id: "task17",
              title: "Set up project in Jira",
              description: "",
              status: "Done",
              subtasks: [
                {
                  id: "subtask33",
                  title: "Set up project in Jira",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask34",
                  title: "Invite team to project",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask35",
                  title: "Create initial task templates",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask36",
                  title: "Create initial story templates",
                  isCompleted: true,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
          ],
          toPlainObject: toPlainObjectMethods.columnToPlainObject,
        },
      ],
      toPlainObject: toPlainObjectMethods.boardToPlainObject,
    },
    {
      id: "board2",
      name: "Marketing Plan",
      columns: [
        {
          id: "column1",
          name: "Todo",
          tasks: [
            {
              id: "task18",
              title: "Plan Product Hunt launch",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  id: "subtask37",
                  title: "Find hunter",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask38",
                  title: "Gather assets",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask39",
                  title: "Draft product page",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask40",
                  title: "Notify customers",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask41",
                  title: "Notify network",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask42",
                  title: "Launch!",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
            {
              id: "task19",
              title: "Share on Show HN",
              description: "",
              status: "",
              subtasks: [
                {
                  id: "subtask43",
                  title: "Draft out HN post",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask44",
                  title: "Get feedback and refine",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask45",
                  title: "Publish post",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
            {
              id: "task20",
              title: "Write launch article to publish on multiple channels",
              description: "",
              status: "",
              subtasks: [
                {
                  id: "subtask46",
                  title: "Write article",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask47",
                  title: "Publish on LinkedIn",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask48",
                  title: "Publish on Indie Hackers",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask49",
                  title: "Publish on Medium",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
          ],
          toPlainObject: toPlainObjectMethods.columnToPlainObject,
        },
        {
          id: "column2",
          name: "Doing",
          tasks: [],
          toPlainObject: toPlainObjectMethods.columnToPlainObject,
        },
        {
          id: "column3",
          name: "Done",
          tasks: [],
          toPlainObject: toPlainObjectMethods.columnToPlainObject,
        },
      ],
      toPlainObject: toPlainObjectMethods.boardToPlainObject,
    },
    {
      id: "board3",
      name: "Roadmap",
      columns: [
        {
          id: "column1",
          name: "Now",
          tasks: [
            {
              id: "task21",
              title: "Launch version one",
              description: "",
              status: "",
              subtasks: [
                {
                  id: "subtask50",
                  title: "Launch privately to our waitlist",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask51",
                  title: "Launch publicly on PH, HN, etc.",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
            {
              id: "task22",
              title: "Review early feedback and plan next steps for V2",
              description:
                "Beyond fixing bugs and issues, we need to shape our plan for the next phase.",
              status: "",
              subtasks: [
                {
                  id: "subtask52",
                  title: "Add feature roadmap to website",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask53",
                  title:
                    "Collect additional notes under each feature roadmap section",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask54",
                  title: "Review and plan next steps",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
            {
              id: "task23",
              title: "Begin preparing version two",
              description: "",
              status: "",
              subtasks: [
                {
                  id: "subtask55",
                  title: "First version of business model canvas",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
                {
                  id: "subtask56",
                  title: "Complete competitor analysis",
                  isCompleted: false,
                  toPlainObject: toPlainObjectMethods.subtaskToPlainObject,
                },
              ],
              toPlainObject: toPlainObjectMethods.taskToPlainObject,
            },
          ],
          toPlainObject: toPlainObjectMethods.columnToPlainObject,
        },
        {
          id: "column2",
          name: "Next",
          tasks: [],
          toPlainObject: toPlainObjectMethods.columnToPlainObject,
        },
        {
          id: "column3",
          name: "Later",
          tasks: [],
          toPlainObject: toPlainObjectMethods.columnToPlainObject,
        },
      ],
      toPlainObject: toPlainObjectMethods.boardToPlainObject,
    },
  ],
};

// Example of how to call toPlainObject on a board
console.log(DUMMY_DATA.boards[0].toPlainObject());
