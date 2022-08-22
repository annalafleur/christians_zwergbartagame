import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/blocks/Footer';
import Pages from './pages/Pages';

function App() {

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Pages />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
