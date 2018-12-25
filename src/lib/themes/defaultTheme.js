import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';


const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#d91b00"
    },
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