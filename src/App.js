import './App.css';
import { Badge, Button } from './lib';
import { ThemeProvider } from '@emotion/react';
import { theme } from './lib/themes/theme-one';
import { theme2 } from './lib/themes/theme-two';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button
          label="button title"
          handleClick={() => {
            console.log('handle click');
          }}
        />
        <Badge value="3" />
      </div>
    </ThemeProvider>
  );
}

export default App;
