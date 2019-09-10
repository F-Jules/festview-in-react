
                               // REGARDING MY CODE //

- La config Webpack + modules JS se trouve dans le fichier config. NE PAS TOUCHER SAUF CERTITUDE

- index.html se trouve dans le fichier public. Il s'agit du root de la single page app. NE PAS MODIFIER, BOUGER ou SUPPRIMER.

- Les fichiers JSX se trouvent dans le fichier SRC:

==> Dans le fichier API se trouve le APIHandler qui sert de squelette et de conditions pour les futures call axios. Il lui suffit d'etre importé puis appelé avec le mot clé "new" pour pouvoir etre utilisé avec n'importe quel verbe dans n'importe quel fichier se trouvant dans src.

==> Dans le fichier Assets se trouve les images et logos.

==> Dans le ficher Auth se trouve une première configuration du future systeme de login / logout, context provider et protected route avec redirection. (pas encore implantée au 10/09)

==> Dans le fichier components se trouve les composants réutilisables (Loading, Forms, Nav...).

==> Dans le fichier Pages, se trouve les composants pages (All, One...)

==> App.css contient les route et un premier call axios de type "header" (Nom, pseudo, type, photo) qui est passé en props a AllPages et SearchPage.

// POUR LE MOMENT LE CSS... C'EST PAS OUF //
  
 // REGARDING CREARTE REACT APP //

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
