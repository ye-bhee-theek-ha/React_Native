# NativeStructure

Welcome to NativeStructure! This React Native project is designed with a clear and organized structure to facilitate efficient development and collaboration within a team.

## Project Structure

The project follows a well-defined structure to keep your codebase organized:

- **src/:** The source code resides in this folder, distinguishing it from other files.

  - **screens/:** Each screen or view has its own dedicated folder.
  - **components/:** Reusable components are stored here.
  - **navigation/:** Contains code related to navigation, including React Navigation configurations.
  - **services/:** Handles API calls, analytics, and other services.
  - **redux/:** Manages state with actions, reducers, and store configurations.
  - **assets/:** Static assets like images and fonts are stored here.
  - **libs/:** Additional libraries and configurations.
  - **utils/:** Utility functions and helpers are placed in this folder.

## Important Yarn Commands

Make sure you have \_template folder (provided by 724.One) inside your root folder

- **Adding Hygen to DevDependencies:**

```bash
yarn add hygen -D
```

- **To create a screen:**

  after the --name variable you can use the name of your screen. If you will add --hooks it will add both useState and useEffect to the screen. You can use --state and --effect separately if you do not want to add both.

```bash
yarn screen --name MyScreen

yarn screen --name MyScreen --state

yarn screen --name MyScreen --effect

yarn screen --name MyScreen --hooks
```

- **Creating Screens Inside Sub-Folders of the Screens Folder:**

  after the --name variable you can use the name of your screen and --folder write the name of the sub-folder inside which you want to create the screen. If you will add --hooks it will add both useState and useEffect to the screen. You can use --state and --effect separately if you do not want to add both.

```bash
yarn screen:sub --name MyScreen --folder MySubFolder

yarn screen:sub --name MyScreen --MySubFolder --state

yarn screen:sub --name MyScreen --MySubFolder --effect

yarn screen:sub --name MyScreen --MySubFolder --hooks
```

- **Creating a Component Inside the Components Folder:**

  after the --name variable you can use the name of your component

```bash
yarn component --name MyComponent
```

- **To create a bottom tab for navigation:**

  after the --name variable you can use the name of your tab

```bash
yarn tab --name MyTab
```

- **To create a stack for navigation:**

  after the --name variable you can use the name of your stack

```bash
yarn stack --name AuthStack
```

- **To create a Drawer for navigation:**

  after the --name variable you can use the name of your drawer

```bash
yarn drawer --name MyDrawer
```

## Screens Folder

The `screens/` folder is where each screen or view in your application has its own dedicated sub-folder. This helps keep the codebase organized and makes it easy to find and manage specific components related to each screen.

### Sub-folders Structure

Each sub-folder within the `screens/` folder follows a consistent structure:

- **Login/:** Folder for the Login screen.

  - **Login.js:** The main component file for the Login screen.
  - **Style.js:** The styles file for the Login screen.

- **SignUp/:** Folder for the SignUp screen.

  - **SignUp.js:** The main component file for the SignUp screen.
  - **Style.js:** The styles file for the SignUp screen.

  ### Example Structure:

```plaintext
src/
|-- screens/
|   |-- Login/
|   |   |-- Login.js
|   |   |-- Style.js
|   |
|   |-- SignUp/
|   |   |-- SignUp.js
|   |   |-- Style.js
|   |
|   |-- OtherScreen/
|   |   |-- OtherScreen.js
|   |   |-- Style.js
|   ...
```

This structured approach allows for a clean organization of screen-related components, making it easier to locate, manage, and collaborate on different parts of your React Native application.

## Component Structure

Each component in the project follows a consistent structure for maintainability:

- **Component Folder:**

  - Each component has its own folder within the `components/` directory.

- **Component File:**

  - The main component file is named as `MyComponent.js`.

- **Styles File:**

  - Styles for the component are separated into `MyComponentStyles.js`.

