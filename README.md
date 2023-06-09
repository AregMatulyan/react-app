# DummyJSON App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

### React version: 18.2.0 


## Used Packages

Additional packages that used in the application
 * [React Router v6](https://reactrouter.com/en/main)
 * [Axios](https://reactrouter.com/en/main)
 * [Material UI](https://mui.com/)
 * [Material UI - X Data Grid](https://mui.com/x/react-data-grid/)
 * [Lodash - debounce](https://www.npmjs.com/package/lodash.debounce)
 * [React Hook Form](https://react-hook-form.com/)
 * [Yup](https://www.npmjs.com/package/yup)

## Installation

Copy environment variables
```shell
cp .env.example .env
```

Install dependencies
```shell
yarn
```

Run the app
```shell
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Configuration

In order to edit Products list table columns or rows you can 
change values in environment variables and restart the application.

```shell
REACT_APP_LIMIT_PRODUCT_PER_PAGE=15

REACT_APP_PRODUCT_LIST_CELLS=title,price,brand,category
```