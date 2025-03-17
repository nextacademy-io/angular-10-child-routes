# Angular Workshop: Routing with children

In this task, we'd like to refactor the _clash_ use-case. All the views specific to the use-case should be embedded in a common component and it's routes should be relative to this components path.

---

### **1. Create the `ClashComponent`**

```sh
ng generate component clash/clash --flat
```

With the `--flat` option you're saying: _Don't create the last folder._

Place a (second) `<router-outlet></router-outlet>` in the components html template. Don't forget to import the `RouterOutlet` in the components `@Component({ imports: [ ... ] })` section.

You may want to render the title **Clashes** as a header, somewhere above the `<router-outlet></router-outlet>`.

---

### **2. Reconfigure routing**

In the `app.routes.ts`:

1. The newly created `ClashComponent` should be configured for the (already existing) path `/clashes`.
2. This configuration has `children`. Place (move) all existing route configurations into this section.
3. The route configurations in the `children` section must not have the `/children/` in its `path`.

=> Everything should work as before.

Hint:

```ts
{
  path: 'foo',
  component: FooComponent,
  children: [
    {
      path: ':id',
      component: FooDetailsComponent
    },
    {
      path: '',
      component: FooListComponent
    }
  ]
}
```
