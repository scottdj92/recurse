# recurse
A React component to make recursion easier

## Getting started with development

1. `npm install` to install your deps
2. `npm run dev` to run the local dev example using Parceljs inside of `./example`

# Why?
Doing recursive React components are a pain in the butt. Hopefully this lib abstracts it away and makes things easier.

## Planned API
The API is as follows: you pass in your data and a component that you want to recursively pass your data through.

```tsx
<Recurse data={object} component={<Component/>}/>
```

This will render your specified component and pass through your data down as props to each individual component.
