import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import orange from '@material-ui/core/colors/orange';

const defaultTheme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: orange,
  },
  status: {
    danger: 'orange',
  },
  typography: {
    useNextVariants: true,
  },
});

export default defaultTheme;