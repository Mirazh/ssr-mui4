import React from 'react'
import { hydrate } from 'react-dom'
import { ThemeProvider } from '@material-ui/styles'
import App from './Components/App'
import theme from './theme'

function Main() {
  React.useEffect(() => {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

hydrate(<Main />, document.getElementById('root'));
