import React from "react";
import AppRoutes from "./AppRoutes";
import '../styles/main.css'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
   fontFamily: 'Verdana, sans-serif',
   colorScheme: 'dark',
   defaultRadius: 'md',
   primaryColor: 'orange',
});

const App = () => {
   return (
      <MantineProvider theme={theme}>
         <div className="container">
            <AppRoutes />
         </div>
      </MantineProvider>

   )
} 

export default App;