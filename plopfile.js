import fs from "fs-extra";

export default function (plop) {
  // ----------------------------------------
  // # Custom action definitions
  // ----------------------------------------

  // Remove action
  plop.setActionType("remove", function (answers, config, plop) {
    const filePath = plop.renderString(config.path, answers);

    // Check if the file or directory exists
    if (fs.existsSync(filePath)) {
      // Remove the file or directory
      fs.removeSync(filePath);
      return `Removed: ${filePath}`;
    } else {
      return `File or directory does not exist: ${filePath}`;
    }
  });

  // ----------------------------------------
  // # Generators
  // ----------------------------------------

  // Creates a component
  plop.setGenerator("component", {
    description: "Create a new React component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/component/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/styles.tsx",
        templateFile: "plop-templates/component/styles.tsx.hbs",
      },
      {
        type: "modify",
        path: "src/components/index.ts",
        pattern: /(\/\/ COMPONENT EXPORTS)/g,
        template: 'export { {{pascalCase name}} } from "./{{pascalCase name}}";\n$1',
      },
    ],
  });

  // Deletes a component
  plop.setGenerator("delete-component", {
    description: "Delete an existing React component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name to delete?",
      },
    ],
    actions: function (data) {
      var actions = [
        {
          type: "remove",
          path: "src/components/{{pascalCase name}}",
        },
        {
          type: "modify",
          path: "src/components/index.ts",
          pattern: new RegExp(
            `export\\s+{\\s*${data.name}\\s*}\\s+from\\s+['"]\\.\\/(${data.name})['"];?\\s*\\n?`,
            "g"
          ),
          template: "",
        },
      ];

      return actions;
    },
  });
}
