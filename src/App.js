import AppStoreProvider from "./redux_store_provider";
import AppThemeProvider from "./mui_theme_provider";

function App() {
  return (
    <div className="App">
      <AppStoreProvider>
        <AppThemeProvider></AppThemeProvider>
      </AppStoreProvider>
    </div>
  );
}

export default App;