- **Test File:**

  - Unit tests for the component are placed in `MyComponent.test.js`.

## Navigation Configuration

The `navigation/` folder contains various navigation configurations using React Navigation. Each file in this folder serves a specific purpose in managing the navigation flow of your application.

### Files Structure

- **UnAuthStack.js:** Configures the navigation stack for unauthenticated users. This may include login, signup, and other screens accessible to users who have not yet logged in.

- **AuthStack.js:** Configures the navigation stack for authenticated users. This may include the main app screens accessible to users after logging in.

- **BottomTab.js:** Configures the bottom tab navigation for the application, allowing users to navigate between different sections or features easily.

- **.../:** Additional navigation files can be added based on the complexity and structure of your application.

### Example Structure:

```plaintext
src/
|-- navigation/
|   |-- UnAuthStack.js
|   |-- AuthStack.js
|   |-- BottomTab.js
|   |-- OtherNavigation.js
|   ...
```

Each navigation file can be imported and integrated into your main App.js or index.js file to set up the navigation for your entire application.

### How to Use Navigation Configurations?

```bash
// Example in App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UnAuthStack from './navigation/UnAuthStack';
import AuthStack from './navigation/AuthStack';

const App = () => {
const isAuthenticated = true; // Check if the user is authenticated

return (
 <NavigationContainer>
   {isAuthenticated ? <AuthStack /> : <UnAuthStack />}
 </NavigationContainer>
);
};

export default App;

```

This structured approach allows for a clear separation of navigation concerns, making it easier to manage and extend the navigation flow of your React Native application.

## API Calls using React Queries

