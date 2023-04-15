#### Packages used:

- `framer-motion`: for animating section tab changes
- `jotai`: for global state management & data storage
- `nextjs-progressbar`: for showing top progressbar
- `react-hook-form`: form validation library
- `react-icons`: for svg icons

#### About the project

1. All provided pages in designs have been converted to code.
1. Initially hardcoded values are used for some changeable fields.
1. After a user changes the data like name, about etc. from settings, new updated value is reflected in the profile page.
1. User changed data is persisted on client side using jotai's `atomWithStorage` (uses localstorage by default)
1. Likewise some sections can be choosen to be visible or hidden form profile page
