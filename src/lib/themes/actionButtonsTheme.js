import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const actionButtonsTheme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red,
  },
  typography: {
    useNextVariants: true,
  },
});

export default actionButtonsTheme;