In this project, API calls are managed using [React Query](https://react-query.tanstack.com/), a powerful and flexible library for handling asynchronous data fetching. The `services` folder contains sub-folders for managing queries and mutations.

### `queries/` Folder

The `queries/` folder is dedicated to handling queries using React Queries. This includes defining and organizing queries for fetching data from your API.

### `mutations/` Folder

The `mutations/` folder is dedicated to handling mutations using React Queries. This includes defining and organizing mutations for modifying data on your server.

This structured approach allows for a clean separation of concerns, making it easier to manage and extend your API-related code. Each query and mutation can be encapsulated in its own file within the respective folders.

Feel free to explore the `queries/` and `mutations/` folders to understand and extend the functionality of API calls in this project.

## Redux State Management

The `redux/` folder is dedicated to managing state using Redux Toolkit. This includes actions, reducers, and the configuration of the Redux store.

### Files Structure:

```plaintext
src/
|-- redux/
|   |-- actions/
|   |   |-- authActions.js
|   |   |-- otherActions.js
|   |
|   |-- reducers/
|   |   |-- authReducer.js
|   |   |-- otherReducer.js
|   |
|   |-- store.js
```

### How to Use

1. **Actions:**

- Create action files (e.g., authActions.js, otherActions.js) to define actions related to specific parts of your application.

2. **Reducers:**

- Create reducer files (e.g., authReducer.js, otherReducer.js) to specify how the state changes in response to actions.

3. **Store Configuration:**

- Create a store.js file to configure and export the Redux store.

This structured approach using Redux Toolkit allows for a clean and efficient way to manage the state of your React Native application.

## Theme Configuration using `Theme.json`

The `libs/` folder contains a `Theme.json` file that serves as a central configuration for theming your React Native application.

### What's Inside `Theme.json`?

The `Theme.json` file includes predefined values for:

- **Colors:** Define primary, secondary, accent, background, text, link, and border colors.
- **Typography:** Configure font families, font sizes, and font weights for different text elements.
- **Borders:** Set border radius and width for consistent styling.
- **Shadows:** Define shadow properties for consistent box shadows.
- **Elevation:** Specify elevation values for consistent component elevations.

### How to Use `Theme.json`?

1. **Import in Components:**

   - Import the `Theme.json` file in your components to access the defined values.

   ```jsx
   import Theme from '../libs/Theme.json';

   const MyComponent = () => {
     // Use Theme.colors.primary, Theme.fontSizes.medium, etc.
     // in your component styles or configurations.
     // ...
   };
   ```

2. **Customization:**

- Customize the values in Theme.json to match the design requirements of your application.

### `Example Usage:`

```bash
import { StyleSheet } from 'react-native';
import Theme from '../libs/Theme.json';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.background,
    padding: Theme.spacing.medium,
    borderRadius: Theme.borders.radius,
    shadowColor: Theme.shadows.medium.shadowColor,
    shadowOffset: Theme.shadows.medium.shadowOffset,
    shadowOpacity: Theme.shadows.medium.shadowOpacity,
    shadowRadius: Theme.shadows.medium.shadowRadius,
    elevation: Theme.elevation.medium,
  },
  text: {
    color: Theme.colors.text,
    fontSize: Theme.fontSizes.medium,
    fontFamily: Theme.typography.body.fontFamily,
    fontWeight: Theme.typography.body.fontWeight,
  },
});

```

This structured theming approach provides a consistent and easily maintainable way to manage the visual aspects of your React Native application.

## Utils Folder

The `utils/` folder is dedicated to housing utility functions and helper modules that can be shared across different parts of your React Native application.

### Files Structure:

```plaintext
src/
|-- utils/
|   |-- commonUtils.js
|   |-- otherUtils.js
```

### How to Use

1. **Common Utilities:**

- Create a file (e.g., commonUtils.js) for common utility functions that can be used throughout the application.

This structured approach allows for the centralization of utility functions, making it easy to locate, manage, and reuse helper methods throughout your React Native application.

## Assets Folder

The `assets/` folder is dedicated to storing static assets such as images, GIFs, and fonts. This separation allows for easy management and retrieval of assets throughout the application.

### Files Structure:

```plaintext
src/
|-- assets/
|   |-- images/
|   |   |-- logo.png
|   |   |-- background.jpg
|   |
|   |-- gif/
|   |   |-- loading.gif
|   |   |-- animation.gif
|   |
|   |-- fonts/
|   |   |-- OpenSans-Regular.ttf
|   |   |-- Roboto-Bold.ttf
```

### How to Use

1. **Images:**

- Store image assets (e.g., logo.png, background.jpg) in the images/ folder.

2. **GIFs:**

- Store GIF assets (e.g., loading.gif, animation.gif) in the gif/ folder.

3. **Fonts:**

- Store font assets (e.g., OpenSans-Regular.ttf, Roboto-Bold.ttf) in the fonts/ folder.

### `Example Usage in Components:`

```bash
// Example in a component
import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './MyComponentStyles'; // Assume you have a style file

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
};

export default MyComponent;

```

This structured approach allows for a centralized location for static assets, making it easy to reference and manage images, GIFs, and fonts in your React Native application.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/724-one/NativeStructure.git
   ```

2. Change into the project directory:

   ```bash
   cd NativeStructure
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   yarn start
   ```

Follow the instructions to run the project on your preferred emulator or device.

**Usage Disclaimer:**
This project structure and associated files are intended for use exclusively within the 724.One organization. Unauthorized use, distribution, or reproduction of this project structure, in whole or in part, is strictly prohibited. Misuse of this structure may lead to legal action.

**Contributing:**
If you are a member of the 724.One team, feel free to contribute and improve the project structure. Ensure that any changes align with the company's coding standards and best practices.

**Contact:**
If you have questions or need clarification on the usage of this project structure, please contact Fiyaz Hussain at [fiyaz@724.one].

Thank you for your understanding and cooperation.

## Author

This project is created and maintained by:

**Fiyaz Hussain**  
_Software Engineer and Team Lead_  
724.One

https://724.one/fiyaz-hussain/

---

_Feel free to reach out if you have any questions or need assistance with the project._

_Happy coding!_
#   R e a c t _ N a t i v e  
 