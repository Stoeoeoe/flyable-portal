import './App.css';
import '@flowable/forms/flwforms.min.css';
import {Box, ThemeProvider} from '@mui/material';
import {Header} from "./layout/Header";
import {Footer} from "./layout/Footer";
import {BrowserRouter as Router,} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {MainContent} from './mainContent';
import {SnackbarProvider} from "notistack";
import theme from "./layout/theme";

const App = () => {

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <SnackbarProvider/>
                <Router>
                    <Box className="App" display="flex" flexDirection="column" minHeight="100vh">
                        <Header/>
                        <MainContent/>
                        <Footer/>
                    </Box>
                </Router>
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default App;