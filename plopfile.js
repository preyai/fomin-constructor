export default function (plop) {
  plop.setGenerator('component', {
    description: 'Генератор компонента React',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Введите имя компонента:',
    }],
    actions: [{
      type: 'add',
      path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
      templateFile: 'plop/templates/Component.tsx.hbs',
    }, {
      type: 'add',
      path: 'src/components/{{pascalCase name}}/{{pascalCase name}}Styles.module.scss',
      templateFile: 'plop/templates/styles/ComponentStyles.module.scss',
    }],
  })
}