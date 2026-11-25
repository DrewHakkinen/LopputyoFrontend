import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import CustomerList from "./components/CustomerList"
import CssBaseline from "@mui/material/CssBaseline"


function App() {

  return (
    <Container maxWidth="lg" >
      <AppBar position="static" sx={{ mb: 2 }}>
        <Toolbar>
          <Typography variant="h6">Customers</Typography>
        </Toolbar>
      </AppBar>
      <CustomerList />
      <CssBaseline />
    </Container>
  )
}

export default App
